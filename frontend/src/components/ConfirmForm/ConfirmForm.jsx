import React, { useEffect, useRef, useState } from 'react';
import './ConfirmForm.css';


function ConfirmForm() {
    const useFocus = () => {
        const htmlElRef = useRef(null)
        const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}
    
        return [ htmlElRef, setFocus ] 
    }

    const [inputRef2, setInputFocus2] = useFocus()
    const [inputRef3, setInputFocus3] = useFocus()
    const [inputRef4, setInputFocus4] = useFocus()
    const [inputRef5, setInputFocus5] = useFocus()
    const [inputRef6, setInputFocus6] = useFocus()

    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [num3, setNum3] = useState("")
    const [num4, setNum4] = useState("")
    const [num5, setNum5] = useState("")
    const [num6, setNum6] = useState("")

    const [code, setCode] = useState([-1, -1, -1, -1, -1, -1])

    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const userEmail = JSON.parse(localStorage.getItem("userEmail"))
    

    useEffect(() => {
        if (code.indexOf(-1) == -1) {
            let s = code.join("");
            window.location.href = "http://localhost:3000/login/check/results/"

        }
    }, [code])

    function handleChange(e, index) {
        if (index == '1') {
            let flag = false;
            if (e.target.value.length <= 1) {
                if (digits.indexOf(e.target.value) != -1) {
                    setNum1(e.target.value) 
                    flag = true
                } 
                
            }
            if (flag){
                setInputFocus2()
            }
            if (flag) {
                let newCode = code.slice()
                newCode[parseInt(index) - 1] = e.target.value;
                setCode(newCode)
            }
            
        }
        else if (index == '2') {
            let flag = false;
            if (e.target.value.length <= 1) {
                if (digits.indexOf(e.target.value) != -1) {
                    setNum2(e.target.value)
                    flag = true;
                }
                
            }
            if (flag){
                setInputFocus3()
            }
            if (flag) {
                let newCode = code.slice()
                newCode[parseInt(index) - 1] = e.target.value;
                setCode(newCode)
            }

        }
        else if (index == '3') {
            let flag = false;
            if (e.target.value.length <= 1) {
                if (digits.indexOf(e.target.value) != -1) {
                    setNum3(e.target.value)
                    flag = true;
                }
            }
            if (flag){
                setInputFocus4()
            }
            if (flag) {
                let newCode = code.slice()
                newCode[parseInt(index) - 1] = e.target.value;
                setCode(newCode)
            }
             
        }
        else if (index == '4') {
            let flag = false;
            if (e.target.value.length <= 1) {
                if (digits.indexOf(e.target.value) != -1) {
                    setNum4(e.target.value)
                    flag = true;
                }
            }
            if (flag){
                setInputFocus5()
            }
            if (flag) {
                let newCode = code.slice()
                newCode[parseInt(index) - 1] = e.target.value;
                setCode(newCode)
            }
             
        }
        else if (index == '5') {
            let flag = false;
            if (e.target.value.length <= 1) {
                if (digits.indexOf(e.target.value) != -1) {
                    setNum5(e.target.value)
                    flag = true;
                }
            }
            if (flag){
                setInputFocus6()
            }
            if (flag) {
                let newCode = code.slice()
                newCode[parseInt(index) - 1] = e.target.value;
                setCode(newCode)
            }
             
        }
        else if (index == '6') {
            let flag = false;
            if (e.target.value.length <= 1) {
                if (digits.indexOf(e.target.value) != -1) {
                    setNum6(e.target.value)
                    flag = true

                }
            }
            if (flag) {
                let newCode = code.slice()
                newCode[parseInt(index) - 1] = e.target.value;
                setCode(newCode)
            }
            

        }

         
    }

    function handleKey(e, index) {
        if (e.code == "Backspace") {
            if (index == "1") {
                setNum1("")
            }
            else if (index == "2") {
                setNum2("")
            }
            else if (index == "3") {
                setNum3("")
            }
            else if (index == "4") {
                setNum4("")
            }
            else if (index == "5") {
                setNum5("")
            }
            else if (index == "6") {
                setNum6("")
            }
        }
    }


    return (
        <div className='screen-wrapper'>
            <div className='info'>
                <h2>Проверьте свой почтовый ящик</h2>
                <p>Мы отправили письмо c кодом подтверждения на адрес {userEmail}</p>
            </div>
            <div className='code-wrapper'>
                <input type="text" class="form-control num-item" value={num1} onChange={e => handleChange(e, '1')} onKeyDown={e => handleKey(e, '1')} pattern="\d+"/>
                <input ref={inputRef2} type="text" class="form-control num-item" value={num2} onChange={e => handleChange(e, '2')} onKeyDown={e => handleKey(e, '2')} pattern="\d+"/>
                <input ref={inputRef3} type="text" class="form-control num-item" value={num3} onChange={e => handleChange(e, '3')} onKeyDown={e => handleKey(e, '3')} pattern="\d+"/>
                <input ref={inputRef4} type="text" class="form-control num-item" value={num4} onChange={e => handleChange(e, '4')} onKeyDown={e => handleKey(e, '4')} pattern="\d+"/>
                <input ref={inputRef5} type="text" class="form-control num-item" value={num5} onChange={e => handleChange(e, '5')} onKeyDown={e => handleKey(e, '5')} pattern="\d+"/>
                <input ref={inputRef6} type="text" class="form-control num-item" value={num6} onChange={e => handleChange(e, '6')} onKeyDown={e => handleKey(e, '6')} pattern="\d+"/>
            </div>
            
        </div>
    );
}

export default ConfirmForm;