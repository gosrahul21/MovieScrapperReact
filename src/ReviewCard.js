import React from 'react'
import './review.css'
import StarSharpIcon from '@material-ui/icons/StarSharp';

function ReviewCard({user,commentHead,commentBody,rating}) {
    return (
        <div className="reviewCard">
            <div className="userDetail">
                <h2>{commentHead}</h2> 
                <span>{user}</span>
            </div>
            <span className="rating"><StarSharpIcon style={{color:"#FFD700"}}/> {rating}/ 10</span>
            
            <p>{commentBody}</p>
        </div>
    )
}

export default ReviewCard
