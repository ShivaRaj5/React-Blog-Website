import React, { useState } from 'react'
import CommentReply from './CommentReply';

const CommentCard = () => {
    
    const [replyCard, setReplyCard] = useState(false);
    const toggleReplyCard = () => {
        setReplyCard(true);
    }
    return (
        <>
            <div className="commentCardContent">
                <h4>Shiva Raj</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla asperiores enim sed quos</p>
            </div>
            <div className="likeReply">
                <p>Like</p>
                <p onClick={toggleReplyCard}>Reply</p>
                {replyCard && <CommentReply />}
            </div>
        </>
    )
}

export default CommentCard