'using client'
import Section from "@/components/section"
import AccordionUI from "@/layout/ui/accordion";
import Image from "next/image"
import React from "react";

import RedBlob from '../../assets/redblob.png'


const About: React.FC = asyc => {
  return (
    <div className="">
      <main className="flex">
        <div style={{backgroundColor:'#37ff66'}}>
            <h1>ABOUT</h1>
            <p>This is the about page. Something Something Something</p>
            <Image src={RedBlob} alt="image of a red circle drawn in MS Paint"/>
        </div>
        
      </main>
    </div>
  );
}
export default About