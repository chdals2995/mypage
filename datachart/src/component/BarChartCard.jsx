// BarChartCard.jsx
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { plugins } from "chart.js/auto";
// 데이터 단위 표시 위한 작업
import ChartDataLabels from 'chartjs-plugin-datalabels'
ChartJS.register(ChartDataLabels);

export default function BarChartCard({labels, data, label}){ // (props) => props.expendList   // 어떤 데이터를 받아도 차트를 만들 수 있게
    const Chartdata ={
        labels,
        datasets:[
            {
                label,
                data
            }
        ]
    }

    const options={
        plugins:{
            datalabels:{
                display: true, // 화면 표시
                color:"222", // 데이터 글자색
                anchor:"end", // 막대 기준으로  데이터의 위치 기준점 ("end" > 막대의 끝)
                // start, center, auto
                align:"end", // 앵커 기준으로 막대 위쪽에 표시
                // start, center, end, auto, right, left, top, bottom
                font:{size:20, weight:"bold"},
                formatter: (v) => {
                    return v.toLocaleString() + "원";
                }
            }
        },
        scales:{
            y:{ // 축 범위 
                min: (data.reduce((a,c) => a+c ) / data.length )- Math.min(...data), // data.reduce((a,c) => a+c ) = 총합
                max: Math.max(...data)+(data.reduce((a,c) => a+c ) / data.length )- Math.min(...data),

                ticks:{ // 증가값 : 범위가 있어야 설정 가능
                    stepSize: 2000,
                    callback:(val) => val.toLocaleString() + "원",  // 축에 단위 설정
                }

            }
        }
    }

    return(
        <>
            <Bar data={Chartdata} options={options}/>
        </>
    );
}