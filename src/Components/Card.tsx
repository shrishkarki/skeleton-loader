import React from 'react'
import { Result } from '../@types/Imodel';
import {FaStar} from "react-icons/fa";
import {MdOutlinePlayCircleFilled} from 'react-icons/md';
import { NavLink } from 'react-router-dom';


interface CardProps{
    eachItem:Result,
    
}

const imageBaseUrl="https://image.tmdb.org/t/p/w500";

const Card: React.FC<CardProps>=({eachItem}) => {


  
    const imgSrc=`${imageBaseUrl}${eachItem.poster_path}`;
    const releaseYear=new Date(eachItem.release_date).getFullYear();
  return (
<div className='mb-10 transition-all duration-500 hover:scale-105'>
    <figure className=' h-[20rem] relative '>
      <img src={imgSrc} alt={eachItem.poster_path} className=' rounded-md h-full object-cover'/>
      <div className='overlays absolute top-0 left-0 right-0 bottom-0 opacity-0  transition-opacity duration-300 cursor-pointer  bg-black hover:opacity-70'>


        <NavLink to={`/movie/${eachItem.id}/${eachItem.title}`} className='play-icon text-7xl  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10' onClick={() => window.scrollTo(0, 0)} >
         <MdOutlinePlayCircleFilled/>
        </NavLink>
      </div>
      
      </figure>

    <div className='flex justify-between  text-xs px-2 py-3'>
      <p>{releaseYear}</p>
      <p className='flex  gap-1 pr-4'> <FaStar className='text-yellow-400 '/> <span>{eachItem.vote_average}</span> </p>
     
    </div>
    <figcaption className='px-2 text-sm tracking-wider'>{eachItem.title}</figcaption>
</div>
  )
}

export default Card;