import React from 'react'
import './aboutUsSection.css'

const AboutUsSection = () => {
  return (
    <div className='aboutSection_mainContainer'>
      
       <div className="heroSection_mainContainer">
        <div className="text_container">
          <h1 className="lato-bold">
            Empower Your Future in Tech: Welcome to the IEEE Computer Society
            Student Branch University of Jaffna!
          </h1>
        </div>
      </div>

      <div className='aboutSection_textContainer'>
          <h3 className='aboutUs_text1'>Empowering Future Leaders in Computer Science and Engineering</h3>

          <p className='aboutUs_text2'><span>The IEEE Computer Society Student Branch at the University of Jaffna 
            is committed to nurturing the next generation of computer science and 
            engineering professionals. Through a series of educational workshops, 
            technical seminars, and collaborative projects, the branch provides 
            students with the tools and resources they need to excel in their careers. 
            By fostering a community of innovation and continuous learning, the student 
            branch aims to drive technological advancements and professional growth, 
            preparing students to become leaders in the ever-evolving field of computing.
          </span></p>
       

      </div>

      <div className='visionMission_mainContainer'>

        <div className='vision_mainContainer'>
          <div className='vision_container'>
            <h1>VISION</h1>
          </div>
        </div>

        <div className='mission_mainContainer'>
          <div className='mission_container'>
          <h1>MISSION</h1>
          </div>
        </div>

      </div> 

      
        <div className='paragraph-01_mainContainer'>
        <div className='paragraph-01'>
          <p>Join the dynamic IEEE Computer Society Student Branch at University of Jaffna.</p>
          <p>Sowcase innovation, enhance tech skills, and build your professional network.</p>
          <p>Be part of Sri Lanka’s leading tech community - your gateway to future success in the digital world.</p>
        </div>
        </div>
        
      

      <div className='reasonWhy_mainContainer'>
        <h1>Why Become a Member</h1>
        <div className='arrowsWithButton_container'>

          <div className='arrows_container'>

          <div class="arrow-right">
            <div className='image1'></div>
            <h3>
            Gain hands-on experience with the latest technologies through workshops and projects.
            </h3>
          </div>

          <div class="arrow-right">
          <div className='image2'></div>
            <h3>Connect with industry professionals and like-minded peers.</h3>
          </div>

          <div class="arrow-right">
          <div className='image3'></div>
            <h3>Develop leadership and teamwork skills by participating in branch activities and events.</h3>
          </div>

          <div class="arrow-right">
          <div className='image4'></div>
            <h3>Be a part of a worldwide network of IEEE members and professionals.</h3>
          </div>


          </div>

        </div>
        

      </div>

        {/* <h1 className='about'>
        about
        </h1> */}

      
    </div>
  )
}

export default AboutUsSection
