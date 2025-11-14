// LineChart4.jsx

import "chart.js/auto"
import { Line } from "react-chartjs-2"

export default function LineChart4(){
    // 11월 평균 기온
    const avgTemp = [
        {day:"1일", tm: 13.6, maxtm:18.2, mintm : 10.3},
        {day:"2일", tm: 9.4, maxtm:14.2, mintm : 4.4},
        {day:"3일", tm: 7.0, maxtm:14.7, mintm : 0.0}, 
        {day:"4일", tm: 7.5, maxtm:18.2, mintm : 4.4},
        {day:"5일", tm: 10.4, maxtm:18.5, mintm : 4.9},
        {day:"6일", tm: 11.3, maxtm:20.3, mintm : 5.0},
        {day:"7일", tm: 13.3, maxtm:21.3, mintm : 7.6},
        {day:"8일", tm: 13.7, maxtm:18.7, mintm : 8.6},
        {day:"9일", tm: 13.7, maxtm:19.5, mintm : 10.2},
        {day:"10일", tm: 8.9, maxtm:15.0, mintm : 3.5},
        {day:"11일", tm: 8.2, maxtm:15.6, mintm : 2.4}
    ];
    const[labels, tmAvg, maxtm, mintm] = [
        avgTemp.map((d) => d.day),
        avgTemp.map((d) => d.tm),
        avgTemp.map((d) => d.maxtm),
        avgTemp.map((d) => d.mintm)
    ];

    
    const data = {
        labels,
        datasets :[
            {
                label:"11월 평균 기온",
                data:tmAvg,
                tension: 0.5 //값이 작을 수록 꺾은 선
            },
            {
                label:"최고점",
                data : maxtm,
                tension: 0.2
                
            },
            {
                label:"최저점",
                data : mintm,
                tension: 0.8
            }
        ]
    }
    return(
        <>
            <Line data={data}/>
        </>
    );
}