import React from 'react';
import './App.css';
import DropDown from './Component/DropDown.js';
import DisplayStatus from './Component/DisplayStatus.js';

import axios from "axios";

class App extends React.Component {
  state = {
    disableButton: true,
    itemList: [],
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
getStatus = (itemName,postCode) => {
  let itemId = "";

  this.state.itemList.map(item => {
    if (item.name === itemName)
    {
      itemId = item.id;  
    }
  });

  axios.get('https://m5xyp9jfmk.execute-api.eu-west-2.amazonaws.com/dev/itemstatus/' + itemId + "/" + postCode)
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
    disableButton: true
  })
}

 editItems = () => {
  this.setState({
          disableButton: false
        })
 
}



  updateStatus = (store,status) => {
    // axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getcocktaildrink/' + drink1 + "/" + drink2 + "/" + drink3)
    //   .then((response) => {

    //     console.log(response.data.cocktails);

    //     this.setState({
    //       cocktailByDrink: response.data.cocktails
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
// console.log("STATUS " + status);
    this.setState({
      disableButton: true
    })
  }
   editItems = () => {
    this.setState({
            disableButton: false
          })
   
  }

  render() {
    
    return (

        <div className="AppHeader">
          <h1>Chek it Out </h1>
          <h5>Easliy locate where to find essential items in M33</h5>
          <h5>If you have seen stock in store click the edit button at the bottom and update the information</h5>
          <h5> If you want to add items to the list drop me an email</h5> 
          <div>
            <div className="Container">
              <DropDown
                itemList={this.state.itemList}
                label="Item List"
                key="1"
                getStatusFunc={this.getStatus}
              />
              <br/>
              <br/>

              <div className="row ">
                <div className="col-12 col-lg-12 ">

                  <ol className="list-group ">
                    {this.state.storeList.map(store => {
                      return <DisplayStatus
                        store={store.name}
                        status={store.quantity}
                        date={store.dateformatted}
                        disableButton={this.state.disableButton}
                        updateStatusFunc = {this.updateStatus}
                        key={store.id}
                      />
                    })}
                  </ol>
                </div>
              </div>
              <br/>
              <div className="row ">
                <div className="col-12 col-lg-12 ">
                  <button>
                     <i className="fa fa-edit fa-4x" 
                         onClick={this.editItems}/> 
                  </button>
                </div>
              </div>
              <br/>
              <div className="row ">
                <div className="col-12 col-lg-12 ">
                    <p> email address goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}

export default App;
