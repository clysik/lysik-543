'use client';
import React from 'react';
import Image from 'next/image'
import Heart from '../assets/whiteheart.png';

const Header:React.FC = () => {
    return(
        <header className="flex" style={{padding: '1rem',backgroundColor:'#27ff27'}}>
            <Image src={Heart} alt="icon"/>
            <h1>My Application Header</h1>
        </header>
    );
};

export default Header;