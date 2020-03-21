import React from 'react';

class DisplayStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // disableButton : false
        }
    }

    handleClick = () => {

    }
    disableButton = (type) => {
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
                    <div className="col-3 col-lg-3">
                    </div>
                    <div className="col-2 col-lg-2">
                        <p> {this.props.store}  </p>
                    </div>
                    <div className="col-1 col-lg-1">
    
                        {this.disableButton("None") 
                            ?
                            <button className="btn2 btn-outline-danger btn-block" disabled={true}
                                    onClick={this.handleClick}>None
                            </button>
                            :
                            <button className="btn2 btn-danger btn-block" disabled={true}
                                    onClick={this.handleClick}>None
                            </button>
                    }
                    </div>
                     <div className="col-1 col-lg-1">
                     {this.disableButton("Some") 
                            ?
                            <button className="btn2 btn-outline-warning btn-block" disabled={true}
                                    onClick={this.handleClick}>Some
                            </button>
                            :
                            <button className="btn2 btn-warning btn-block" disabled={true}
                                    onClick={this.handleClick}>Some
                            </button>
                    }
                    </div>
     
                    <div className="col-1 col-lg-1">
  
                        {this.disableButton("Lots") 
                            ?
                            <button className="btn2 btn-outline-success btn-block" disabled={true}
                                    onClick={this.handleClick}>Lots
                            </button>
                            :
                            <button className="btn2 btn-success btn-block" disabled={true}
                                    onClick={this.handleClick}>Lots
                            </button>
                    }
                    </div>

                    <div className="col-2 col-lg-2">

                    <p> Updated {this.props.date}</p>
                   </div>
                   <div className="col-2 col-lg-2">
                   </div>
                
           </div> 
        );
    }
}


export default DisplayStatus;