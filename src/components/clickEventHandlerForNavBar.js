import React, { Component } from 'react';

export default class ClickSideNavBar extends Component {
    constructor(props) {
        super(props);
        
        this.dropDownRef = React.createRef();
        this.handleDropDown = this.handleDropDown.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleDropDown)
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleDropDown)
    }
    handleDropDown(event) {
        const { onClick, id, responsiveElement } = this.props;
        if(this.dropDownRef && this.dropDownRef.current.contains(event.target)) {
            return; 
        }
        onClick(id, responsiveElement)
    }
    render() {
        return (
            <div className={this.props.className} ref={this.dropDownRef}>
                {this.props.children}
            </div>
        )
    } 
}