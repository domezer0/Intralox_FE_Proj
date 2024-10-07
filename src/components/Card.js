import React from 'react'

/**
 * Component for employee cards 
 */

const Cards = ({ peopleData }) => {

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center gap-x-[34px] gap-y-[32px]'>
            {peopleData.map((data) => (
                <div className={`rounded-lg border-solid border-[1px] border-gray-300 md:h-[423px] md:w-[308px] min-h-[369px] w-[339px]`}>
                    <img src={data.photo} alt='user profile' className={`md:w-[308px] w-[336px] h-[206px] rounded-t-lg`} />

                    <div className={`p-4`}>
                        <div className={`flex flex-col`}>
                            <h3 className={`font-bold text-md leading-[20px]`}>
                                {data.name}
                            </h3>
                            <h3 className={`text-gray-500 font-normal tracking-wide`}>
                                {data.job_title}
                            </h3>
                        </div>

                        <p className={`py-4 font-normal text-[14px] leading-[18px] text-gray-500`}>
                            {data.bio}
                        </p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Cards