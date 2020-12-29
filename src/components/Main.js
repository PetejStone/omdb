import React from 'react'
import './Main.css'

import {useEffect, useState} from 'react'
const Main = props => {
   const [data,setData] = useState('')
   const [nominations,setNominations] = useState([])
   
   let [count, setCount] = useState(0)
   
   useEffect(()=>{
        setData(props.data.Search)
       /// setNominations(nominations)
        // setCount(count)
    },[props.data,nominations])
    
    const handleClick = (movie) => {
      setNominations(...[nominations],nominations.push(movie))
    }

    return (
        <div className="main">
            <div className="results">
                <h2>Results:</h2>
                {
                    data && data.map((movie,index) => 
                    <div className="movie" key={index}>
                        <h4 className="title">Title: {movie.Title} ({movie.Year})</h4>
                        <button className="nominate" onClick={() => handleClick(movie)}>Nominate</button>
                    </div>
                    )
                }
            </div>

            <div className="nominations">
                <h2>Nominations:</h2>

                {
                    nominations && nominations.map((movie,index) => 
                    <div className="movie" key={index}>
                        <h4 className="title">Title: {movie.Title} ({movie.Year})</h4>
                        <button className="nominate" onClick={() => handleClick(movie)}>Nominate</button>
                    </div>
                    )
                }
               
            </div>
            
        </div>
    )
}

export default Main