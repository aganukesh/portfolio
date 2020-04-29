import React, { Component } from 'react';
import './getStarted.scss';
import NagaVignesh from '../../assets/images/NagaVignesh.jpg';
import CustomScroll from 'react-custom-scroll';

class GetStarted extends Component {

    render() {
        return (
            <div className={`get-started ${this.props.pageId === 1 ? 'active page1' : this.props.pageId === 2 ? 'active page2' : ''}`}>
                <img src={NagaVignesh} alt="Naga Vignesh" className="gs-my-img" />

                <div className="intro-text">
                    <CustomScroll heightRelativeToParent="100%">
                        <div className="tag-1">Wonders don't happen in a click. It evolves, when great minds meet and work together</div>
                        <div className="divider-1"></div>
                        <div className="tag-2">If you have something in your mind and if it is related to web platform, let's find out</div>
                        <div className="tag-3">if I'm the other great mind that you should meet.</div>
                        <div className="divider-2"></div>
                        <div className="tag-4">Hi, this is <span className="gs-highlight">Naga</span></div>
                        <button className="btn-outlined lg get-started-btn" onClick={() => this.props.jumpToPage(2)}>Let's Get Started</button>
                    </CustomScroll>
                </div>

                <div className="about-me">
                    <CustomScroll heightRelativeToParent="100%">
                        <div className="am-title">Five things you should know about me,</div>
                        <ul>
                            <li>Naga Vignesh Kumar T - is my lengthy/full name.</li>
                            <li>Born/Brought-Up/Residing at Tamil Nadu, India for almost 30 years now.</li>
                            <li>Having graduated Electronics & Communication Engineering, Software Development has been my only profession.</li>
                            <li>In particular, I specialize in web application development, so JavaScript, HTML, CSS, Angular, React, NodeJS, Adobe tools like XD, Photoshop and few others are my weapons.</li>
                            <li>While these are just tools, my real talents are deep understanding of problems, creativity, quick learning, adaptability, dedication, outspoken and love towards work.</li>
                        </ul>

                        <div className="am-additional-notes">
                            I strongly believe that the chances you get and the challenges you face make you what you are. And those never come by itself, we have to earn it by being unique, hard-working and motivated.
                        </div>

                        <div className="am-next-page">
                            <span>It's time to dig deeper on my </span>
                            <button className="btn-outlined lg" onClick={() => this.props.jumpToPage(3)}>Technical Skills</button>
                        </div>
                    </CustomScroll>
                </div>
            </div>
        );
    }
}

export default GetStarted;
