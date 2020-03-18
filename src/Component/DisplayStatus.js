import React from 'react';

class DisplayStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick = () => {
    }

    closeModal() {
        this.props.resetVariablesFunc();
    }

    render() {
        return (
                <div>   
                    <div className="col-2 col-lg-2">
                        {this.props.store} 
                    </div>
                    <div className="col-3 col-lg-3">
        
                        <button className="btn btn-danger"
                                onClick={this.handleClick}>None
                        </button>
                    </div>
                     <div className="col-3 col-lg-3">
                            <button className="btn btn-warning"
                                    onClick={this.handleClick}>Some
                            </button>
                    </div>
     
                    <div className="col-3 col-lg-3">
                        <button className="btn btn-success"
                            onClick={this.handleClick}>Lots
                        </button>
                    </div>

                    <div className="col-1 col-lg-1">
                        <i className="fas fa-edit"></i>
                   </div>
                
           </div> 
        );
    }
}


export default DisplayStatus;