
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getEachMovie } from '../../Services/Api';
import { EachMovieData } from '../../@types/IeachMovie';
import {FaStar} from 'react-icons/fa';
import  {GrPlayFill} from 'react-icons/gr';
import {VscBookmark} from 'react-icons/vsc';
import {LuShare} from "react-icons/lu";


import Recommendation from '../UI/Recommendation';
import SkeletonEachMovie from '../Skeleton/SkeletonEachMovie';




interface IEachMovieInterface {
    loading: boolean,
    eachMovie: EachMovieData,
    errorMessage: ""
}

const EachMovie = () => {
    const [eachMovieState, setEachMovieState] = useState<IEachMovieInterface>({
        loading: true,
        eachMovie: {} as EachMovieData,
        errorMessage: ""
    });

    const { id } = useParams();
     
    

    useEffect(() => {

        const getEachMovieData = async () => {

            setEachMovieState({
                ...eachMovieState,
                loading:true
            })
         
            setTimeout(async()=>{
                try {
               

                    const response: EachMovieData = await getEachMovie(id);
                    setEachMovieState({
                        loading: false,
                        eachMovie: response,
                        errorMessage: ""
                    })
    
                }
                catch (error) {
                    console.log("error", error);
    
                }
            },2000);
         
        }


        getEachMovieData();
    }, [id]);


    const imageBaseUrl="https://image.tmdb.org/t/p/w500";
    const releaseYear=new Date(eachMovieState.eachMovie.release_date).getFullYear();
    const rating=eachMovieState.eachMovie.vote_average?.toFixed(2)
    console.log(eachMovieState.eachMovie.genres)

    return (
        
<>
        {eachMovieState.loading ?  <SkeletonEachMovie/> :
        <div >

           
        {/* <div className='px-20 py-14' style={{background:`url(${imageBaseUrl}${eachMovieState.eachMovie.backdrop_path}) no-repeat right top`, backgroundSize:"700px" }}> */}
        <div className='px-20 py-14'>
            <div className='flex gap-x-20'>
                <figure className='h-[30rem]'><img src={`${imageBaseUrl}${eachMovieState.eachMovie.poster_path}`} className='h-full'/></figure>
                <div>
                    {/* title */}
                    <h2 className='text-3xl font-extrabold py-2 tracking-wide'>{eachMovieState.eachMovie.title}</h2>

                    {/* release year and Time */}
                    <div className='flex gap-x-5'>
                        <h6>{releaseYear}</h6>
                        <h6 className='capitalize'>{eachMovieState.eachMovie.runtime} Min</h6>
                    </div>

                        {/* genres */}
                    <div className='py-2 font-bold tracking-wide'>
                       <ul className='flex gap-x-2'> { eachMovieState.eachMovie.genres?.map((eachItem)=>{
                            return (
                                <li key={eachItem.id}>
                                    {eachItem.name}
                                </li>
                            )
                        })}
                        </ul>
                    </div>

                            {/*  */}

                    <p className='flex  gap-1'> <FaStar className='text-yellow-400 '/> <span>{rating}</span> </p>



                    <div className='flex gap-x-6 pt-4'>
                        <button className='bg-yellow-400 flex items-center gap-3 px-3.5  py-2 rounded-sm opacity-80 hover:opacity-95'><GrPlayFill/> <span className='text-black font-semibold'>Play</span></button>
                        <button className='text-2xl opacity-80 hover:opacity-95'><VscBookmark/></button>
                        <button className='text-2xl opacity-80 hover:opacity-95'><LuShare/></button>

                    </div>
                        {/* movies description */}
                    <p className='w-[800px] py-7'>
                        {eachMovieState.eachMovie.overview}
                    </p>

                </div>
            </div>
        </div>

       
           
           <Recommendation id={id}/>
         

       
        </div>
                    }


</>
    )

   
}

export default EachMovie