//  MixChart.jsx

import "chart.js/auto"
import { plugins } from "chart.js/auto";
import { Chart } from "react-chartjs-2"

export default function MixChart(){

    const data={
        labels : ["1월","2월","3월","4월","5월","6월"],
        datasets: [
            { // 선 그래프
                type : "line",
                label : "성장률 (%)",
                data : [5, 8, 6, 9, 11, 13],
                yAxisID : "y1"
            },
            { // 막대차트
                type : "bar",
                label : "매출액 (만원)",
                data : [320, 410, 380, 460, 520, 610],
                yAxisID : "y" // 주축 - 왼쪽
            }
        ]
    }

    const options ={
        plugins:{
            title: { // 차트 제목
                display:true,
                text: "월별 매출액 및 성장률",
                font: {size:20, weight: "bold"}
            },
            legend: { // 범례
                position: "bottom"
            },
            tooltip: { // 데이터를 보여주는 말풍선
                callbacks : {
                    label : (ctx) => { // ctx => datasets의 값을 가져옴
                        const label = ctx.dataset.label; // 마우스 오버된 곳의 label (dataset 하나에서 label을 찾아라)
                        const value = ctx.parsed.y; // 마우스 오버된 곳의 data
                        return ctx.dataset.type === "bar" ?
                        `${label} : ${value.toLocaleString()}만원` :  // 데이터의 말풍선에 단위 표시 
                        `${label} : ${value}%`
                    }
                }
            }
        },
        scales:{ // x축 설정 - x축, y축
            x:{
                title:{display: true, text:"월"}
            },
            y:{
                position:"left",
                title:{text:"매출액(만원)", display:true}
            },
            y1:{
                position:"right",
                grid:{drawOnChartArea:false},
                title:{text:"성장률(%)", display:true}, // 보조축 거를 지워야 함
                beginAtZero:true
            }
        }
    };
    
    return(
        <>
            <Chart data={data} type="bar" options={options}/> {/* 타입에는 주축으로 두는 거로 작성 */}
        </>
    );
}