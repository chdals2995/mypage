import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChartBasic from './component/ChartBasic';
import BarChart1 from './component/BarChart1';
import BarChart2 from './component/BarChart2';
import BarChart3 from './component/BarChart3';
import LineChart1 from './component/LineChart1';
import LineChart2 from './component/LineChart2';
import LineChart3 from './component/LineChart3';
import LineChart4 from './component/LineChart4';
import DougnutChart1 from './component/DougnutChart1';
import PiChart from './component/PiChart';
import DoughnutChart2 from './component/DoughnutChart2';
import DoughnutChart3 from './component/DoughnutChart3';
import MixChart from './component/MixChart';
import ExpendInput from './component/ExpendInput';

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
          <button onClick={ () => setShow("D") } className={btClass("D")}>누적 막대</button>
          <button onClick={ () => setShow("E") } className={btClass("E")}>기본 라인</button>
          <button onClick={ () => setShow("F") } className={btClass("F")}>다중 라인</button>
          <button onClick={ () => setShow("G") } className={btClass("G")}>계단형 라인</button>
          <button onClick={ () => setShow("H") } className={btClass("H")}>곡선 라인</button>
          <button onClick={ () => setShow("I") } className={btClass("I")}>도넛 그래프</button>
          <button onClick={ () => setShow("J") } className={btClass("J")}>원형 그래프</button>
          <button onClick={ () => setShow("K") } className={btClass("K")}>반원형 그래프</button>
          <button onClick={ () => setShow("L") } className={btClass("L")}>이중 도넛 그래프</button>
          <button onClick={ () => setShow("M") } className={btClass("M")}>혼합 그래프</button>
          <button onClick={ () => setShow("N") } className={btClass("N")}>지출내역</button>
      </div>

      <div className='mt-8'>
        { show === "A" && <ChartBasic/>}
        { show === "B" && <BarChart1/>}
        { show === "C" && <BarChart2/>}
        { show === "D" && <BarChart3/>}
        { show === "E" && <LineChart1/>}
        { show === "F" && <LineChart2/>}
        { show === "G" && <LineChart3/>}
        { show === "H" && <LineChart4/>}
        { show === "I" && <DougnutChart1/>}
        { show === "J" && <PiChart/>}
        { show === "K" && <DoughnutChart2/>}
        { show === "L" && <DoughnutChart3/>}
        { show === "M" && <MixChart/>}
        { show === "N" && <ExpendInput/>}
      </div>
    </>
  )
}

export default App
