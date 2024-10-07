import React from 'react'
import data from "../content/index.json";
/**
 * This button group contains the 4 buttons
 * that allow our users to filter through 
 * the employees based on job title
 */

const ButtonGroup = ({active, setActive}) => {

    const { job_titles } = data

    return (
        <div className={`flex md:pt-[32px] pt-[24px] w-full`}>
            <div className={`flex flex-col`}>

                <h3 className={`font-bold text-xl`}>
                    Job Title
                </h3>

                <div className={`flex flex-row flex-wrap pt-[14px] gap-[2px] items-center text-center`}>
                    <button
                        className={`inline-block px-3 rounded-[4px] h-[42px] leading-[42px] ` + (active === 'All' ? 'bg-[#1E40AF] text-white font-semibold' : 'hover:bg-gray-300 hover:text-black text-gray-500')}
                        onClick={() => setActive('All')}
                    >
                        All
                    </button>

                    {job_titles.map((item) => (
                        <button
                            className={`inline-block px-3 rounded-[4px] h-[42px] leading-[42px] ` + (active === item ? 'bg-[#1E40AF] text-white font-semibold' : 'hover:bg-gray-300 hover:text-black text-gray-500')}
                            onClick={() => setActive(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ButtonGroup