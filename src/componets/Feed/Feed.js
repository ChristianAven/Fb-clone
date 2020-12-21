import React from 'react'
import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import "./Feed.css"

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
                profilePic="https://avatars3.githubusercontent.com/u/60729261?s=60&v=4"
                message="mensaje del usuario"
                timestamp="This is a timestamp"
                username="User name"
                image="https://code.org/shared/images/social-media/codeorg2019_social.png" />
            <Post
                profilePic="https://avatars3.githubusercontent.com/u/60729261?s=60&v=4"
                message="mensaje del usuario"
                timestamp="This is a timestamp"
                username="User name"
                image="https://code.org/shared/images/social-media/codeorg2019_social.png" />
            <Post
                profilePic="https://avatars3.githubusercontent.com/u/60729261?s=60&v=4"
                message="mensaje del usuario"
                timestamp="This is a timestamp"
                username="User name"
                image="https://code.org/shared/images/social-media/codeorg2019_social.png" />
             
        </div>
    )
}

export default Feed
