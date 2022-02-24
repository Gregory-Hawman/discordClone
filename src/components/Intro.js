import React from 'react'
import { BsHash } from 'react-icons/bs';

export default function Intro(props) {
    let curChannel = props.channels[0].list[0]

    return (
        <div className='content-intro'>
            <div className='bg-gray-600 w-16 h-16 rounded-full flex justify-center items-center'> 
                <BsHash size='56'  className='text-gray-200'/> 
            </div>
            <h3 className='text-white text-3xl font-bold my-3'>
                Welcome to #{curChannel}
            </h3>
            <p className='text-white'>
                This is the start of #{curChannel} channel
            </p>
        </div>
    )
}
