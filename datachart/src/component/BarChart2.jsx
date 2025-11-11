// BarChart2.jsx

import "chart.js/auto"
import { Bar } from 'react-chartjs-2'

export default function BarChart2(){
    const score = [
        {name: "강호현", score1:78 , score2: 98},
        {name: "김정원", score1:65 , score2: 88},
        {name: "박승찬", score1:31 , score2: 22},
        {name: "이예준", score1:90 , score2: 87},
        {name: "이윤서", score1:67 , score2: 83}
    ];

    const [ names, score1, score2] = [
        score.map( (u) => u.name),
        score.map( (u) => u.score1),
        score.map( (u) => u.score2)
    ];
    // const names = ;
    // const score1 = ;
    // const score2 = ;

    const data = {
        labels: names,
        datasets : [
            {
                label:"중간고사",
                data : score1,
                yAxisID:"y"   // 보조축 만들기 1. y축 아이디 이름 주기
            },
            {
                label:"기말고사",
                data : score2,
                yAxisID:"y1"
            }
        ]
    }
    const options = {
        scales:{  //축 작업
            y:{
                position:"left"     // 2. 보조축 위치 지정
            },
            y1:{
                position:"right",
                grid : {drawOnChartArea:false} // 격자 중복 방지
            }
        }
    }

    return(
        <>
            <Bar data={data} options={options}/>
        </>
    );
}