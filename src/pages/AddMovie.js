import axios from 'axios';
import React, { useRef } from 'react'
import MovieNavBar from '../components/MovieNavBar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const AddMovie = () => {
  const history=useHistory();
   
  const movie_name_reference=useRef();
  const rating_reference=useRef();

  const description_reference=useRef();




  const addmoviehandler=async(e)=>
  {
    e.preventDefault();
    history.push("/add");
 const moviedata={
movie_name:movie_name_reference.current.value,
rating:rating_reference.current.value,
description:description_reference.current.value


 };
 console.log(moviedata)
 try{
   const response=await axios.post( "https://api.dynoacademy.com/test-api/v1/movies",moviedata);
   console.log(response)
   alert(response.data.message);
 }
 catch(error)
  {
   alert("cannot find data");
  }
 
  }
  return (
    <>
    <MovieNavBar/>

    <div>
      <form onSubmit={addmoviehandler}>
  Movie Name : <input type='text' placeholder='Enter Movie Name' ref={movie_name_reference}/><br/><br/>
  Rating : <input type='number' placeholder='Give Rating' ref={rating_reference}/><br/><br/>
  Description : <textarea ref={description_reference} /><br/><br/>
  <button type='submit'>Add Movie</button>
      </form>
    </div>
    </>
  )
}

export default AddMovie;