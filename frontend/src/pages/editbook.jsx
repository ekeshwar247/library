import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'

const Editbook = () => {

  const {id} = useParams()

  const [title,changeTitle] = useState('')
  const [author,changeAuthor] = useState('')
  const [publish,changePublish] = useState('')
  const navigate = useNavigate()
  
  useEffect(()=>{
    axios.get('http://localhost:5000/books/'+id)
    .then((response)=>{
      changeTitle(response.data.title)
      changeAuthor(response.data.author)
      changePublish(response.data.publishYear)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  function submitBook()
  {
    const finaldata = {
      title:title,
      author:author,
      publishYear:publish
    }
    axios.put('http://localhost:5000/books/'+id,finaldata)
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
      <input name='title' placeholder='Book Title' value={title} type='String' onChange={(e)=>{changeTitle(e.target.value); console.log(title);}}></input>
      <input name='author' placeholder='Book Author' value={author} type='String' onChange={(e)=>{changeAuthor(e.target.value); console.log(author);}}></input>
      <input name='publish' placeholder='Publish Year' value={publish} type='Number' onChange={(e)=>{changePublish(e.target.value); console.log(publish);}}></input>
      <button name='submit' onClick={submitBook}>Submit</button>
    </div>
  )
}

export default Editbook