// LineChart3.jsx 관리실 전화하기

import "chart.js/auto"
import { Line } from "react-chartjs-2"

export default function LineChart3(){
    const pricingPlan = [
        {week: "1주", level:1},
        {week: "2주", level:1},
        {week: "3주", level:2},
        {week: "4주", level:2},
        {week: "5주", level:3},
        {week: "6주", level:3},
        {week: "7주", level:3},
        {week: "8주", level:2}
    ];
    const [labels, level] = [
        pricingPlan.map( (d) => d.week),
        pricingPlan.map( (d) => d.level)
    ]
    const data={
        labels,
        datasets:[
            {
                label : "단계별 요금",
                data : level,
                stepped:true //계단형으로 바꿔주기
            }
        ]
    };
    return(
        <>
            <Line data={data}/>
        </>
    );
}