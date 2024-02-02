import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import {BsInfoCircleFill} from "react-icons/bs";
import './styles.scss';
import {Animate} from 'react-simple-animate'
import {FaDev , FaDatabase, FaReact} from 'react-icons/fa'
import {DiAndroid} from 'react-icons/di';

const personalDetails =[
    {
        label: "Name:",
        value: "Yukta Sukheja",
    },
    {
        label:"Age:",
        value:"21",
    },
    {
        label:"Address:",
        value:"6-H-6,V.I,P. COLONY,UDAIPUR(RAJ.)"
    },

{
    label:"Email:",
    value:"yuktasukheja@gmail.com"
},

{
    label:"Contact No.:",
    value:"9351434392"
},

];

const jobSummary = "Results-oriented and motivated B.Tech student majoring in Electronics and Communication Engineering (ECE), eager to leverage technical skills and academic foundation to transition into a dynamic role as a software developer.Passionate about web development and currently learning React while proficient in HTML and CSS. Eager to apply my skills to create interactive and user-friendly web applications. Possesses a solid foundation in front-end development with a keen eye for design and attention to detail. Excited about the prospect of combining creativity and technical expertise to build engaging user interfaces. Open to collaborative projects and ready to contribute innovative solutions in the dynamic world of web development.";


 const About=()=>{
 return(
<section id="about" className="about">
    <PageHeaderContent 
    headerText="About Me"
    icon = {<BsInfoCircleFill size={40}/>}
    />
    <div className="about_content">
        <div className="about_content_personalWrapper">
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
            transform:'translateX(-900px)'
        }}
        end={{
            transform:'translatex(0px)'

        }}>
        <h3>Front End Developer</h3>
        <p>{jobSummary}</p>
        </Animate>
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
            transform:'translateX(500px)'
        }}
        end={{
            transform:'translatex(0px)'

        }}>

        <h3 className="personalInformationHeaderText">Personal Information</h3>
        <ul>
            {
                personalDetails.map((item,i)=>(
                    <li key={i}>
                        <span className="title">{item.label}</span>
                        <span className="value">{item.value}</span>
                    </li>
                )
                )
            }
        </ul>
        </Animate>
        </div>
        <div className="about_content_servicesWrapper">
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
            transform:'translateX(600px)'
        }}
        end={{
            transform:'translatex(0px)'

        }}>
            <div className="about_content_servicesWrapper_innerContent">
            <div>
                <FaDev size={60} color="var(--pink-theme-main-color)"/>
            </div>
            <div>
                <DiAndroid size={60} color="var(--pink-theme-main-color)"/>
            </div>
            <div>
                <FaDatabase size={60} color="var(--pink-theme-main-color)" />
            </div>
            <div> 
                <FaReact size={60} color="var(--pink-theme-main-color)" />
            </div>
            </div>
            </Animate>
        </div>
    
    </div>
</section>
 );

 };

 
 export default About;
