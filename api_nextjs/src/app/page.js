"use client"
import Image from "next/image";

export default function Home() {
  async function handleclick(params) {
    let data = {
      name:"hello",
      id:"jfdgjhdfg5654564"
    }
    let r = await fetch("./api/add",{
      method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
    body:JSON.stringify(data)})
     let res =await r.json()
     console.log(res);
     
    } 
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Helll yeahahaa 
      <button onClick={handleclick}>Api Click</button>
    </div>
  );

}