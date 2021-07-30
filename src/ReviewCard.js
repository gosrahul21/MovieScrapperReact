import React,{useState} from 'react'
import './review.css'
import StarSharpIcon from '@material-ui/icons/StarSharp';

function ReviewCard({user,commentHead,commentBody,rating}) {
    const [see,setSee] = useState(false)
    return (
        <div className={`reviewCard`}>
            <div className="userDetail">
                <h2>{commentHead}</h2> 
                <span className="user">- {user}</span>
            </div>
            <span className="rating"><StarSharpIcon style={{color:"#FFD700"}}/> {rating}/ 10</span>
            
            <p>{see?commentBody:commentBody.substring(0,400)}</p>
            <span onClick={()=>setSee(!see)} className="link-more">{see?"read less":"read more"}</span>
        </div>
    )
}

export default ReviewCard
