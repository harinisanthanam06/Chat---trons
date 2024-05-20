"use client";
import React from 'react'
import SendMessage from './SendMessage';

const index = () => {
    return (
        <><div className='flex w-full flex-col overflow-scroll h-full'>
            <div className='flex flex-col'>
                <span>New Chat</span>
                <span>New Chat</span>
                <div className='flex justify-end items-end'>
                    <SendMessage />
                </div>
            </div>
        </div></>
    )
}


export default index
