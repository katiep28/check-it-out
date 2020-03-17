import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropDown from './Component/DropDown.js';
import DisplayStatus from './Component/DisplayStatus.js';

class App extends React.Component {

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
    

    const itemList = [{name: "Toilet Roll"}, {name: "Hand Sanitiser"}];
    
    return (

    <div className="App">
      <header className="App-header">
      <h1>
          Check it Out
        </h1>
      </header>
      <div className="row"></div>
      <div className="col-12 col-lg-12">
          <h3>blahhh balhhh blahhh</h3>
      </div>

      <div className="row"></div>
        <div className="col-12 col-lg-12">
    
          <DropDown
            itemList={itemList}
            label="Item List" 
            key="1"
            getStatusFunc={this.getStatus}
          />

        </div>
        <div className="row"></div>
           <div className="col-12 col-lg-12">
              <DisplayStatus/>
          </div>
      </div>

  );
}
}

export default App;
