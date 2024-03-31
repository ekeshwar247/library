import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Createbook = () => {

  const [title,changeTitle] = useState('')
  const [author,changeAuthor] = useState('')
  const [publish,changePublish] = useState('')
  const navigate = useNavigate()

  function submitBook()
  {
    const finaldata = {
      title:title,
      author:author,
      publishYear:publish
    }
    axios.post('http://localhost:5000/books/',finaldata)
    .then((response)=>{
      console.log(response)
      navigate('/')
    })
    .catch((error)=>
    {
      console.log(error)
    })
  }

  return (
    <div>
      <Link to='/'>
        Back to Home page
      </Link>
      <br></br>
      <br></br>
      <input name='title' placeholder='Book Title' type='String' onChange={(e)=>{changeTitle(e.target.value); console.log(title);}}></input>
      <input name='author' placeholder='Book Author' type='String' onChange={(e)=>{changeAuthor(e.target.value); console.log(author);}}></input>
      <input name='publish' placeholder='Publish Year' type='Number' onChange={(e)=>{changePublish(e.target.value); console.log(publish);}}></input>
      <button name='submit' onClick={submitBook}>Submit</button>
    </div>
  )
}

export default Createbook