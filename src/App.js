import React from 'react';
import './App.css';
import DropDown from './Component/DropDown.js';
import DisplayStatus from './Component/DisplayStatus.js';
import 'moment-timezone';
import axios from "axios";

let moment = require('moment');

class App extends React.Component {
  state = {
    disableButton: true,
    itemList: [],
    itemID: "",
    itemName:"",
    postCode: "M33",
    storeList: []
    // storeList: [{ store: "Tesco", status: "S", date:"01 Jan" },
    // { store: "Sainsbury", status: "L", date:"02 Jan" },
    // { store: "Aldi", status: "S", date: "03 Jan" },
    // { store: "Quality Save", status: "N", date:"04 Jan" },
    // { store: "Wilko", status: "N", date:"05 Jan" },
    // { store: "B and M", status: "", date: "06 Jan" },
    // { store: "SuperDrug", status: "L", date: "07 Jan" }]
  }
  componentDidMount() {
    axios.get('https://m5xyp9jfmk.execute-api.eu-west-2.amazonaws.com/dev/itemname')
      .then((response) => {

        console.log(response.data.itemData);

        this.setState({
          itemList: response.data.itemData
        })
      })
      .catch(function (error) {
        console.log(error);
      })

  };

  getStatus = (tempItemName, postCode) => {
    let tempItemId = "";

    this.state.itemList.map(item => {
      if (item.name === tempItemName) {
        tempItemId = item.id;
      }
    });

    axios.get('https://m5xyp9jfmk.execute-api.eu-west-2.amazonaws.com/dev/itemstatus/' + tempItemId + "/" + postCode)
      .then((response) => {

        console.log(response.data.itemData);

        this.setState({
          storeList: response.data.itemData
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    this.setState({
      itemId: tempItemId,
      itemName: tempItemName,
      disableButton: true
    })
  }

  updateStatus = (storeId, status) => {
    console.log("IN UPDATE STATUS");
    
    let dateTime = moment().format('YYYY-MM-DD HH:mm:ss');
    let dateTimeFormatted = moment().format('DD MMM HH:mm');

    axios.put('https://m5xyp9jfmk.execute-api.eu-west-2.amazonaws.com/dev/updatequantity/' + this.state.postCode + "/" + storeId + "/" + this.state.itemId + "/" + status + "/" + dateTime)

      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({
      disableButton: true
    })
    
    let storeListCopy = this.state.storeList.slice();

    //Make a copy of the tasks array
    //never do this.stat.tasks.push item and access it direactly as this causese
    //a problem
    
    storeListCopy.map (store => {

    if (store.id === storeId)
        {
          console.log("setting status");
          store.quantity = status;
          store.dateformatted = dateTimeFormatted;
        }
    });
    
    this.setState({
      storeList: storeListCopy
    });
  }

  editItems = () => {
    this.setState({
      disableButton: false
    })
  }

  render() {

    return (

      <div className="AppHeader">
        <h1>CheK it Out </h1>
        <div className="row paddingabove">
              <div className="col-0 col-lg-12">
        <h5>Easliy locate essential items in M33</h5>
        <h5>Click the edit button to update the information</h5>
        <h5>To add items to the list drop me an email</h5>
        </div>
        </div>
          <div className="Container">
            <DropDown
              itemList={this.state.itemList}
              label="Item List"
              key="1"
              getStatusFunc={this.getStatus}
            />
            <br />
            <br />
        </div>
        <div className="Details">
            <div className="row paddingabove">
              <div className="col-12 col-lg-3"/>
              <div className="col-12 col-lg-6 paddingabove border border-dark border-thick">
              <br/>
                <ol className="list-group ">
                  {this.state.storeList.map(store => {
                    return <DisplayStatus
                      store={store.name}
                      storeId={store.id}
                      status={store.quantity}
                      date={store.dateformatted}
                      itemName={this.state.itemName}
                      postCode={this.state.postCode}
                      disableButton={this.state.disableButton}
                      updateStatusFunc={this.updateStatus}
                      getStatusFunc={this.getStatus}
                      key={store.id}
                    />
                  })}
                </ol>
              </div>
              <div className="col-12 col-lg-3"></div>
            </div>
            <br />
            <div className="row ">
              <div className="col-12 col-lg-12 ">
                <button>
                  <i className="fa fa-edit fa-4x"
                    onClick={this.editItems} />
                </button>
              </div>
            </div>
            <br />
            <div className="row ">
              <div className="col-12 col-lg-12 ">
                <p> email address goes here</p>
              </div>
            </div>
          </div>
        
      </div>

    );
  }
}

export default App;
