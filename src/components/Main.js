import React from 'react'
import './Main.css'

import {useEffect, useState} from 'react'
const Main = props => {
   const [data,setData] = useState('')
    
    useEffect(()=>{
        setData(props.data.Search)
    },[props.data])
    return (
        <div className="main">
            <div className="results">
                {
                    data && data.map((movie,index) => <div className="movie" key={index}>Title:{movie.Title} ({movie.Year})</div>)
                }
            </div>

            <div className="nominations">
                
            </div>
            
        </div>
    )
}

export default Main