import React, { useEffect,useState} from 'react';

import { getRecommmendationData } from '../../Services/Api';
import { Movies } from '../../@types/Imodel';
import { Istate } from '../../@types/Istate';
import Card from '../Card';
import Pagination from '../Pagination/Pagination';

interface IrecommProps{
    id:string|undefined
}

const Recommendation:React.FC<IrecommProps> = ({id}) => {
    const [datas,setDatas]=useState<Istate>({
        loading:true,
        page:1,
        totalPages:1,
         movies:[],
        errorMsg:""
      });

      const [pageNo,setPageNo]=useState<number>(1);


    useEffect(()=>{
     
       const getRecommendation=async()=>{

      

        try {
            const response:Movies=await getRecommmendationData(id,pageNo);
            
            setDatas({ loading:true,
              movies:response.results,
              page:response.page,
              totalPages:response.total_pages,
              errorMsg:""});
          } catch (error) {
            console.error(error);
          }
      

       }
        getRecommendation();
    },[id,pageNo])
  return (
    <>
    <h1 className='text-3xl font-extrabold pl-5 tracking-wider underline-offset-[15px] underline'>Recommendation</h1>
    <div className='grid md:grid-cols-5 gap-x-6 px-10 mt-20'>


      

   {
   datas.movies.map((eachItem,index)=>{

      
      return <Card eachItem={eachItem} key={index}/>
    })
   }

   </div>


   <Pagination page={pageNo} setPage={setPageNo} totalPages={datas.totalPages}/>


    </>
  )
}

export default Recommendation