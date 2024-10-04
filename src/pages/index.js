import * as React from "react"
// A JSON object with all content for the page
import data from "../content/index.json"

/**
 * The classes in this file are provided by Tailwind which is included and can
 * be used to style the project, but is not required. If you would prefer to 
 * use CSS to create your own classes, add them to the global stylesheet:
 * 
 * ./src/styles/global.css
 * */

const IndexPage = () => {

    // Each type of content
    const { page, people, job_titles } = data;

    const [active, setActive] = React.useState('All');
    const [peopleData, setPeopleData] = React.useState(people)

    // Handles filtering the list of people when button is clicked
    React.useEffect(() => {
        const handleFilter = () => {
            if (active === 'All') {
                setPeopleData(people)
            } else {
                setPeopleData(people.filter(prev => prev.job_title === active))
            }
        }
        handleFilter()
    }, [active])

    return (
        <main className={`md:py-24 py-16 text-gray-900`}>
            <div className={`container xl:max-w-screen-lg flex flex-wrap justify-center lg:justify-start`}>

                <div className={`lg:w-1/3 lg:pr-4 md:w-full md:max-w-[644px] max-w-[336px] w-full`}>
                    {/* Add markup here with the page heading & description */}
                    <div className="flex flex-col gap-[6px]">
                        <h1 className="font-bold md:text-4xl text-2xl">{page.heading}</h1>
                        <p className="md:text-xl text-md text-gray-500 md:leading-[24px]">{page.description}</p>
                    </div>


                    {/* Add buttons that filter people by the selected job title */}

                    <div className="flex md:pt-[32px] pt-[24px] w-full">
                        <div className="flex flex-col">
                            <h3 className="font-bold text-xl">
                                Job Title
                            </h3>
                            <div className="flex flex-row flex-wrap pt-[12px] gap-[2px] items-center">
                                <div className="text-center cursor-pointer">
                                    <a
                                        className={`inline-block py-[9px] px-3 rounded-[4px] ` + (active === 'All' ? 'bg-blue-800 text-white font-semibold' : 'hover:bg-gray-300 hover:text-black text-gray-500')}
                                        onClick={() => setActive('All')}
                                    >
                                        All
                                    </a>
                                </div>
                                {job_titles.map((title, index) => (
                                    <div className="text-center cursor-pointer">
                                        <a
                                            className={`inline-block py-[9px] px-3 rounded-[4px] ` + (active === job_titles[index] ? 'bg-blue-800 text-white font-semibold' : 'hover:bg-gray-300 hover:text-black text-gray-500')}
                                            onClick={() => setActive(job_titles[index])}
                                        >
                                            {job_titles[index]}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>


                </div>

                <div className={`lg:w-2/3 lg:pl-4 lg:pt-0 pt-[32px] lg:px-0 px-3 w-full justify-items-center grid md:grid-cols-2 grid-cols-1 gap-x-[34px] gap-y-[32px] max-w-[661px]  `}>
                    {/* Add people here */}
                    {peopleData.map((person) => (
                        <div className="rounded-lg border-solid border-[1px] border-gray-300 md:h-[423px] min-h-[366px] md:w-[308px] w-[336px]">
                            <img src={person.photo} alt='user profile' className="md:w-[308px] w-[336px] h-[206px] rounded-t-lg" />

                            <div className="p-4">
                                <div className="flex flex-col">
                                    <h2 className="font-bold text-md leading-[20px]">
                                        {person.name}
                                    </h2>
                                    <h3 className="text-slate-500 font-medium tracking-wide">
                                        {person.job_title}
                                    </h3>
                                </div>

                                <h4 className="py-4 font-medium text-[14px] leading-[18px] text-slate-500">
                                    {person.bio}
                                </h4>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </main>
    )
}

export default IndexPage
