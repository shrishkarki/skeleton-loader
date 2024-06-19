import React, { useEffect } from 'react';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';


interface IpageProps {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    totalPages: number
}

const Pagination: React.FC<IpageProps> = ({ page, setPage, totalPages }) => {





    const getPageNumbers = () => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        } else if (page <= 4 && totalPages > 7) {
            // return Array.from({ length: 5 }, (_, i) => i + 1).concat(totalPages);
            return [1, 2, 3, 4, 5, '...', totalPages]
        }
        else if (page > totalPages - 4) {
            return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
            return [1, '...', page - 1, page, page + 1, '...', totalPages];
        }
    };






    const handlePage = (type: string) => {
        if (type === "left" && page >= 2) {
            setPage(page - 1)
        }
        if (type === "right" && page < totalPages) {

            setPage(page + 1)
        }

    }




    return (
        <>
            <div className='flex justify-center mt-5'>
                <ul className='inline-flex   bg-[#242323]  px-2 py-1 text-sm rounded-sm gap-2 text-[#adb9c7]'>
                    <li className={`cursor-pointer py-1 px-1.5   ${page === 1 ? 'opacity-30' : 'opacity-100'}`} onClick={() => handlePage("left")}>
                        <BiChevronLeft className='text-lg' />
                    </li>



                    {getPageNumbers().map((pageNumber, index) => (
                        <li className={`${page === pageNumber ? "bg-blue-500 text-white " : null} cursor-pointer py-1 px-3   
                         ${typeof pageNumber === 'number' ? "hover:bg-blue-400  hover:text-white" : null} rounded`} onClick={() => setPage(typeof pageNumber === 'number' ? pageNumber : page)} key={index}>{pageNumber}</li>
                    ))}






                    <li className={`cursor-pointer py-1 px-1.5 ${page === totalPages ? 'opacity-10' : 'opacity-100'}`} onClick={() => handlePage("right")}>
                        <BiChevronRight className='text-lg' />
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Pagination