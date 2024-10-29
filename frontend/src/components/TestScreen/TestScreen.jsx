import { useParams } from "react-router-dom";
import TestNavbar from "../TestNavbar/TestNavbar";
import Timer from "../Timer/Timer";
import AppCard from "../Card/Card";
import { useEffect, useState } from "react";
import axios from 'axios'
import { getTestData } from "../../redux/reduxIndex";




function TestScreen(props) {
    const {id} = useParams()
    const {testID} = useParams()
    const [data, setData] = useState([])
    const [question, setQuestion] = useState([])
    const [answers, setAnswers] = useState([])
    const [questionQuantity, setQuestionsQuantity] = useState([])

    useEffect(() => {
        const apiUrl = `http://localhost:8000/api/v1/tests/${testID}`;
        axios.get(apiUrl).then((resp) => {
          const serverData = resp.data;
          setData(serverData.data);
          setQuestion(serverData.data.items[id - 1])
          setAnswers(serverData.data.items[id - 1].answers)
          setQuestionsQuantity(serverData.data.items.length)
        });
      }, [setData]);

    console.log(question)
    console.log(answers)
    

    
    function handleTimeout(testId) {
        const ans = JSON.parse(localStorage.getItem("answers"))
        const viewData = {"testID": testID, "answers": ans}
        localStorage.removeItem("testTime")
        localStorage.setItem("viewingData",  JSON.stringify(viewData))
        localStorage.removeItem("answers")
        localStorage.removeItem("testRunning");
        window.location.href = `http://localhost:3000/${testId}/results/`
        
    }  

    if (!localStorage.getItem("answers") || !localStorage.getItem("testTime")) {
        let data = getTestData()
        localStorage.setItem("testTime", JSON.stringify(data.startTime))
    }

    return (
        <div className='test-screen'>
            <div className='m-2 test-nav'>
                <TestNavbar viewing={false} />
            </div>
            <div className='my-card'>
               <AppCard id={id} testID={testID} question={question} questionsQuantity={questionQuantity} variants={answers}/>
            </div>
            <Timer duration={20000} onTimeout={() => handleTimeout(testID)}/>
        </div>
    )

}

export default TestScreen;

//