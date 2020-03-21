import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropDown from './Component/DropDown.js';
import DisplayStatus from './Component/DisplayStatus.js';

class App extends React.Component {
  state = {
    storeList: [{ store: "Tesco", status: "S" },
    { store: "Sainsbury", status: "L" },
    { store: "Aldi", status: "S" },
    { store: "Quality Save", status: "N" },
    { store: "Wilko", status: "N" },
    { store: "B and M", status: "S" },
    { store: "SuperDrug", status: "L" }]
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


  render() {


    const itemList = [{ name: "Toilet Roll" }, { name: "Hand Sanitiser" }];

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
                        key={item.store}
                      />
                    })}
                  </ol>
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
