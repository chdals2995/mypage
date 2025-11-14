// ExpendInput.jsx

import { useState, useEffect } from "react"; 
import BarChartCard from "./BarChartCard";

export default function ExpendInput(){
    const [expendList, setExpendList] = useState([]);
    const [day, setDay] = useState("");
    const [detail, setDetail] = useState("");
    const [money, setMoney] = useState(0);
    const [showChart, setShowChart] = useState(false);
    const [chartData, setChartData] = useState(null); // 막대 차트 컴포넌트에 보낼 거

    useEffect( () => { // 저장한 거 불러오기
        const jsonData = localStorage.getItem("expendList"); 
        if(jsonData){
            setExpendList(JSON.parse(jsonData));
        }
    }, []);


    const save = () => {
        if(!money || !day){
            alert("금액과 날짜는 반드시 입력"); return;
        }

        const newList = {id: Date.now(),day, detail, money:Number(money)};
        setExpendList( p => {
            const newData = [...p, newList] ;
            // 금액, 내용, 날짜 로컬스토리지에 저장 = 입력한 데이터들 저장

            localStorage.setItem("expendList",JSON.stringify(newData)); // 제이슨의 상태로 저장해줌
            return newData;
        });

        setDay(""); setDetail(""); setMoney(0);

        console.log(expendList);
        console.log(newList);
    };

    // 차트 버튼을 클릭하면 동작할 함수
    const chartActive = () => {
        if(expendList.length === 0){
            alert("등록된 내역이 없습니다");
            return;
        }

        // 날짜별 지출 총금액을 막대 그래프로 표현
        // 데이터 가공
        // {"2025-11-09" : 150,000} 이 형태의 객체 만들어주기
        const totalByDate = expendList.reduce((a,c) => {  // a는 누적 값(역할) / c는 계산 해야되는 값 = 객체 불러오기
            if( !a[c.day] ) a[c.day] = 0; // 초기화
            a[c.day] += c.money;
            return a; // "2025-11-09" : 150,000
        },{}); // 객체로 만들어주려고 {} 추가
        // totalByDate = {"2025-11-09" : 150,000, "2025-11-10" : 40000}


        const labels = Object.keys(totalByDate).sort(); // 객체에서 뽑아내라 => object
        const data = labels.map( (d) => totalByDate[d]);
        const label = "날짜별 지출 합계";  // data의 제목

        setChartData({labels, data, label});

        setShowChart(true);
    };

    return(
        <>
            <div style={{width:500, background: "lightyellow", padding:20, display:"flex", flexDirection:"column", alignItems:"center"}}>
                금액<input type="text" value={money} onChange={(e) => setMoney(e.target.value)}/>
                내용<input type="text" value={detail} onChange={(e) => setDetail(e.target.value)}/>
                날짜<input type="date" value={day} onChange={(e) => setDay(e.target.value)}/>
                <button onClick={save} style={{border:"2px solid #ccc", width:100, height:50, marginTop:20}}>등록</button>
            </div>
            { //삼항 연산자
                showChart ?
                <BarChartCard labels={chartData.labels} data={chartData.data} label={chartData.label}/> : // 어떤 데이터를 받아도 차트를 만들 수 있게
                <button onClick={chartActive}
                style={{background:"pink", width:100, height:50}}>차트</button>
                
            }

        </>
    );
}


/* 

num = [1,2,3,4,5] 1부터 5까지 총합
num.reduce((a,c) => {
    a += c;
    return a;
    },0)
*/