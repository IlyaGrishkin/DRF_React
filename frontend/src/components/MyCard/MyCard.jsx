import React from 'react';
import './MyCard.css';
import { NavLink } from 'react-router-dom';
 

function MyCard(props){
    return (
           <div className='card-wrapper'>
             <div className='img-wrapper'>
                <img src="https://uvao.mos.ru/upload/medialibrary/d29/pushkin_tropinin_1827_.jpg"/>
             </div>
             <div className='card-body'>
                 <div className='card-question'>
                    <h4>{props.question_number}. {props.question_text} <NavLink to={'/card/' + props.id}>Info</NavLink></h4>
                 </div>
                 <div className='answers'>
                     <button className='answer-button'>Pushkin</button>
                     
                 </div>

             </div>
           </div>
    
        
    )

}


export default MyCard;