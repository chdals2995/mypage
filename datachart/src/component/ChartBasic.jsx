// ChartBasic
// component 폴더 밑에 ChartBasic.jsx

import "chart.js/auto";
import { plugins, Tooltip } from "chart.js/auto";
import { Bar } from "react-chartjs-2"


export default function ChartBasic(){ // 키 값 바꾸면 안 됨
    const data = {
        labels:["1월", "2월", "3월"], // 각 데이터 이름
        datasets:[
            {
                label :"매출", // 범례 이름
                data : [100, 50, 200], // 막대 값 => 각 데이터 수와 맞아야 함
                backgroundColor: "rgba(99,102,241,0.5)", // 막대 디자인
                borderColor:"rgba(99,102,241,1)",
                borderWidth:1
            }
        ]
    };
    const options = { // 그래프에 추가적으로 꾸밀 것들 넣어줌
        responsive : true, //창의 크기에 따라 그래프가 자동으로 크기 조절
        maintainAspectRatio : true, // 그래프의 가로세로 비율 유지
        plugins: { // 차트 제목, 범례, 툴팁 등 설정
            title:{ display : true, text : "월별현황"}, // 제목
            legend:{display: true, position: "left"}, // 범례
            tooltip: {enable:true, mode:"index", intersect:false} // 그래프 정보 뜨는 거 intersect:false => 근처에 가도 뜨게 해줌
        },
        scales :{ //축 제목
            x:{
                title : {display : true, text:"월"}
            },
            y:{
                title : {display: true, text: "매출액(만원)"}
            }
        }
    };
    return(
        <>
            <Bar data={data} options={options}/>
        </>
    );
}

