import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <>
        <div className='bg-red-200 size-80 relative'>
            {/* <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2rn_tocUjHjrkhgmgk78JYNIuX-6zQeRjQ&s"}
             alt='not found' width={500} height={100}
             /> */}
            <Image className='object-fill' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2rn_tocUjHjrkhgmgk78JYNIuX-6zQeRjQ&s"}
             alt='not found' fill={true}
             />
        </div>
            I am about
        </>
    )
}

export default About
