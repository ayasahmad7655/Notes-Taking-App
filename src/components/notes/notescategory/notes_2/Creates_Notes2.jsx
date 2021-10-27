import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'


export default function Creates_Notes2(props) {
    const addItem = props.item;
    const setItem = props.setItem;
    const setToggle = props.setToggle;
    const note = props.note; const setNote = props.setNote;
    const setIdd = props.setIdd;


    // console.log(props);
    // 
    const DeleteNote = (index) => {
        // console.log(addItem);
        const updateItems = addItem.filter((addItem) => {
            return index !== addItem.id;
        })
        // console.log(updateItems)
        setItem(updateItems)

    }

    const EditItem = (id) => {
        setToggle(true)
        let editableitem = addItem.find((addItem) => {
            return addItem.id === id;

        })
        console.log(editableitem.note)
        setNote(editableitem.note);
        setIdd(id)

    }



    return (
        <div className="Creates_Notes1  ">
            {
                addItem.map((item) => {

                    return (
                        <div key={item.id} className=" w-1/1  bg-white ddd rounded-sm overflow-hidden shadow-lg m-16">

                            <div className="mx-6 my-4 border-b border-gray-light">
                                <div className="font-medium  text-2xl text-gray-darker mb-4">{item.note.title}</div>
                                <p className="font-normal text-gray-dark text-sm mb-2">
                                    {item.note.content}

                                </p>

                            </div>
                            <div className="mx-6 my-4 flex">

                                <div className="flex-grow text-right">


                                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center " onClick={() => DeleteNote(item.id)}>
                                        <img class="fill-current w-3 h-3 mr-2" src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" />
                                        <span>Delete</span>
                                    </button>

                                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mx-1 py-1 px-2 rounded inline-flex items-center" onClick={() => EditItem(item.id)}>
                                        <img class="fill-current w-3 h-3 mr-2" src="https://img.icons8.com/ios-filled/150/000000/edit--v2.png" />
                                        <span>Edit</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    )
                })
            }



        </div >
    )
}
