import React, { Component } from 'react';
import './technicalSkills.scss';
import ChatBox from './chatBox/chatBox';
import Sidebar from './sidebar/sidebar';


class TechnicalSkills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSubjectId: 1
        };
    }

    setSubjectId(id) {
        this.setState({
            activeSubjectId: id
        });
    }

    render() {
        return (
            <div className={`tech-skills ${this.props.pageId === 3 ? 'active' : ''}`}>
                <Sidebar subjId={this.state.activeSubjectId} setSubjectId={(id) => this.setSubjectId(id)}/>
                <ChatBox subjId={this.state.activeSubjectId} showContact={(id) => this.props.showContact(id)}/>
            </div>
        );
    }

}

export default TechnicalSkills;