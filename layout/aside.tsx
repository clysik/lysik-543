'use client';
import React from 'react'
import Image from 'next/image'
import Heart from '../assets/whiteheart.png'

const Aside:React.FC = () => {
    return(
        <aside style={{padding: '1rem',backgroundColor:'#ff4cb1'}}>
            <Image src={Heart} alt="Icon"/>
            <h1>Aside</h1>
            <li>Option 1</li>
            <li>Option 2</li>
        </aside>
    );
};

export default Aside;
