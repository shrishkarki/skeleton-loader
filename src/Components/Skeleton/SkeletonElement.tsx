import React from 'react';
import './SkeletonElement.css';
import SkeletonAnimation from './SkeletonAnimation';


interface IskeletonProps{
    type:string
}
const SkeletonElement:React.FC<IskeletonProps> = ({type}) => {

    const classes=`skeleton ${type}`;
  return (
    <div className={classes}>
        <SkeletonAnimation/>
    </div>
  )
}

export default SkeletonElement