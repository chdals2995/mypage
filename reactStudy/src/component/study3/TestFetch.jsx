// TestFetch.jsx
import { useEffect, useState } from "react";


export default function TestFetch(){ // 패치는 비동기 동작으로 해야 함 = 외부 데이터 읽는 시간이랑 실행시간이 다르면 실패하기 때문에
    const [users, setUsers] = useState([]);
    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users") // 제이슨으로 넘겨 줄 수 있는 주소(데이터)가 들어있어야 함
            .then( (response) => response.json() ) // 위의 값을 매개변수 respone에 받음(대문자x) res로 써야 함  json으로 변환
            .then( (data) => setUsers(data)); // 위의 값을 매개변수 data로 받음

        },[] // fetch로 데이터 받아올 때 빈 배열 무조건! > 안 하면 계속 무한으로 값 가져옴.
    );
    return(
        <>
            <h2>데이터 출력</h2>
            <ul>
                {
                    users.map( (u) => (
                        <li>{u.name} : {u.email}</li>
                    )
                    )
                }
            </ul>

        </>
    );
}

/* // map을 이용하지 않은 버전

import { useEffect, useState } from "react";

export default function TestFetch() {

  const [city, setCity] = useState("");

  useEffect(() => {
    fetch("https://api.zippopotam.us/us/90210")
      .then((res) => res.json())
      .then((data) => {
        setCity(data.places[0]["place name"]);
      });
  }, []);

  return (
    <>
      <h2>도시 이름</h2>
      <p>{city}</p>
    </>
  );
}


// map을 이용한 버전 

import { useState, useEffect } from 'react';

export default function PlaceFetch() {
  const [places, setPlaces] = useState([]); // 배열로 저장!

  useEffect(() => {
    fetch("https://api.zippopotam.us/us/90210")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data.places); // 배열 그대로 저장
      });
  }, []);

  return (
    <>
      <h2>도시 이름 출력 (map 버전)</h2>
      <ul>
        {places.map((p, i) => (
            // i = index 적용
          <li key={i}>
            도시 이름 : {p["place name"]}
          </li>
        ))}
      </ul>
    </>
  );
} */


