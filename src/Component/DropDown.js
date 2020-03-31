import React from 'react';



class DropDown extends React.Component {
    constructor() {

        super();
        this.state = {
            postCode : "M33"
            
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    handleDropdownChange(e) {

        this.setState({ selecteditem: e.target.value });
        this.props.getStatusFunc(e.target.value, this.state.postCode);
    }

    hideDropdownMenu() {
    

        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    render() {
        return (

            <div>
                <div className="button"
                    onClick={this.showDropdownMenu} >
                    {/* {this.props.label} */}
                </div>
                <select name={this.props.label} id="dropdown" onChange={this.handleDropdownChange}>
                    <option> CHOOSE AN ITEM </option>
                    {this.props.itemList.map(item => {
                        return <option value={item.name} id={item.id}> {item.name} </option>
                    })}
                </select>
            </div>

        );
    }
}

export default DropDown;
