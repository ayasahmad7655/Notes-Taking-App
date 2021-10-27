import React from 'react'
import "../home/Home.css"
import { Link } from 'react-router-dom'







export default function Home() {
    return (
        <div className="Home_Page">

            <div className=" mauto p-3 bg-gray-300   flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7  sm:text-3xl sm:truncate">Notes Category</h2>

            </div>


            <div className="bg-gray-300  p-2  items-center ">


                {/* Notes-1 Category */}

                <div className="bg-white m-3 p-10 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold">Today's Email</h1>
                    <div className="mt-4 mb-10">
                        <p className="text-gray-600">Notes 75% completed</p>
                        <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                            <div className="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
                        </div>
                    </div>
                    <h3 className="text-xs uppercase">Current Ongong Notes:-:</h3>
                    <h2 className="tracking-wide extraa">
                        Hiring Interns For Quoality
                        <br />
                        (Details)
                    </h2>
                    <Link to="/Notes_1" className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75 ">Go to Notes</Link>
                </div>

                {/* Notes-2 Category */}

                <div className="bg-white m-3 p-10 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold">Project's Notes</h1>
                    <div className="mt-4 mb-10">
                        <p className="text-gray-600">Notes 45% completed</p>
                        <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                            <div className="bg-pink-400 w-2/4 h-full rounded-lg shadow-md"></div>
                        </div>
                    </div>
                    <h3 className="text-xs uppercase">Current Ongong Notes:</h3>
                    <h2 className="tracking-wide extraa">
                        Growth For Company
                        <br />
                        (Statistics)
                    </h2>
                    <Link to="/Notes_2" className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go to Notes</Link>
                </div>


                {/* Notes-3 Category */}

                <div className="bg-white m-3 p-10 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold">Personal's Notes</h1>
                    <div className="mt-4 mb-10">
                        <p className="text-gray-600">Notes 100% completed</p>
                        <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                            <div className="bg-pink-400 w-5/5 h-full rounded-lg shadow-md"></div>
                        </div>
                    </div>
                    <h3 className="text-xs uppercase">Current Ongong Notes:-:</h3>
                    <h2 className="tracking-wide extraa">
                        Learning Marketing
                        <br />
                        (Lessons)
                    </h2>
                    <Link to="/Notes_3" className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go to Notes</Link>
                </div>










            </div>




        </div>



    )
}
