
'use client'; 
import Image from "next/image";
import Button from "@/component/button/Button";


export default function Home() {

  function handleClick (nama: string){
    alert(`${nama} button clicked`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
    <Button variant="primary" onClick={() => handleClick('Primary')}>Primary Button</Button>
    <Button variant="success" onClick={() => handleClick('Success')}>Success Button</Button>
    <Button variant="warning" onClick={() => handleClick('Warning')}>Warning Button</Button>
    <Button variant="danger" onClick={() => handleClick('Danger')}>Danger Button</Button>
  </div>
  );
}
