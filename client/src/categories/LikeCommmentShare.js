import React from 'react'
import LikeImg from '../images/like.png'
import CommentImg from '../images/comment.png'
import ShareImg from '../images/share.png'
import UserImg from '../images/user.png'
import CommentCard from './CommentCard'
const LikeCommmentShare = () => {
    console.log()
    return (
        <>
            <div className="lcsContainer">
                <div className="lcsContent">
                    <div className="likeContainer">
                        <img src={LikeImg} alt="logo" />
                        <p>cnt</p>
                    </div>
                    <div className="commentContainer">
                        <img src={CommentImg} alt="logo"/>
                        <p>cnt</p>
                    </div>
                    <div className="shareContainer">
                        <img src={ShareImg} alt="logo" />
                        <p>cnt</p>
                    </div>
                </div>
            </div>
            <div id='lcsCommentContainer' className="lcsCommentContainer">
                <img src={UserImg} alt="" />
                <input type="text" placeholder='Write a comment ...'/>
                <button>Comment</button>
            </div>
            <div className="commentCard">
                <CommentCard/>
            </div>
        </>
    )
}

export default LikeCommmentShare