import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

const Showbook = () => {
   
   const {id} = useParams()
   const [book, changeBook] = useState({})

   useEffect(()=>{
       axios.get('http://localhost:5000/books/'+id)
       .then((response)=>{
           changeBook(response.data)
       })
       .catch((error)=>{
           console.log(error)
       })
   },[])

  return (
    <div>
      <Link to='/'>
        Back to Home page
      </Link>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.publishYear}</p>
    </div>
  )
}

export default Showbook