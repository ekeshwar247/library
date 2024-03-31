import React, {useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Deletebook = () => {

  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    
    axios.delete('http://localhost:5000/books/'+id)
    .then((response)=>{
         console.log(response.data.message)
         navigate('/')
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <div>Redirecting...</div>
  )
}

export default Deletebook