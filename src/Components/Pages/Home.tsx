import React, { useEffect, useState } from 'react';

import { Movies, Result } from '../../@types/Imodel';
import { getDetails } from '../../Services/Api';
import Card from '../../Components/Card';

import { Istate } from '../../@types/Istate';
import Pagination from '../Pagination/Pagination';
import SkeletonCard from '../Skeleton/SkeletonCard';



function Home() {



  const [datas, setDatas] = useState<Istate>({
    loading: true,
    page: 1,
    totalPages: 500,
    movies: [],
    errorMsg: ""
  })

  const [params, setParams] = useState<number>(datas.page);



  useEffect(() => {
    const getDatas = async () => {


      setDatas({
        ...datas, loading: true
      });

      setTimeout(async()=>{
        try {
          const response: Movies = await getDetails(params);
  
          setDatas({
            ...datas, loading: false,
            movies: response.results,
            page: response.page,
  
            errorMsg: ""
          });
        } catch (error) {
          console.error(error);
        }
      },2000)
   
    }
    getDatas();
  }, [params]);


  console.log(datas, "datas")

  return (
    <div className='py-3'>
      <div className=' ml-4  '>
        <button className='bg-red-500 px-5 py-2 rounded-md text-2xl'>Movies ko naam </button>

      </div>
      <div className='grid md:grid-cols-5 gap-x-6 px-10 mt-20'>



        {datas.loading ?
          <>
            {Array.from({ length: 20 }, (_, index) => (

              <SkeletonCard />
            ))}
          </> :
          <>
            {
              datas.movies.map((eachItem, index) => {


                return <Card eachItem={eachItem} key={index} />
              })
            }
           

          </>


        }



      </div>

      <Pagination page={params} setPage={setParams} totalPages={datas.totalPages} />




      {/* <div className='flex justify-center mt-5'>
   <ul className='inline-flex   bg-[#242323]  px-2 py-1 text-sm rounded-sm gap-2 text-[#adb9c7]'>
            <li className='cursor-pointer py-1 px-1.5' >
              <BiChevronLeft className='text-lg' />
            </li>

            {Array.from({ length: 5 }, (_, index) => (
              <li className={`${datas.page === index + 1 ? "bg-blue-500 text-white rounded" : null} cursor-pointer py-1 px-3 `} onClick={() => setParams(index + 1)} key={index}>{index + 1}</li>
            ))}
            <li className='cursor-pointer py-1 px-1.5'>
              <BiChevronRight className='text-lg' />
            </li>
          </ul>
   </div> */}


    </div>

  );
}

export default Home;
