import { useEffect, useState } from 'react'
import './App.css'
import UserInputForm from './components/UserInputForm'
import Watch from './components/Watch'

function App() {
  const [state, setState] = useState<{title: string|undefined, offset: number|undefined}>()
  
  const handleSubmit = (newRow: {title: string, offset: number}) => {
    setState(newRow);
  }

  const handleDelete = () => {
    setState({title: undefined,offset: undefined});
  }

  function renderTime(offset?: number){
    if (typeof offset === "undefined") {
      console.log("undefined");
      return ;
    } 
    else {
      console.log("Часики тикают");
      let currOffset = new Date().getTimezoneOffset();
      let currentTime = new Date(new Date().getTime() + (offset+currOffset/60) * 3600000);
      
      let h = currentTime.getHours();
      let m = currentTime.getMinutes();
      let s = currentTime.getSeconds();
      
      if(h == 0){
        h = 12;
      }
      
      let myClock = document.getElementById('clockDisplay');
      myClock.textContent = h + ":" + m + ":" + s; 
    }
}
  
  useEffect(() => {
    let intervalId = setInterval(() => renderTime(state?.offset), 1000);

    return () => {
      console.log("goodbye");
      clearInterval(intervalId);
    }
  },[state]);

  return (
    <>
      <UserInputForm onSubmit={handleSubmit}/>
      <Watch title={state?.title} offset={state?.offset} onDelete={handleDelete}/>
      </>
  )
}

export default App;

