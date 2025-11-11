// BarChart1.jsx

import "chart.js/auto"
import { Bar } from "react-chartjs-2"
import { useState } from "react";

export default function(){
    const score = [
        {name : "이순신", avg : 87},
        {name :"강감찬", avg:98},
        {name : "장보고", avg: 66},
        {name : "정도전", avg:99},
        {name : "정약용", avg:81},
        {name : "한석봉", avg:54}
    ];

    const data = {
        labels : score.map( (u) => u.name ),
        datasets : [
            {
                label :"기말성적",
                data : score.map( (u) => u.avg ),
                backgroundColor:"#FF0000"

            }
        ]
    };

    const options = {
        indexAxis:"y" // 인덱스 축 (가로)
    };


// 가로 막대와 세로 막대
// 가로 막대 : 항목 간의 크기 비교 강조 할 때 사용
            // 주로 부서별 인원수, 제품별 만족도, 순위, 이름 목록 등 데이터 표현 할 때 사용
            // 가로 막대를 화면에 표시하는 방향은 위 -> 아래 로 한다.
// 세로 막대 : 시간, 순서, 트렌드 강조
            // 월별 매출, 연도별 증가율, 시계열 데이터
            // 세로 막대를 화면에 표시하는 방향으 왼 -> 오 로 한다
    return(
        <>
            <Bar data={data} options={options}/>
        </>
    );
}