import React from 'react';

class DisplayStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    handleClick = (status) => {
//call an update function to update the details

console.log("Hello " + status);

        this.props.updateStatusFunc(this.props.store, status);
    }

    disableButton = (type) => {
        // If the edit button has been press enable the buttons
        if (this.props.disableButton === false){
            return false;
        }
        //Check to see which button to highlight
        if (type === "Lots" && this.props.status === "L"){
            return false;
        }
        if (type === "Some" && this.props.status === "S"){
            return false;
        }
        if (type === "None" && this.props.status === "N"){
            return false;
        }

        return true;
    }


    closeModal() {
        this.props.resetVariablesFunc();
    }

    render() {
        return (  
                <div className="row ">
                    <div className="col-0 col-lg-3">
                        
                    </div>
                    <div className="col-12 col-lg-1">
                        <p> {this.props.store}  </p>
                    </div>
                    <div className="col-4 col-lg-1">
                        {this.disableButton("None") 
                            ?
                            <button className="btn1 btn-outline-danger btn-block" disabled={true}
                                    onClick={this.handleClick}>None
                            </button>
                            :
                            <button className="btn1 btn-danger btn-block" disabled={this.props.disableButton}
                                    onClick={this.handleClick.bind(this, "N")}>None
                            </button>
                        }
                    </div>
                     <div className="col-4 col-lg-1">
                        {this.disableButton("Some") 
                            ?
                            <button className="btn2 btn-outline-warning btn-block" disabled={true}
                                    onClick={this.handleClick}>Some
                            </button>
                            :
                            <button className="btn2 btn-warning btn-block" disabled={this.props.disableButton}
                                    onClick={this.handleClick.bind(this, "S")}>Some
                                  
                            </button>
                        }
                    </div>
                    <div className="col-4 col-lg-1">
                        {this.disableButton("Lots") 
                            ?
                            <button className="btn3 btn-outline-success btn-block" disabled={true}
                                    onClick={this.handleClick}>Lots
                            </button>
                            :
                            <button className="btn3 btn-success btn-block" disabled={this.props.disableButton}
                                    onClick={this.handleClick.bind(this, "L")}>Lots
                            </button>
                        }
                    </div>
                    <div className="col-12 col-lg-2">
                        <p> Updated {this.props.date}</p>
                   </div>
                   <div className="col-0 col-lg-2">
                   </div>
           </div> 
        );
    }
}


export default DisplayStatus;