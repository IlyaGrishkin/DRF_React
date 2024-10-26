import { useParams } from "react-router-dom";
import TestNavbar from "../TestNavbar/TestNavbar";
import Timer from "../Timer/Timer";
import AppCard from "../Card/Card";
import { useEffect } from "react";
import { getTestData } from "../../redux/reduxIndex";




function TestScreen(props) {
    const {id} = useParams()
    const {testID} = useParams()

    
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
        localStorage.setItem("answers", JSON.stringify(data.answers))
        localStorage.setItem("testTime", JSON.stringify(data.startTime))
    }

    return (
        <div className='test-screen'>
            <div className='m-2 test-nav'>
                <TestNavbar viewing={false} />
            </div>
            <div className='my-card'>
                <AppCard id={id} testID={testID}/>
            </div>
            <Timer duration={200} onTimeout={() => handleTimeout(testID)}/>
        </div>
    )

}

export default TestScreen;