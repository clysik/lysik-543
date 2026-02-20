/*import Image from "next/image";*/
import Intro from "@/components/intro"
import Title from "@/components/title"
import Section from "@/components/section"
import AccordionUI from "@/layout/ui/accordion";


export default function Home() {
  return (
    <div className="">
      <main className="flex">
        <div style={{backgroundColor:'#37ff66'}}>
            
        </div>
        <AccordionUI/>
        <Section/>
        <Section/>
      </main>
    </div>
  );
}
