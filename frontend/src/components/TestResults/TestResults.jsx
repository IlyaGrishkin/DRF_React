import React from 'react';
import { useParams } from 'react-router-dom';


 

export function TestResults() {
    const {testID} = useParams();
    const res = '10/10';
    if (!localStorage.getItem("viewingData")) {
        localStorage.setItem("viewingData", JSON.stringify({answers: JSON.parse(localStorage.getItem("answers"))}))
    }
    localStorage.removeItem("answers")
    return (
        <div>
            <h1>{res}</h1>
            <a href={`/viewing/${testID}/1/`}>Просмотр</a>
        </div>
    )
}


 