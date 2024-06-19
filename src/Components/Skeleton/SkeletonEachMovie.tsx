import React from 'react'
import SkeletonCard from './SkeletonCard'
import SkeletonElement from './SkeletonElement'

const SkeletonEachMovie = () => {
  return (
    <>
    <div className='px-20 py-14'>   
          <div className='grid grid-cols-[1fr,3fr] gap-x-20'>
            <SkeletonElement type="eachCard"/>
    <div>
        {/* title */}
       <SkeletonElement type='mainTitle'/>

        {/* release year and Time */}
        <div className='flex gap-x-5'>
           <SkeletonElement type='content'/>
           <SkeletonElement type='content'/>
        </div>

            {/* genres */}
        <div className='flex gap-x-3'>
           <SkeletonElement type='content'/>
           <SkeletonElement type='content'/>
           <SkeletonElement type='content'/>
        </div>

                {/*  */}
                <SkeletonElement type='content'/>

      


        <div className='flex gap-x-6'>
        <SkeletonElement type='Button'/>
           <SkeletonElement type='Button'/>
           <SkeletonElement type='Button'/>

        </div>
            {/* movies description */}
        <SkeletonElement type='text'/>
        <SkeletonElement type='text'/>
        <SkeletonElement type='text'/>

    </div>
</div>
</div>


<div className='w-[25%] px-10'>

<SkeletonElement type="mainTitle"/>
</div>


<div className='grid md:grid-cols-5 gap-x-6 px-10 mt-20'>
{Array.from({ length: 10 }, (_, index) => (
         
         <SkeletonCard key={index}/>
            ))}

            </div>

    </>
    
  )
}

export default SkeletonEachMovie;