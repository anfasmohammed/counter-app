import React,{useState} from "react";

function App() {
  const [count,setCount]=useState(0)
 
  const reset=()=>{
    setCount(0)
  }

  return (
    <div className="bg-slate-900 flex flex-col gap-9 justify-center items-center h-screen mt-9">
      <h1 className="text-9xl text-zinc-200">{count}</h1>
      <div className="flex justify-between gap-3 ">
      <button onClick={()=>{count===0?setCount(count): setCount(count-1)}} className="rounded-xl font-mono font-semibold bg-gray-100 text-slate-600 px-7 py-2 text-5xl">-</button>
      <button onClick={reset} className=" font-semibold bg-gray-100 text-slate-600 px-7 py-2 rounded text-5xl">Reset</button>
      <button onClick={()=>{count===10?setCount(count): setCount(count+1)}} className=" rounded-xl font-semibold bg-gray-100 text-slate-600 px-7 py-2 text-5xl">+</button>
      
      
      </div>
    </div>
  );
}

export default App;
