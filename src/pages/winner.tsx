import "tailwindcss/tailwind.css";
import { Layout } from "../components/layout/layout";
import {Section21} from "../components/page02/section21"
import {Text21} from "../components/page02/text21" 
import { useEffect, useState } from "react";
import { List } from "../components/elements/list";

export default function Winner() {

  const [text, setText]=useState('Green Pass')
  const [date, setDate]=useState('18/07/23')
  const [list, setList]=useState([])
   
  const handleAdd=(e:any)=>{
    e.preventDefault()
    taskList()
    console.log('clicou')
    console.log('Email:'+ text, 'Data:' + date)
    setText('')
    setDate('- / -/ -')
    const show=document.getElementById('show')
    if(show?.classList.contains('flex')){
     show.classList.add('hidden')
    }
   }

   const taskList=()=>{
      const List:any=[...list]
      List.push({texto:text, data:date, code:Math.random()*10000})
     setList(List)
   }                                                                                                                                                                                                                                                                                                                                                                                                                                  
   useEffect(()=>{
    taskList(

     )
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
   
   const handleChange=()=>{
         const show=document.getElementById('show')
         if(show?.classList.contains('hidden')){
          show.classList.toggle('hidden')
         }
   }
  return (
    <>
      
        <Layout >
        <div className="relative w-screen  min-h-[80vh]">
          <Section21/>
          <div className="bg-black w-screen min-h-[100vh] flex flex-col justify-center items-center">
        
           <List className="z-20 absolute max-h-[162vh] overflow-auto top-[120px] flex flex-col justify-center sm:w-2/5 w-[340px]"
              number={0}
              title="Winner"
              Logo=" justify-center text-[1.6rem]"
        
            >
              {
               list.map((list:any)=>((
                <Text21 onChange={handleChange} key={list.code} code={list.code} textAdd={1} text={list.texto} date={list.data}/>
              )))
              }
         </List>
          </div>
        
          <div className=" absolute top-[150px] w-screen gap-3 flex hidden itens-center justify-center" id='show'>
          <button onClick={handleAdd} className=" z-30 border-[5px] text-white hover:bg-green-800 py-1 rounded-xl hover:bg-green-800 w-[5rem] sm:w-[8rem] bg-green-600">
            Add
          </button>
            <div className="  hover:bg-green-800 sm:w-[50%] w-[60%] flex flex-col rounded-xl items-center justify-center bg-green-500 relative z-30">
                <form className=" flex flex-col gap-2 text-white rounded-2xl items-center justify-center bg-white w-[90%] h-[9rem] my-[1rem]">
                  <input className="bg-gray-500 px-2 py-2 rounded-xl w-[85%]" placeholder="Nome" type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
                  <input className="bg-gray-500 px-2 py-2 rounded-xl w-[85%]" placeholder="Data" type="date" value={date} onChange={(e)=>{setDate(e.target.value)}} />
                </form>
              </div>
          </div>
      </div>
      </Layout>
    </>
  );
}
