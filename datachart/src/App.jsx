import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChartBasic from './component/ChartBasic';
import BarChart1 from './component/BarChart1';
import BarChart2 from './component/BarChart2';
import BarChart3 from './component/BarChart3';

function App() {
  const [ show, setShow ] = useState(null);
  const btClass = (name) => `px-4 py-2 rounded-lg text-white font-bold transition cursor-pointer
  ${show === name ? "bg-blue-600" : "bg-blue-400 hover: bg-blue-500"}`;

  return (
    <>
      <div className='flex gap-3'>
          <button onClick={ () => setShow("A") } className={btClass("A")}>차트 둘러보기</button>
          <button onClick={ () => setShow("B") } className={btClass("B")}>막대그래프</button>
          <button onClick={ () => setShow("C") } className={btClass("C")}>막대그래프2</button>
          <button onClick={ () => setShow("D") } className={btClass("D")}>막대그래프3</button>
      </div>

      <div className='mt-8'>
        { show === "A" && <ChartBasic/>}
        { show === "B" && <BarChart1/>}
        { show === "C" && <BarChart2/>}
        { show === "D" && <BarChart3/>}
      </div>
    </>
  )
}

export default App
