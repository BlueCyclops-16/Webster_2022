import React from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({ profile : {
    headquarters,
    social,
    // user: {companyname}
}
}) => {
    return (
        <div class="profile-top bg-primary p-2">

          {/* <h1 class="large">{companyname}</h1> */}
          <p>{headquarters && <span>{headquarters}</span>}</p> 
          <div class="icons my-1">
            {
                social && social.twitter && (
                    <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter fa-2x"></i>
                     </a>
                )
            }
            {
                social && social.facebook && (
                    <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-facebook fa-2x"></i>
                    </a>
                )
            }

            {
                social && social.linkedin && (
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                )
            }
            {
                social && social.youtube && (
                    <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-youtube fa-2x"></i>
                    </a>
                )
            }
            {
                social && social.instagram && (
                    <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram fa-2x"></i>
                    </a>
                )
            }
            </div>
        </div>
    );
};


ProfileTop.propTypes ={
 profile: PropTypes.object.isRequired
}

export default ProfileTop