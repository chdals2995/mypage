//  LineChart2.jsx

import "chart.js/auto"
import { scales } from "chart.js/auto";
import { Line } from "react-chartjs-2"

export default function LineChart2(){
    const elecGas = [
        {month : "1월" , electric:280, gas:40},
        {month : "2월" , electric:230, gas:50},
        {month : "3월" , electric:245, gas:32},
        {month : "4월" , electric:250, gas:27},
        {month : "5월" , electric:280, gas:20},
        {month : "6월" , electric:300, gas:29},
        {month : "7월" , electric:320, gas:14},
    ];
    const [labels, electric, gas] = [
        elecGas.map( (d) => d.month),
        elecGas.map( (d) => d.electric),
        elecGas.map( (d) => d.gas)
    ];
    const data={
        labels,
        datasets:[
            {
                label : "전기 사용량(kwh)",
                data : electric,
                pointHoverRadius:15,
                yAxisID:"y"
            },
            {
                label : "가스 사용량(㎡)",
                data : gas,
                yAxisID:"y1"
            }
        ]
    }
    const options={
        scales:{
            y:{
                position:"left"
            },
            y1:{
                position:"right"
            }
        }
    }
    return(
        <>
            <Line data={data} options={options}/>
        </>
    );
}