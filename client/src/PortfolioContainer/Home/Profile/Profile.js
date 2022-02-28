import React from 'react';
import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile-container'>
           <div className='profile-parent'>
               <div className='profile-details'>
                   <div className='colz'>
                   <a href="https://github.com/yashikabhardwaj">
                       <i className="fa fa-github-square" />
                   </a>
                   <div/>
                  </div>
                  <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Yashika Bhardwaj</span>
            </span>
          </div>
          <div className='profile-details-role'>
              <span className='primary-text'>
                  {" "}
                  <h1>
                      {""}
                      <Typical
                      loop={Infinity}
                      steps={[
                        " Web Developer 💻",
                        1000,
                        "React/React Native 🌐",
                        1000,
                        "UI & UX Designer 📱",
                        1000,
                        "Graphic Designer 😎",
                        1000,
                      ]}
                      />

                  </h1>
                  <span className='profile-role-tagline'>
                  Knack of building applications with front and back end operations.
                  </span>
              </span>
          </div>
          <div className='profile-options'>
              <button className='btn primary-btn'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                  {""}
                  Hire Me{""}
              </button>
              <a href='yashikaresume.pdf.pdf' download='Bhardwaj yashikaresume.pdf.pdf'>
              <button className="btn highlighted-btn">Get Resume</button>
              </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
export default Profile;


            
           
