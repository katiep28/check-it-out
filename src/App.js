import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropDown from './Component/DropDown.js';
import DisplayStatus from './Component/DisplayStatus.js';

class App extends React.Component {
  state = {
    disableButton: true,
    storeList: [{ store: "Tesco", status: "S", date:"01 Jan" },
    { store: "Sainsbury", status: "L", date:"02 Jan" },
    { store: "Aldi", status: "S", date: "03 Jan" },
    { store: "Quality Save", status: "N", date:"04 Jan" },
    { store: "Wilko", status: "N", date:"05 Jan" },
    { store: "B and M", status: "S", date: "06 Jan" },
    { store: "SuperDrug", status: "L", date: "07 Jan" }]
  }

  getStatus = (item) => {
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
  }

  updateStatus = (item) => {
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
  }
   editItems = () => {
    this.setState({
            disableButton: false
          })
   
  }

  render() {


    const itemList = [{ name: "Toilet Roll" }, { name: "Hand Sanitiser" }];
    let edit = false;

    return (

      <body>
        <div className="AppHeader">
          <h1>Check it Out </h1>

          <h3>blahhh balhhh blahhh</h3>
          <div>
            <div className="Container">
              <DropDown
                itemList={itemList}
                label="Item List"
                key="1"
                getStatusFunc={this.getStatus}
              />
              <br/>
              <br/>

              <div className="row ">
                <div className="col-12 col-lg-12 ">

                  <ol className="list-group ">
                    {this.state.storeList.map(item => {
                      return <DisplayStatus
                        store={item.store}
                        status={item.status}
                        date={item.date}
                        disableButton={this.state.disableButton}
                        updateStatusFunc = {this.updateStatus}
                        key={item.store}
                      />
                    })}
                  </ol>
                </div>
              </div>
              <br/>
              <div className="row ">
                <div className="col-12 col-lg-12 ">
                     <i className="fa fa-edit fa-4x" 
                         onClick={this.editItems}/> 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
