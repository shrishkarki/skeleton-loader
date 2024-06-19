
import SkeletonElement from './SkeletonElement';

const SkeletonCard = () => {
  return (
    <div className='mb-8'>
        <SkeletonElement type='card'/>
       
        <div className='flex justify-between px-2'>
      <SkeletonElement type='content'/>
      <SkeletonElement type='content'/>
        </div>
        
        <SkeletonElement type="title"/>
        
        
    </div>
  )
}

export default SkeletonCard;