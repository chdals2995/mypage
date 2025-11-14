// DoughnutChart2.jsx
// 반도넛 차트

import "chart.js/auto"
import { Doughnut } from "react-chartjs-2"

export default function DoughnutChart2(){

    const data = {
        labels: ["프로젝트 진행률"],
        datasets: [
            {
                label: "1팀",
                data: [15,85], //15%w 진행했고 85% 남았다면
                cutout:"20%",
                
            }
        ]
    };
    const options = {
        rotation: 0, // 시작 각도
        circumference : 90 // 시작 각도에서 몇도까지 그리나?
    }
    return(
        <>
            <Doughnut data={data} options={options}/>        
        </>
    );
}