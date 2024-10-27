import React,{useState} from "react";

function App() {
  const [count,setCount]=useState(0)
 
  const reset=()=>{
    setCount(0)
  }

  return (
    <div className="bg-slate-900 flex flex-col gap-9 justify-center items-center h-screen">
      <h1 className="text-5xl lg:text-9xl text-zinc-200">{count}</h1>
      <div className="flex justify-between gap-3 ">
      <button onClick={()=>{count===-100?setCount(count): setCount(count-1)}} className="rounded-xl font-mono font-semibold bg-gray-100 text-slate-600 px-5 lg:px-7 py-2 text-2xl lg:text-5xl">-</button>
      <button onClick={reset} className=" font-semibold bg-gray-100 text-slate-600 px-5 lg:px-7 py-2 rounded text-2xl lg:text-5xl">Reset</button>
      <button onClick={()=>{count===100?setCount(count): setCount(count+1)}} className=" rounded-xl font-semibold bg-gray-100 text-slate-600 px-5 lg:px-7 py-2 text-2xl lg:text-5xl">+</button>
      
      
      </div>
    </div>
  );
}

export default App;
