import React from 'react';


function MainScreen(props) {
    return (
        <div className='video-bg'>
        <video autoPlay muted loop>
             <source src="https://media.istockphoto.com/id/1426439151/ru/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/%D0%B2%D0%B8%D0%B4-%D1%81-%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B0-%D0%BD%D0%B0-%D1%81%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BB%D0%B5%D1%81-%D0%B2%D0%B8%D0%B4-%D1%81-%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B0-%D0%BD%D0%B0-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D1%83-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9-%D0%BB%D0%B5%D1%81-%D0%B2%D0%B8%D0%B4-%D0%BD%D0%B0-%D0%B3%D0%BE%D1%80%D0%BD%D1%83%D1%8E-%D0%B2%D0%B5%D1%80%D1%88%D0%B8%D0%BD%D1%83.mp4?s=mp4-640x640-is&k=20&c=gaGQx6xQZ9Tmd8EBusoALs7JT0hhI0oNvy2-WsRUcfk=" type='video/mp4'/>
        </video>
        <div className='video-bg__content'>
            <div className='main-menu'>
               <div className='header-wrapper'>
                  <h2>Нажмите для начала теста</h2>
               </div>
                 
               <div className='icon-wrapper'>
                 <a href='/card/'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                       <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                       <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                     </svg>
                 </a>
                   
               </div>
                 
             </div>
        </div>
     </div>

    )
}

export default MainScreen;