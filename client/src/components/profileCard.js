import React, { Fragment, Component } from 'react';
import '../pages/Profile/Profile.css';
import createAvatarComponent from 'react-avatar/es/avatar';
import GithubSource from 'react-avatar/es/sources/Github';

const Avatar = createAvatarComponent({
    sources: [ GithubSource ]
});

class ProfileCard extends Component {
    render() {
        console.log(this.props.user);
        
        return(
            <div className="profile-grid" className="row">
                <div className="col-6 demo-grid-2">
                    <div className="profile-card">
                        <div className="top-section">
                            <i className="message fas fa-envelope"></i>
                            <i className="notif fas fa-bell"></i>
                        <div className="pic">
                           <Avatar githubHandle={this.props.user.githubHandle} size={150} round="20px" />
                        </div>
                        <div className="name">Profile</div>
                        <div className="tag">@github</div>
                        </div>
                
                        <div className="bottom-section">
                                {/* Bottom, white section of the profile card */}
                                <div className="bottom-section">
                                <   h3 align="center" className="DevName">What are you motivated to do today?</h3>

                                </div>
                    </div>
                </div>
            </div>
        </div>
        )
            
            
    }
}

export default ProfileCard;
