import React from 'react';
import Detail from "./components/Detail";
import Question from "./components/Question";
import Review from "./components/Review";
import { useState } from 'react';

const ContentsContainer = ({ listName }) => {
    if (listName === "detail") {
        return <Detail />
    } else if (listName === "qa") {
        return <Question />
    } else if (listName === "review") {
        return <Review />
    }
}

const NavBar = () => {
    const [listName, setListName] = useState("detail");


    function checkId(event) {
        setListName(event.target.id)
    }

    return (
        <>
            <nav>
                <ul>
                    <li id='detail' style={listName === "detail" ? { color: "red" } : { color: "black" }} onClick={checkId}>상세정보</li>
                    <li id='qa' style={listName === "qa" ? { color: "red" } : { color: "black" }} onClick={checkId}>Q&A</li>
                    <li id='review' style={listName === "review" ? { color: "red" } : { color: "black" }} onClick={checkId}>Review</li>
                </ul>
            </nav >
            <ContentsContainer listName={listName} />
        </>
    )
}


export default function App4() {
    return (
        // && : 첫번째 falsy 값을 반환하거나 혹은 마지막 truthy 값을 반환합니다.
        true && 1 && false && <NavBar /> //false

        // || : 첫번째 truthy 값을 반환하거나 혹은 마지막 falsy 값을 반환합니다.
        // false || 1 || false || <NavBar /> // NavBar

    )
}
         // 값이 있으면 truthy
// true && <h1>hello world</h1> -> h1 출력
// &&는  앞에가 false니끼 뒤에 볼 필요 없음 때문에 그냥 앞에꺼 출력
// false && <h1>hello world</h1> -> false 출력

// true || <h1>hello world</h1> -> true 출력
// false || <h1>hello world</h1> -> h1 출력

// // 예시
// newMail.length > 0 && <h1>읽지 않은 메일이 있습니다.</h1> -> h1 출력