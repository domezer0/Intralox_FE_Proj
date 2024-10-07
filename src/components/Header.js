import React from 'react'
import data from "../content/index.json";

/**
 * Header displayed in the top left
 */

const Header = () => {
    const { page } = data

    const heading = page.heading;
    const description = page.description;

    return (
        <div className={`flex flex-col gap-[6px]`}>
            <h1 className={`font-bold md:text-4xl text-2xl`}>{heading}</h1>
            <p className={`md:text-xl text-md text-gray-500 md:leading-[24px]`}>{description}</p>
        </div>
    )
}

export default Header