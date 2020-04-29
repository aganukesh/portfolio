import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readyToShow: false,
            showPopup: false,
            showFloatingMenu: false
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.pageId !== this.props.pageId) {
            this.setState({ readyToShow: true });
        }
    }

    toggleFloatingMenu() {
        this.setState({ showFloatingMenu: !this.state.showFloatingMenu });
    }

    render() {
        return (
            <div className={`header-nav ${this.state.readyToShow ? "active" : ""}`}>
                <div className={`hn-tab ${this.props.pageId === 1 ? "active" : ""}`} onClick={() => this.props.jumpToPage(1)}>Home</div>
                <div className={`hn-tab ${this.props.pageId === 2 ? "active" : ""}`} onClick={() => this.props.jumpToPage(2)}>About Me</div>
                <div className={`hn-tab ${this.props.pageId === 3 ? "active" : ""}`} onClick={() => this.props.jumpToPage(3)}>Tech Skills</div>
                {/* <div className={`hn-tab ${this.props.pageId === 4 ? "active" : ""}`} onClick={() => this.props.jumpToPage(4)}>Credits</div> */}
                <div className="hn-tab" onClick={() => this.props.showContact()}>Contact</div>

                <div className={`floating-menu${this.state.showFloatingMenu ? " active": ''}`} onClick={() => this.toggleFloatingMenu()}>
                    <i className="material-icons">menu</i>

                    <div className="fm-tabs-list">
                        <div className={`fm-tab ${this.props.pageId === 1 ? "active" : ""}`} onClick={() => this.props.jumpToPage(1)}>Home</div>
                        <div className={`fm-tab ${this.props.pageId === 2 ? "active" : ""}`} onClick={() => this.props.jumpToPage(2)}>About Me</div>
                        <div className={`fm-tab ${this.props.pageId === 3 ? "active" : ""}`} onClick={() => this.props.jumpToPage(3)}>Tech Skills</div>
                        <div className="fm-tab" onClick={() => this.props.showContact()}>Contact</div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;