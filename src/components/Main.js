import React from 'react'
import './Main.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
const Main = props => {
   const [title, setTitle] = useState('die+hard')
    
    axios
    .get(`http://www.omdbapi.com/?apikey=dbfae813&t=${title}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    return (
        <div className="main">
            <h1>Hello</h1>
        </div>
    )
}

export default Main