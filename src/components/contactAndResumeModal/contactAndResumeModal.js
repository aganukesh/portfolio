import React, { Component } from 'react';
import './contactAndResumeModal.scss';

class ContactAndResumeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: props.tab,
            isPdf: true
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tab !== this.props.tab) {
            this.setTab(this.props.tab);
        }
    }

    closeDialog() {
        this.props.close();
    }

    setTab(tabId) {
        this.setState({
            tab: tabId
        });
    }

    setDownloadType(isPdf) {
        this.setState({
            isPdf: isPdf
        });
    }

    copyToClipboard(val) {
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute("id", "dummy_id");
        document.getElementById("dummy_id").value = val;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    downloadResumeAsPdf() {
        if (this.state.isPdf) window.open('http://nagavigneshkumar.in/NagaVigneshKumar_Resume.pdf');
        else window.open('http://nagavigneshkumar.in/NagaVigneshKumar_Resume.DOCX');
    }

    copyDownloadLink() {
        if (this.state.isPdf) this.copyToClipboard('http://nagavigneshkumar.in/NagaVigneshKumar_Resume.pdf');
        else this.copyToClipboard('http://nagavigneshkumar.in/NagaVigneshKumar_Resume.DOCX');
    }

    render() {
        return (
            <div className="contact-resume">
                <div className="cr-tabs">
                    <div className={this.state.tab === 1 ? 'crt-active' : ''} onClick={() => this.setTab(1)}>
                        <i className="material-icons">mail_outline</i>
                    </div>
                    <div className={this.state.tab === 2 ? 'crt-active' : ''} onClick={() => this.setTab(2)}>
                        <i className="material-icons">phone</i>
                    </div>
                    <div className={this.state.tab === 3 ? 'crt-active' : ''} onClick={() => this.setTab(3)}>
                        <i className="material-icons">cloud_download</i>
                    </div>
                </div>
                <div className="cr-content">
                    <div className={this.state.tab === 1 ? 'crc-active' : ''}>
                        <div className="cr-header">Contact via E-Mail</div>
                        <div className="cr-body">
                            <span>Looking forward to see what you have for me !!</span>
                            <div className="copy-box">
                                <span>aganukesh@gmail.com</span>
                                <span className="crc-copy-icon">
                                    <i className="material-icons" title="Copy to clipboard" onClick={() => this.copyToClipboard('aganukesh@gmail.com')}>file_copy</i>
                                </span>
                            </div>
                            <div>You can expect my reply within 24 hours of time.</div>

                            <div className="something-more">
                                <div>If you are wondering what is aganukesh, its just a word derived by jumbling some letters in my name.</div>
                                <div>
                                    <div className="part-1">
                                        <div>agan</div>
                                        <div>
                                            <span className="highlight backward">naga</span>
                                        </div>
                                    </div>
                                    <div className="splitter">/</div>
                                    <div className="part-2">
                                        <div>uk</div>
                                        <div>
                                            <span className="highlight backward">ku</span>mar
                                        </div>
                                    </div>
                                    <div className="splitter">/</div>
                                    <div className="part-3">
                                        <div>esh</div>
                                        <div>
                                            vign<span className="highlight forward">esh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.tab === 2 ? 'crc-active' : ''}>
                        <div className="cr-header">Contact via Mobile</div>
                        <div className="cr-body">
                            <span>Yay! Really excited to talk to you !!</span>
                            <div className="copy-box">
                                <span>(India)+91 978 939 7280</span>
                                <span className="crc-copy-icon">
                                    <i className="material-icons" title="Copy to clipboard" onClick={() => this.copyToClipboard('+919789397280')}>file_copy</i>
                                </span>
                            </div>
                            <div>I can pick up calls from 8:00 AM IST to 9:00 PM IST. And normally, I never ignore calls even from unknown numbers, so please try dialing-in.</div>
                        </div>
                    </div>
                    <div className={this.state.tab === 3 ? 'crc-active' : ''}>
                        <div className="cr-header">Download Resume</div>
                        <div className="cr-body">
                            <span>A crisp compilation of who I'am & what I'am.</span>
                            <div className="download-box">
                                <span className="title">Download As</span>
                                <span className={this.state.isPdf ? 'checkbox active': 'checkbox'} onClick={() => this.setDownloadType(true)}>PDF</span>
                                <span className={this.state.isPdf ? 'checkbox': 'checkbox active'} onClick={() => this.setDownloadType(false)}>MS-DOCX</span>
                            </div>
                            <button className="crc-btn btn primary" onClick={() => this.downloadResumeAsPdf()}>Download {this.state.isPdf ? 'PDF' : 'MS-DOCX'}</button>
                            <span className="crc-copy-link" onClick={() => this.copyDownloadLink()}>Copy the download link</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ContactAndResumeModal;