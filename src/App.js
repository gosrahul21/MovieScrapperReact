import React,{useState} from 'react'
import axios from 'axios'
import StarSharp from '@material-ui/icons/StarSharp';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReviewCard from './ReviewCard';

const App = () => {
    const [search,setSearch] = useState('')
    const [loading,setLoading] = useState(false)
    const [reviews,setReviews] = useState([]) 
    const [img,setImg] = useState('#')
    const [movie,setMovie] = useState('')
    const [frating,setFrating] = useState('')

    const getReviews =  (e)=>{
        e.preventDefault();

        if(search){
            setLoading(true)
            setReviews([])
            setMovie('')
            setImg('#')
            setFrating('')
   
            axios.post("https://imdbscrapperflask.herokuapp.com/review",{search:search.replace(" ","")}).then(({data:{img,movieName,list,frating}})=>{
                setLoading(false)
                setImg(img)
                setMovie(movieName)
                setFrating(frating)
                
                setReviews(list.map(({user,rating,commentHead,commentBody})=>(
                    <ReviewCard 
                    user = {user} 
                    rating={rating} 
                    commentHead={commentHead} 
                    commentBody = 
                    {commentBody}
                    frating={frating} />
                )))
            }).catch((err)=>{
                setReviews([])
                setLoading(false)
            })
        }
       
    }


    

    return (
        <div className="home">
            <form onSubmit = {getReviews}>
                <input type ="text" className='input' onChange = {(e)=>setSearch(e.target.value)}/>
                <input type="submit" className='btn'/>
            </form>
            <div className="result">
                
                {loading&&<CircularProgress/>}
                {movie&&(<div className="header">
                    <div className="movieDetails">
                   {(img!=='#')&& <img src={img} alt="" />}
                    <div className="details-right">
                        <h2>{movie}</h2>
                        <span className='rating'><StarSharp style={{color:"gold"}} />{frating} / 10</span>
                    </div>
                    </div>
                    
                    
                    {reviews}

                </div>)}
            </div>
            
        </div>
    )
}


export default App;