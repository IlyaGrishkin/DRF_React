import React from 'react';
import './TestNavbar.css'
import {Button} from 'react-bootstrap';
import { getAPIData} from '../../redux/reduxIndex';
import { useParams } from 'react-router-dom';


 

function TestNavbar(props){
    const test = getAPIData(); 
    const questions_quantity = test.questions.length;
    const {id} = useParams();
    const {testID} = useParams();
    let arr = [];
    if (props.viewing) {
        for (let i = 1; i <= questions_quantity; i++){
            arr.push(<div> <Button variant={id == i ? "primary" : "outline-primary"} href={`/viewing/${testID}/${i}/`} className='my-1'>{i}</Button> </div>);
        }
    } 
    else {
        for (let i = 1; i <= questions_quantity; i++){
            arr.push(<div> <Button variant={id == i ? "primary" : "outline-primary"} href={`/card/${testID}/${i}/`} className='my-1'>{i}</Button> </div>);
        }
    }
    

    return (
        <div>
           {arr.map((item) => (
            <div className='test-nav-wrapper'>
              {item}
            </div>
           ))}
        </div>
        
        
    )
}

export default TestNavbar;