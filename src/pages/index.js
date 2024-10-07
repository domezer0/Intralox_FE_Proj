import * as React from "react"
// A JSON object with all content for the page
import data from "../content/index.json";
import Header from "../components/Header";
import ButtonGroup from "../components/ButtonGroup";
import Cards from "../components/card";

const IndexPage = () => {

    // Each type of content
    const { page, people, job_titles } = data;

    const [active, setActive] = React.useState('All');
    const [peopleData, setPeopleData] = React.useState(people);

    // Handles filtering the list of people when corresponding job title button is clicked
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
                    <Header />

                    {/* Filters people by the selected job title */}
                    <ButtonGroup 
                        active={active}
                        setActive={setActive}
                    />
                </div>

                <div className={`lg:w-2/3 lg:pl-4 lg:pt-0 lg:px-0 pt-[32px] px-3 w-full  max-w-[661px]`}>
                    {/* Cards for employees */}
                    <Cards 
                        peopleData={peopleData}
                    />
                </div>

            </div>
        </main>
    )
}

export default IndexPage
