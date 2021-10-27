import React from 'react'
import '../about_us/About_Us.css'


function About_Us() {
    return (
        <div className="About_Us bg-gray-300 divheight">


            <body className="bg-gray-600 flex justify-center items-center h-screen">
                <div className="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4">This is the Notes Taking Website</div>

                    <div className="flex justify-between items-center px-6 py-4">
                        <div className="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">Under Construction</div>
                        <div className="text-sm">October 27, 2021</div>
                    </div>

                    <div className="px-6 py-4 border-t border-gray-200">
                        <div className="border rounded-lg p-4 bg-gray-200">
                            This Website is Made by Ayas Ahmad
                        </div>
                    </div>

                    <div className="bg-gray-200 px-6 py-4">
                        <div className="uppercase text-xs text-gray-600 font-bold">Developer</div>

                        <div className="flex items-center pt-3">
                            <div className="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">TN</div>
                            <div className="ml-4">
                                <p className="font-bold">Ayas Ahmad</p>
                                <p className="text-sm text-gray-700 mt-1">Front-end Web developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>






        </div>
    )
}

export default About_Us
