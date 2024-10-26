import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { getAPIData, addAnswer, results, setObj } from '../../redux/reduxIndex';
import { useParams } from 'react-router-dom';
import './Card.css';



function AppCard(props) {
    const test = getAPIData();
    const [ id , setId] = useState(props.id);
    const [question, setQuestion] = useState(test.questions[id - 1]);
    const [variants, setVariants] = useState(question.variants);
    const [testID, setTestId] = useState(props.testID);
    const [questionsQuantity, setQuestionsQuantity] = useState(test.questions.length);
    const [answer, setAnswer] = useState({});
    

    if (!localStorage.getItem("answers")) {
        let answersStorage = {};

        for (let i = 1; i <= test.questions.length; i++) {
            answersStorage[i] = []
        }

        localStorage.setItem('answers', JSON.stringify(answersStorage));
    }

    const [active, setActive] = useState(JSON.parse(localStorage.getItem("answers"))[id] ? JSON.parse(localStorage.getItem("answers"))[id] : []);

    const testRunning = JSON.parse(localStorage.getItem("testRunning"));

    if (!testRunning) {
        localStorage.setItem("testRunning", JSON.stringify(testID));
    }
    else if (!(testRunning == testID)) {
        return (
            <div>
                <h1>Пошёл нахуй</h1>
            </div>
        )
    }
    else {
        function computeCardSize() {
            let width = window.screen.width;
            let computed = 27;
            if (width < 800 && width > 500) {
                computed = 55;
            }
            else if (width <= 500) {
                computed = 80;
            }
            return computed;
        }

        function changeActive(pos) {

            let newActive = active.slice();
            if (newActive.indexOf(pos) != -1) {
                newActive.splice(newActive.indexOf(pos), 1);
            }
            else {
                newActive.push(pos);
            }

            return newActive;
        }

        function addAnswer(questionId, activeList) {
            let ans = JSON.parse(localStorage.getItem('answers'));
            ans[questionId] = activeList;
            localStorage.setItem('answers', JSON.stringify(ans));
        }

         




        return (

            <Card className='my-3' style={{ width: computeCardSize() + "%" }}>

                <div>
                    <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=b8dd7d668d87124fe43353f8ddb108d5_l-5023807-images-thumbs&n=13" />
                    <Card.Body>
                        <Card.Title>{ }</Card.Title>
                        <Card.Text>
                            <h5>{id}. {question.text}</h5>
                        </Card.Text>
                    </Card.Body>

                    <ListGroup className="list-group-flush">
                        {variants.map((variant) => (
                            <ListGroup.Item>
                                <Button className="w-100"
                                    variant={active.indexOf(variant.id) != -1 ? "primary" : "outline-primary"}
                                    onClick={() => { setActive(changeActive(variant.id)) }}>{variant.text}
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <Card.Body style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={() => { addAnswer(question.localId, active); setObj(JSON.parse(localStorage.getItem("answers")))}} className="w-50" variant='outline-success' href={question.localId == questionsQuantity ? `/${testID}/results/` : `/card/${testID}/${question.localId ? parseInt(question.localId) + 1 : 1}/`}>Next</Button>
                    </Card.Body>
                </div>


            </Card>

        );


    }
}



export default AppCard;