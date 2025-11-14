// DoughnutChart3.jsx
// 데이터 가공하기

import "chart.js/auto"
import { Doughnut } from "react-chartjs-2"

export default function DoughnutChart3(){
    const rawData = [
        {dept: "개발팀" , gender:"여", count:10, year:2024},
        {dept: "디자인팀", gender: "여", count: 20, year:2024 },
        {dept: "영업팀", gender: "여", count: 15, year:2024 },
        {dept: "개발팀", gender: "남", count: 13, year:2024 },
        {dept: "영업팀", gender: "남", count: 6, year:2024 },
        {dept: "디자인팀", gender: "여", count: 12, year:2024 },
        {dept: "디자인팀", gender: "남", count: 28, year:2025 },
        {dept: "개발팀", gender: "여", count: 22, year:2025 },
        {dept: "디자인팀", gender: "여", count: 10, year:2025 },
        {dept: "영업팀", gender: "남", count: 34, year:2025 },
        {dept: "개발팀", gender: "남", count: 7, year:2025 },
        {dept: "영업팀", gender: "여", count: 19, year:2025 },
    ];

    // 회사의 년도별 남여 성비
    const GENDERLABEL=["남", "여"];

    const genderByYear={
        2025 : [0,0] , 2024 : [0,0]   //앞쪽이 남자 뒤쪽이 여자
    };

    rawData.map((r)=> {
        genderByYear[r.year.toString()][GENDERLABEL.indexOf(r.gender)]+=r.count;

        // rawData의 year는 숫자값. genderByYear의 키 2025,2024 = 문자값
        // 그래서 genderByYear[r.year.toString()] 문자열로 바꿔 불러줌
        // GENDERLABEL로 인덱스 번호 추출. += count 더해주기 
    });

    const data = {
        labels: GENDERLABEL,
        datasets:[
            { // 먼저 쓴 데이터가 바깥 원
                label:"2025년",
                data: genderByYear["2025"],
                cutout: "50%"
            },
            { // 나중 쓴 애가 안쪽 원
                label:"2024년",
                data: genderByYear["2024"],
                radius: "80%"
            }
        ]
    }

    return(
        <>
            <Doughnut data={data}/>
        </>
    );
}