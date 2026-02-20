'use client';
import React from 'react';
import Image from 'next/image'
import Heart from '../assets/whiteheart.png';

const Header:React.FC = () => {
    return(
        <header className="" style={{padding: '1rem',backgroundColor:'#fcacd0'}}>
            <div className="flex">
                <Image src={Heart} alt="icon"/>
                <h1>My Application Header</h1>
            </div>
            <div className="flex p-8" style={{backgroundColor:'#ff3891'}}>
                <h2>Navigation Option 1</h2>
                <h2>Navigation Option 2</h2>
                <h2>Navigation Option 3</h2>
            </div>
            
        </header>
    );
};

export default Header;