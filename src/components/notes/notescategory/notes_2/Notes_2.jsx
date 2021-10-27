import React, { useEffect } from "react";
import "../notes_1/Notes_1.css"
import Creates_Notes2 from './Creates_Notes2'
import { useState } from "react"
import Notes from "../../Notes";
import { renderIntoDocument } from "react-dom/test-utils";

const getLocalItems = () => {
    let list2 = localStorage.getItem('lists2')

    if (list2) {
        return JSON.parse(localStorage.getItem('lists2'))
    }
    else {
        return [];
    }
}




export default function Notes_2() {
    const [button, setButton] = useState("Create New Note");
    const [toggle, setToggle] = useState(false);
    const [idd, setIdd] = useState(null);
    const [note, setNote] = useState({
        title: '',
        content: '',
    })
    const [item, setItem] = useState(getLocalItems);




    // console.log(item)
    const addEvent = () => {
        if (note.title === '' || note.content === '') {
            alert('Please Fill the Input ')
        }
        else if (note.title && note.title && toggle) {

            setItem(
                item.map((item) => {
                    if (item.id === idd) {
                        return { ...item, note: note, }
                    }
                    return item;
                })
            )
            setNote({
                title: '',
                content: '',
            })
            setToggle(false)
            // console.log(idd)
            // console.log(item.id)
            // console.log(note)
        }
        else {
            const allInputData = { id: new Date().getTime().toString(), note: note, }
            setItem((prevData) => {
                return [...prevData, allInputData];
            })
            setNote({
                title: '',
                content: '',
            })
        }

    }


    const InputEvent = (e) => {

        const { name, value } = e.target


        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }

            value = ""
        })






    }

    useEffect(() => {
        localStorage.setItem('lists2', JSON.stringify(item));
    }, [item])




    return (
        <div className="Notes_1 bg-gray-300 divheight h-auto ">



            <body class=" flex  justify-center items-center ">
                <div class="bg-white my-3 p-10 rounded-lg shadow-md">

                    <div className=" flex w-full flex-wrap  mb-3">
                        <input type="text" name="title" value={note.title} placeholder="Tittle" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10" onChange={InputEvent} />
                        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>


                    <div className="mb-3 pt-0">
                        <textarea row="" column="" placeholder="Start Writing Your Note" name="content" value={note.content} className="notes note_box px-3 py-5 text-blueGray-600 bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10" onChange={InputEvent}>

                        </textarea>

                    </div>





















                    {toggle ?
                        (<button class="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75" onClick={addEvent} >Save Note</button>) : (
                            <button class="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75" onClick={addEvent} >Create New Note</button>
                        )
                    }

                </div>
            </body>







            <Creates_Notes2
                item={item}
                setItem={setItem}
                setToggle={setToggle}
                note={note}
                setNote={setNote}
                setIdd={setIdd} />







        </div >
    )
}
