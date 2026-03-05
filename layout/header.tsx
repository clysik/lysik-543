'use client';
import React from 'react';
import Image from 'next/image'
import Heart from '../assets/whiteheart.png';
import Link from 'next/link'

const Header:React.FC = () => {
    return(
        <header className="" style={{padding: '1rem',backgroundColor:'#fcacd0'}}>
            <div className="flex">
                <Image src={Heart} alt="icon"/>
                <h1>My Application Header</h1>
            </div>
            <div className="flex p-8" style={{padding: '1em',backgroundColor:'#ff3891'}}>
                <Link href="/">HOME</Link>
                <Link href="/about">ABOUT</Link>
                <li>NAV OPTION 2</li>
                <li>NAV OPTION 3</li>
            </div>
            
        </header>
    );
};

export default Header;