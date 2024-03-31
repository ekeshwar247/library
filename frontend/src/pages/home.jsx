import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {

  const [books,setBooks] = useState([])

  useEffect(
    ()=>{
      axios.get('http://localhost:5000/books/')
      .then((response)=>{
        setBooks(response.data.books)
        // console.log(response.data.books)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  ,[])

  return (
    <div>
      <Link to='/books/create'>
        Create new book
      </Link>
      {
        books.map((book,index)=>{
          {console.log(book)}
          return(
          <div>
          <p>{index+1}</p>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.publishYear}</p>
          <Link to={'/books/details/'+book._id}>
            View book
          </Link>
          <br></br>
          <Link to={'/books/delete/'+book._id}>
             Delete Book
          </Link>
          <br></br>
          <Link to={'/books/edit/'+book._id}>
            Edit book
          </Link>
          <br></br>
          </div>
          )
        })
      }

    </div>
  )
}

export default Home