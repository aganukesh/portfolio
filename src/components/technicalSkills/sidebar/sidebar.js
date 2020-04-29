import React, { Component } from 'react';
import './sidebar.scss';
import SubjectsData from '../../../services/subjectsData';
import CustomScroll from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css'; // include styles

let isAllShowing = true;
// let reactState;

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectsData: SubjectsData,
            isSidebarOpened: true
        };
    }
    tabSelected = (tabId, ev) => {
        const allTabs = document.querySelectorAll('.sidebar .sbh-option');
        if (tabId === 1) {
            allTabs[0].classList.add('selected');
            allTabs[1].classList.remove('selected');
            isAllShowing = true;
        } else {
            allTabs[1].classList.add('selected');
            allTabs[0].classList.remove('selected');
            isAllShowing = false;
        }
        this.setState({
            subjectsData: SubjectsData.filter(subj => isAllShowing ? true : subj.isOfficial)
        });
    }

    subjectSelected(subjId) {
        this.toggleSidebarView();
        this.props.setSubjectId(subjId);
    }

    toggleSidebarView() {
        this.setState({ isSidebarOpened: !this.state.isSidebarOpened });
    }

    render() {
        return (
            <div className={`sidebar${this.state.isSidebarOpened ? ' opened' : ''}`}>
                <header className="sb-header">
                    <span className="sbh-title">Subjects</span>
                    <div className="sbh-tabs">
                        <span className="sbh-option selected" onClick={(ev) => this.tabSelected(1, ev)}>All</span>
                        <span className="sbh-option" onClick={(ev) => this.tabSelected(2, ev)}>Official</span>
                    </div>
                </header>
                <div className="sb-content">
                    <div className="sbc-filter">
                        <span>
                            <i className="material-icons">keyboard_arrow_down</i>
                        Recent
                    </span>
                    </div>
                    <div className="sbc-subjects-box">
                        <CustomScroll heightRelativeToParent="100%">
                            {this.state.subjectsData.map(subj => {
                                return <div className={`subject ${this.props.subjId === subj.id ? 'active' : ''}`} key={'subj_' + subj.id} onClick={() => this.subjectSelected(subj.id)}>
                                    <img src={subj.logo} alt={subj.title} />
                                    <div className="sbcs-details">
                                        <span className="sbcs-title">{subj.title}</span>
                                        <span className="sbcs-hint">{subj.hint}</span>
                                    </div>
                                </div>
                            })}
                        </CustomScroll>
                    </div>
                </div>

                <div className="sb-minimal-toggler" onClick={() => this.toggleSidebarView()}>
                    <div className="sbmt-btn">
                        <i className="material-icons">last_page</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
