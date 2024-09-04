import React from 'react';
import "../Styles/about.css";
import myphoto from "../Images/myphoto.jpg"



const About = ({ref,func}) => {



    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/1iBd59KeSP91bGVnzJS5pN3sWmijEECA_/view?usp=sharing");
        const link = document.createElement('a');
        link.href = Sanju_kumari_Resume;
        link.setAttribute('download', 'Sanju_kumari_Resume.pdf');
        link.setAttribute('id', 'resume-link-2');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <div className='about section' id='about' ref={ref} onScroll={func}>

            <h1 className='about-me'>About <span style={{ color: "#0e4166" }}>Me</span></h1>

            <div className='image-des'>
                <div>
                <img className='home-img' src={myphoto} alt="myimage" />
                </div>
                <div >
                    <p id="user-detail-intro">Passionate and Results-Driven Web Developer with over 1000+ hours of hands-on coding experience and a robust foundation in data structures and algorithms (100+ hours). Adept at both front-end and back-end development, with expertise in ReactJS, Node.js, JavaScript, ExpressJS, and MongoDB. Demonstrated proficiency in building dynamic web applications, including feature-rich clones of popular websites. Excel in collaborative environments, consistently delivering high-quality solutions on time. A highly motivated problem solver with a disciplined approach to tackling complex challenges and a commitment to continuous learning and improvement</p>
                    <div className="resume-button" id="resume-button-2">
                    <button className="download-button" onClick={handleDownload}>
                        <div className="docs"><svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Resume</div>
                        <div className="download">
                            {/* <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg> */}
                        </div>
                    </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;