import React, { Component } from 'react';
import './chatBox.scss';
import pic from '../../../assets/images/pic.png';
import CustomScroll from 'react-custom-scroll';
import SubjectsData from '../../../services/subjectsData';

class ChatBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showResumePopup: false,
            subject: SubjectsData[this.props.subjId - 1]
        };
        this.tabId = 1;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.subjId !== this.props.subjId) {
            this.setState({
                subject: SubjectsData[this.props.subjId - 1] || { messages: [] }
            });
        }
    }

    showPopup(tabId) {
        this.setState({
            showPopup: true
        });
        if (tabId) { this.tabId = tabId; }
    }

    closePopup() {
        this.setState({
            showPopup: false
        });
    }

    addMessage(msg) {
        SubjectsData[this.props.subjId - 1].messages.push(msg);
        this.setState({
            subject: SubjectsData[this.props.subjId - 1]
        });
    }

    answerExperience() {
        SubjectsData[this.props.subjId - 1].isExperienceAnswered = true;
        this.addMessage({
            type: 2,
            msg: <div>Experience ?</div>
        });
        this.scrollToBottom();
        setTimeout(() => {
            this.addMessage({
                type: 1,
                msg: SubjectsData[this.props.subjId - 1].answerToExperience
            });
            this.scrollToBottom();
        }, 1000);
    }

    answerAchievement() {
        SubjectsData[this.props.subjId - 1].isAchievementAnswered = true;
        this.addMessage({
            type: 2,
            msg: <div>Remarkable Achievement ?</div>
        });
        this.scrollToBottom();
        setTimeout(() => {
            this.addMessage({
                type: 1,
                msg: SubjectsData[this.props.subjId - 1].answerToAchievement
            });
            this.scrollToBottom();
        }, 1000);
    }

    answerWhy() {
        SubjectsData[this.props.subjId - 1].isWhyAnswered = true;
        this.addMessage({
            type: 2,
            msg: <div>Why {this.state.subject.title} ?</div>
        });
        this.scrollToBottom();
        setTimeout(() => {
            this.addMessage({
                type: 1,
                msg: SubjectsData[this.props.subjId - 1].answerToWhy
            });
            this.scrollToBottom();
        }, 1000);
    }

    answerAll() {
        const recheck = () => {
            setTimeout(() => {
                this.answerAll();
            }, 2000);
        }

        if (!this.state.subject.isExperienceAnswered) {
            this.answerExperience(); 
            recheck();
        } else if (!this.state.subject.isAchievementAnswered) {
            this.answerAchievement(); 
            recheck();
        } else if (!this.state.subject.isWhyAnswered) {
            this.answerWhy(); 
            recheck();
        }
        
    }

    checkIfAnswerAllIsValid(subj) {
        let totalUnanswered = 0;
        if (!subj.isExperienceAnswered) totalUnanswered++;
        if (!subj.isAchievementAnswered) totalUnanswered++;
        if (!subj.isWhyAnswered) totalUnanswered++;
        
        if (totalUnanswered > 1) return true;
        else return false;
    }

    scrollToBottom() {
        const scrollableEle = document.querySelector('.chat-box .rcs-inner-container');
        scrollableEle.scrollTop = scrollableEle.scrollHeight;
    }

    render() {
        return (
            <div className="chat-box">
                <header className="cb-header">
                    <div className="my-face" title="Away | Only Mails & Calls">
                        <img src={pic} alt="Naga Vignesh Kumar" />
                    </div>

                    <span className="status material-icons" title="Away | Only Mails & Calls">remove</span>

                    <div className="cb-details">
                        <div>
                            <span className="cbd-name">Naga Vignesh Kumar T</span>
                        </div>
                        <div>
                            <span className="cbd-about-me">Senior Software Engineer | Exp: 5 Years 10 Months</span>
                            {/* <span className="cbd-job-status">Freelancer</span> */}
                        </div>
                    </div>
                    <div className="cb-actions">
                        <i className="material-icons" title="Mail Id" onClick={() => this.props.showContact(1)}>mail_outline</i>
                        <i className="material-icons" title="Mobile Number" onClick={() => this.props.showContact(2)}>phone</i>
                        <i className="material-icons download" title="Download latest Resume" onClick={() => this.props.showContact(3)}>cloud_download</i>
                    </div>
                </header>

                <div className="cb-messager">
                    <CustomScroll heightRelativeToParent="100%" keepAtBottom={true}>
                        <div style={{maxHeight: '100%'}}>
                            {this.state.subject.messages.map((msg, index) => {
                                return <div className={`chat-msg${msg.type === 1 ? ' left' : ' right'}`} key={'msg_' + index}>
                                    <div className="person-img left">
                                        <div className="pi-face" title="Away | Only Mails & Calls">
                                            <img src={pic} alt="Naga Vignesh Kumar" />
                                        </div>

                                        <span className="pi-status material-icons" title="Away | Only Mails & Calls">remove</span>
                                    </div>

                                    <div className="person-img right">
                                        <div className="pi-face" title="Online">
                                            <i className="pi-user-icon material-icons">perm_identity</i>
                                        </div>

                                        <span className="pi-status material-icons" title="Online">done</span>
                                    </div>

                                    <span>{msg.msg}</span>
                                </div>
                            })}

                            <div className="added-questions">
                                <div className={`hint${!this.state.subject.isExperienceAnswered || !this.state.subject.isAchievementAnswered || !this.state.subject.isWhyAnswered ? '' : ' hidden'}`}>I can answer to the below question(s) now</div>
                                <button onClick={() => this.answerExperience()} className={this.state.subject.isExperienceAnswered ? 'hidden' : ''}>Experience ?</button>
                                <button onClick={() => this.answerAchievement()} className={this.state.subject.isAchievementAnswered ? 'hidden' : ''}>Remarkable Achievement ?</button>
                                <button onClick={() => this.answerWhy()} className={this.state.subject.isWhyAnswered ? 'hidden' : ''}>Why {this.state.subject.title} ?</button>
                                <button onClick={() => this.answerAll()} className={this.checkIfAnswerAllIsValid(this.state.subject) ? '' : 'hidden'}>Answer All</button>
                                <div className="contact-hint">
                                    <span>Should you have any other question?</span>
                                    <span className="underlined" onClick={() => this.props.showContact(1)}>Let's Connect</span>
                                </div>
                            </div>
                        </div>
                    </CustomScroll>
                </div>
            </div>
        );
    }
}

export default ChatBox;
