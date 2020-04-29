import React from 'react';
import android from '../assets/images/android.png';
import angular from '../assets/images/angular.png';
import css from '../assets/images/css.png';
import html from '../assets/images/html.jpg';
import java from '../assets/images/java.jpg';
import javascript from '../assets/images/javascript.png';
import ml from '../assets/images/ml.png';
import nodejs from '../assets/images/nodejs.png';
import python from '../assets/images/python.png';
import reactjs from '../assets/images/reactjs.png';

const SubjectsData = [
    {
        id: 1, title: 'JavaScript', logo: javascript, isOfficial: true, hint: 'Strong | 5+ Years | Upto ES6',
        isExperienceAnswered: false,
        isAchievementAnswered: false,
        isWhyAnswered: false,
        answerToExperience: <div>
            <div>Since June 2014, the beginning of my career, JavaScript is the main language that has been helping me survive.</div>
            <div>Officially, I have almost developed 9 applications single handedly with all front-end logics written in JavaScript.</div>
            <div>And Personally, I have developed 3 applications out of my self interest.</div>
            <div>Later, this exposure helped me a lot when I started writing backend codes on NodeJS.</div>
        </div>,
        answerToAchievement: <ul>
            <li>Smart Workbook - A UI Grid library built from scratch to handle multiple data sets(worksheet) grouped as a workbook. Along with formulas/macros execution, lazy loading, cell merging capability, validations and custom styles/template management.</li>
            <li>Custom Scroller - A UI libary that removes the default browser scroller and replaces with a unique customizable scroller that is compatible with almost all browsers including IE10.</li>
        </ul>,
        answerToWhy: <ul>
            <li>JavaScript is inevitable for a browser to load a web application.</li>
            <li>Developer friendly, which is also seen as a curse of the language.</li>
            <li>Starting from ES5, the language has taken deep curves in terms of performance, features and stability.</li>
            <li>For a beginner, it is real easy to start with, than any other language.</li>
            <li>The only language, that allows to develop a complete web application (Frontend and Backend).</li>
        </ul>,
        messages: [{
            type: 1, // 1 is for myself as message sender and 2 is for the user as sender
            msg: <div>
                <img src={javascript} alt="JavaScript Logo" className="chat-subj-logo" />
                <div className="stars"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_border</i><span>Strong Knowledge</span></div>
                <div className="details">JavaScript - Language I Love the most - 6 Years of Exposure - Experienced in handling various levels of projects/tasks - Capable of writing high quality/performance codes.</div>
                {/* <div className="details">My most favorite, Worked on various levels of official & personal projects/tasks across different domains. Can do some serious magics with this language.</div> */}
            </div>
        }]
    },
    {
        id: 2, title: 'Angular', logo: angular, isOfficial: true, hint: 'Strong | 5+ Years | AngularJS to Angular 9',
        isExperienceAnswered: false,
        isAchievementAnswered: false,
        isWhyAnswered: false,
        answerToExperience: <div>
            <div>Since June 2014, the beginning of my career, JavaScript is the main language that has been helping me survive.</div>
            <div>Officially, I have almost developed 9 applications single handedly with all front-end logics written in JavaScript.</div>
            <div>And Personally, I have developed 3 applications out of my self interest.</div>
            <div>Later, this exposure helped me a lot when I started writing backend codes on NodeJS.</div>
        </div>,
        answerToAchievement: <ul>
            <li>Smart Workbook - A UI Grid library build from scratch to handle multiple data sets(worksheet) grouped as a workbook. Along with formulas/macros execution, lazy loading, cell merging capability, validations and custom styles/template management.</li>
            <li>Custom Scroller - A UI libary that removes the default browser scroller and replaces with a unique customizable scroller that is compatible with almost all browsers including IE10.</li>
        </ul>,
        answerToWhy: <ul>
            <li>JavaScript is inevitable for a browser to load a web application.</li>
            <li>Developer friendly, which is also seen as a curse of the language.</li>
            <li>Starting from ES5, the language has taken deep curves in terms of performance, features and stability.</li>
            <li>For a beginner, it is real easy to start with, than any other language.</li>
            <li>The only language, that allows to develop a complete web application (Frontend and Backend).</li>
        </ul>,
        messages: [{
            type: 1, // 1 is for myself as message sender and 2 is for the user as sender
            msg: <div>
                <img src={angular} alt="Angular Logo" className="chat-subj-logo" />
                <div className="stars"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_border</i><span>Strong Knowledge</span></div>
                <div className="details">Angular - the Frontend Framework I prefer - 6 Years of Exposure - Experienced in handling various levels of projects/tasks - Fluent in all versions(1 to 9) including AngularJS.</div>
            </div>
        }]
    },
    {
        id: 3, title: 'ReactJS', logo: reactjs, isOfficial: false, hint: 'Good | < 1 Year | This site was built using ReactJS',
        isExperienceAnswered: false,
        isAchievementAnswered: false,
        isWhyAnswered: false,
        answerToExperience: <div>
                <div>Since June 2014, the beginning of my career, JavaScript is the main language that has been helping me survive.</div>
                <div>Officially, I have almost developed 9 applications single handedly with all front-end logics written in JavaScript.</div>
                <div>And Personally, I have developed 3 applications out of my self interest.</div>
                <div>Later, this exposure helped me a lot when I started writing backend codes on NodeJS.</div>
            </div>,
        answerToAchievement: <ul>
                <li>Smart Workbook - A UI Grid library build from scratch to handle multiple data sets(worksheet) grouped as a workbook. Along with formulas/macros execution, lazy loading, cell merging capability, validations and custom styles/template management.</li>
                <li>Custom Scroller - A UI libary that removes the default browser scroller and replaces with a unique customizable scroller that is compatible with almost all browsers including IE10.</li>
            </ul>,
        answerToWhy: <ul>
                <li>JavaScript is inevitable for a browser to load a web application.</li>
                <li>Developer friendly, which is also seen as a curse of the language.</li>
                <li>Starting from ES5, the language has taken deep curves in terms of performance, features and stability.</li>
                <li>For a beginner, it is real easy to start with, than any other language.</li>
                <li>The only language, that allows to develop a complete web application (Frontend and Backend).</li>
            </ul>,
        messages: [{
            type: 1, // 1 is for myself as message sender and 2 is for the user as sender
            msg: <div>
                    <img src={reactjs} alt="ReactJS Logo" className="chat-subj-logo"/>
                    <div className="stars"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_border</i><i className="material-icons">star_border</i><span>Good Knowledge</span></div>
                    <div className="details">Worked on various levels of official & personal projects/tasks across domains. Can do some serious magics with this language.</div>
                </div>
      }]
    },
    {
        id: 4, title: 'HTML', logo: html, isOfficial: true, hint: 'Strong | 5+ Years | Upto HTML5',
        isExperienceAnswered: false,
        isAchievementAnswered: false,
        isWhyAnswered: false,
        answerToExperience: <div>
                <div>Since June 2014, the beginning of my career, JavaScript is the main language that has been helping me survive.</div>
                <div>Officially, I have almost developed 9 applications single handedly with all front-end logics written in JavaScript.</div>
                <div>And Personally, I have developed 3 applications out of my self interest.</div>
                <div>Later, this exposure helped me a lot when I started writing backend codes on NodeJS.</div>
            </div>,
        answerToAchievement: <ul>
                <li>Smart Workbook - A UI Grid library build from scratch to handle multiple data sets(worksheet) grouped as a workbook. Along with formulas/macros execution, lazy loading, cell merging capability, validations and custom styles/template management.</li>
                <li>Custom Scroller - A UI libary that removes the default browser scroller and replaces with a unique customizable scroller that is compatible with almost all browsers including IE10.</li>
            </ul>,
        answerToWhy: <ul>
                <li>JavaScript is inevitable for a browser to load a web application.</li>
                <li>Developer friendly, which is also seen as a curse of the language.</li>
                <li>Starting from ES5, the language has taken deep curves in terms of performance, features and stability.</li>
                <li>For a beginner, it is real easy to start with, than any other language.</li>
                <li>The only language, that allows to develop a complete web application (Frontend and Backend).</li>
            </ul>,
        messages: [{
            type: 1, // 1 is for myself as message sender and 2 is for the user as sender
            msg: <div>
                    <img src={html} alt="HTML Logo" className="chat-subj-logo"/>
                    <div className="stars"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_border</i><span>Strong Knowledge</span></div>
                    <div className="details">Worked on various levels of official & personal projects/tasks across domains. Can do some serious magics with this language.</div>
                </div>
      }]
    },
    {
        id: 5, title: 'CSS', logo: css, isOfficial: true, hint: 'Strong | 5+ Years | Upto CSS3',
        isExperienceAnswered: false,
        isAchievementAnswered: false,
        isWhyAnswered: false,
        answerToExperience: <div>
                <div>Since June 2014, the beginning of my career, JavaScript is the main language that has been helping me survive.</div>
                <div>Officially, I have almost developed 9 applications single handedly with all front-end logics written in JavaScript.</div>
                <div>And Personally, I have developed 3 applications out of my self interest.</div>
                <div>Later, this exposure helped me a lot when I started writing backend codes on NodeJS.</div>
            </div>,
        answerToAchievement: <ul>
                <li>Smart Workbook - A UI Grid library build from scratch to handle multiple data sets(worksheet) grouped as a workbook. Along with formulas/macros execution, lazy loading, cell merging capability, validations and custom styles/template management.</li>
                <li>Custom Scroller - A UI libary that removes the default browser scroller and replaces with a unique customizable scroller that is compatible with almost all browsers including IE10.</li>
            </ul>,
        answerToWhy: <ul>
                <li>JavaScript is inevitable for a browser to load a web application.</li>
                <li>Developer friendly, which is also seen as a curse of the language.</li>
                <li>Starting from ES5, the language has taken deep curves in terms of performance, features and stability.</li>
                <li>For a beginner, it is real easy to start with, than any other language.</li>
                <li>The only language, that allows to develop a complete web application (Frontend and Backend).</li>
            </ul>,
        messages: [{
            type: 1, // 1 is for myself as message sender and 2 is for the user as sender
            msg: <div>
                    <img src={css} alt="CSS Logo" className="chat-subj-logo"/>
                    <div className="stars"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_border</i><span>Strong Knowledge</span></div>
                    <div className="details">Worked on various levels of official & personal projects/tasks across domains. Can do some serious magics with this language.</div>
                </div>
      }]
    },
    {
        id: 6, title: 'Android', logo: android, isOfficial: false, hint: 'Good | 2+ Years | Currently developing',
        isExperienceAnswered: false,
        isAchievementAnswered: false,
        isWhyAnswered: false,
        answerToExperience: <div>
                <div>Since June 2014, the beginning of my career, JavaScript is the main language that has been helping me survive.</div>
                <div>Officially, I have almost developed 9 applications single handedly with all front-end logics written in JavaScript.</div>
                <div>And Personally, I have developed 3 applications out of my self interest.</div>
                <div>Later, this exposure helped me a lot when I started writing backend codes on NodeJS.</div>
            </div>,
        answerToAchievement: <ul>
                <li>Smart Workbook - A UI Grid library build from scratch to handle multiple data sets(worksheet) grouped as a workbook. Along with formulas/macros execution, lazy loading, cell merging capability, validations and custom styles/template management.</li>
                <li>Custom Scroller - A UI libary that removes the default browser scroller and replaces with a unique customizable scroller that is compatible with almost all browsers including IE10.</li>
            </ul>,
        answerToWhy: <ul>
                <li>JavaScript is inevitable for a browser to load a web application.</li>
                <li>Developer friendly, which is also seen as a curse of the language.</li>
                <li>Starting from ES5, the language has taken deep curves in terms of performance, features and stability.</li>
                <li>For a beginner, it is real easy to start with, than any other language.</li>
                <li>The only language, that allows to develop a complete web application (Frontend and Backend).</li>
            </ul>,
        messages: [{
            type: 1, // 1 is for myself as message sender and 2 is for the user as sender
            msg: <div>
                    <img src={android} alt="Android Logo" className="chat-subj-logo"/>
                    <div className="stars"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_border</i><i className="material-icons">star_border</i><span>Good Knowledge</span></div>
                    <div className="details">Worked on various levels of official & personal projects/tasks across domains. Can do some serious magics with this language.</div>
                </div>
      }]
    },
    {
        id: 7, title: 'NodeJS', logo: nodejs, isOfficial: true, hint: 'Good | 2 Years | Including Loopback Framework',
        isExperienceAnswered: false,
        isAchievementAnswered: false,
        isWhyAnswered: false,
        answerToExperience: <div>
                <div>Since June 2014, the beginning of my career, JavaScript is the main language that has been helping me survive.</div>
                <div>Officially, I have almost developed 9 applications single handedly with all front-end logics written in JavaScript.</div>
                <div>And Personally, I have developed 3 applications out of my self interest.</div>
                <div>Later, this exposure helped me a lot when I started writing backend codes on NodeJS.</div>
            </div>,
        answerToAchievement: <ul>
                <li>Smart Workbook - A UI Grid library build from scratch to handle multiple data sets(worksheet) grouped as a workbook. Along with formulas/macros execution, lazy loading, cell merging capability, validations and custom styles/template management.</li>
                <li>Custom Scroller - A UI libary that removes the default browser scroller and replaces with a unique customizable scroller that is compatible with almost all browsers including IE10.</li>
            </ul>,
        answerToWhy: <ul>
                <li>JavaScript is inevitable for a browser to load a web application.</li>
                <li>Developer friendly, which is also seen as a curse of the language.</li>
                <li>Starting from ES5, the language has taken deep curves in terms of performance, features and stability.</li>
                <li>For a beginner, it is real easy to start with, than any other language.</li>
                <li>The only language, that allows to develop a complete web application (Frontend and Backend).</li>
            </ul>,
        messages: [{
            type: 1, // 1 is for myself as message sender and 2 is for the user as sender
            msg: <div>
                    <img src={nodejs} alt="NodeJS Logo" className="chat-subj-logo"/>
                    <div className="stars"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_border</i><i className="material-icons">star_border</i><span>Good Knowledge</span></div>
                    <div className="details">Worked on various levels of official & personal projects/tasks across domains. Can do some serious magics with this language.</div>
                </div>
      }]
    },
    {
        id: 8, title: 'Machine Learning Concepts', logo: ml, isOfficial: false, hint: 'Conceptual Understanding | Currently Learning',
        isExperienceAnswered: false,
        isAchievementAnswered: false,
        isWhyAnswered: false,
        answerToExperience: <div>
                <div>Since June 2014, the beginning of my career, JavaScript is the main language that has been helping me survive.</div>
                <div>Officially, I have almost developed 9 applications single handedly with all front-end logics written in JavaScript.</div>
                <div>And Personally, I have developed 3 applications out of my self interest.</div>
                <div>Later, this exposure helped me a lot when I started writing backend codes on NodeJS.</div>
            </div>,
        answerToAchievement: <ul>
                <li>Smart Workbook - A UI Grid library build from scratch to handle multiple data sets(worksheet) grouped as a workbook. Along with formulas/macros execution, lazy loading, cell merging capability, validations and custom styles/template management.</li>
                <li>Custom Scroller - A UI libary that removes the default browser scroller and replaces with a unique customizable scroller that is compatible with almost all browsers including IE10.</li>
            </ul>,
        answerToWhy: <ul>
                <li>JavaScript is inevitable for a browser to load a web application.</li>
                <li>Developer friendly, which is also seen as a curse of the language.</li>
                <li>Starting from ES5, the language has taken deep curves in terms of performance, features and stability.</li>
                <li>For a beginner, it is real easy to start with, than any other language.</li>
                <li>The only language, that allows to develop a complete web application (Frontend and Backend).</li>
            </ul>,
        messages: [{
            type: 1, // 1 is for myself as message sender and 2 is for the user as sender
            msg: <div>
                    <img src={ml} alt="Machine Learning Logo" className="chat-subj-logo"/>
                    <div className="stars"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_border</i><i className="material-icons">star_border</i><i className="material-icons">star_border</i><span>Only Conceptual Understanding</span></div>
                    <div className="details">Worked on various levels of official & personal projects/tasks across domains. Can do some serious magics with this language.</div>
                </div>
      }]
    },
    {
        id: 9, title: 'Java', logo: java, isOfficial: false, hint: 'Good | < 1 Year | Ready to work',
        isExperienceAnswered: false,
        isAchievementAnswered: false,
        isWhyAnswered: false,
        answerToExperience: <div>
                <div>Since June 2014, the beginning of my career, JavaScript is the main language that has been helping me survive.</div>
                <div>Officially, I have almost developed 9 applications single handedly with all front-end logics written in JavaScript.</div>
                <div>And Personally, I have developed 3 applications out of my self interest.</div>
                <div>Later, this exposure helped me a lot when I started writing backend codes on NodeJS.</div>
            </div>,
        answerToAchievement: <ul>
                <li>Smart Workbook - A UI Grid library build from scratch to handle multiple data sets(worksheet) grouped as a workbook. Along with formulas/macros execution, lazy loading, cell merging capability, validations and custom styles/template management.</li>
                <li>Custom Scroller - A UI libary that removes the default browser scroller and replaces with a unique customizable scroller that is compatible with almost all browsers including IE10.</li>
            </ul>,
        answerToWhy: <ul>
                <li>JavaScript is inevitable for a browser to load a web application.</li>
                <li>Developer friendly, which is also seen as a curse of the language.</li>
                <li>Starting from ES5, the language has taken deep curves in terms of performance, features and stability.</li>
                <li>For a beginner, it is real easy to start with, than any other language.</li>
                <li>The only language, that allows to develop a complete web application (Frontend and Backend).</li>
            </ul>,
        messages: [{
            type: 1, // 1 is for myself as message sender and 2 is for the user as sender
            msg: <div>
                    <img src={java} alt="Java Logo" className="chat-subj-logo"/>
                    <div className="stars"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_border</i><i className="material-icons">star_border</i><span>Good Knowledge</span></div>
                    <div className="details">Worked on various levels of official & personal projects/tasks across domains. Can do some serious magics with this language.</div>
                </div>
      }]
    },
    {
        id: 10, title: 'Python', logo: python, isOfficial: false, hint: 'Good | < 1 Year | Ready to work',
        isExperienceAnswered: false,
        isAchievementAnswered: false,
        isWhyAnswered: false,
        answerToExperience: <div>
                <div>Since June 2014, the beginning of my career, JavaScript is the main language that has been helping me survive.</div>
                <div>Officially, I have almost developed 9 applications single handedly with all front-end logics written in JavaScript.</div>
                <div>And Personally, I have developed 3 applications out of my self interest.</div>
                <div>Later, this exposure helped me a lot when I started writing backend codes on NodeJS.</div>
            </div>,
        answerToAchievement: <ul>
                <li>Smart Workbook - A UI Grid library build from scratch to handle multiple data sets(worksheet) grouped as a workbook. Along with formulas/macros execution, lazy loading, cell merging capability, validations and custom styles/template management.</li>
                <li>Custom Scroller - A UI libary that removes the default browser scroller and replaces with a unique customizable scroller that is compatible with almost all browsers including IE10.</li>
            </ul>,
        answerToWhy: <ul>
                <li>JavaScript is inevitable for a browser to load a web application.</li>
                <li>Developer friendly, which is also seen as a curse of the language.</li>
                <li>Starting from ES5, the language has taken deep curves in terms of performance, features and stability.</li>
                <li>For a beginner, it is real easy to start with, than any other language.</li>
                <li>The only language, that allows to develop a complete web application (Frontend and Backend).</li>
            </ul>,
        messages: [{
            type: 1, // 1 is for myself as message sender and 2 is for the user as sender
            msg: <div>
                    <img src={python} alt="Python Logo" className="chat-subj-logo"/>
                    <div className="stars"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_border</i><i className="material-icons">star_border</i><span>Good Knowledge</span></div>
                    <div className="details">A language that I learnt out of my self interest.</div>
                </div>
      }]
    },
];

export default SubjectsData;

// export const QuestionsList = [
//     'Experience?',
//     'Remarkable achievement?',
//     `Why ${this.state.subject.title}?`,
//     'Answer All'
// ];