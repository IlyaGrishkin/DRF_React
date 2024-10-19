import React from 'react';
import { useParams } from 'react-router-dom';


 

export function TestResults() {
    const answers = JSON.parse(localStorage.getItem("answers"));
    console.log(answers);
    const {testID} = useParams();
    const data = {} 
    data.testId = testID;
    data.answers = answers;
    localStorage.removeItem("testRunning");
    



    const res = '10/10';
    return (
        <div>
            <h1>{res}</h1>
            <a href={`/viewing/${testID}/1/`} onClick={() => localStorage.setItem("viewingData", JSON.stringify(data))}>Просмотр</a>
        </div>
    )
}


 