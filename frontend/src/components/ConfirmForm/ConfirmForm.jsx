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

    useEffect(() => {
        if (code.indexOf(-1) == -1) {
            let s = code.join("");
            console.log(s);
            window.location.href = "http://localhost:3000/login/check/results/"

        }
    }, [code])

    function handleChange(e, index) {
        if (index == '1') {
            if (e.target.value.length <= 1) {
                setNum1(e.target.value) 
            }
            if (e.target.value.length == 1){
                setInputFocus2()
            }
            let newCode = code.slice()
            newCode[parseInt(index) - 1] = e.target.value;
            setCode(newCode)
            
        }
        else if (index == '2') {
            if (e.target.value.length <= 1) {
                setNum2(e.target.value)
            }
            if (e.target.value.length == 1){
                setInputFocus3()
            }
            let newCode = code.slice()
            newCode[parseInt(index) - 1] = e.target.value;
            setCode(newCode)

        }
        else if (index == '3') {
            if (e.target.value.length <= 1) {
                setNum3(e.target.value)
            }
            if (e.target.value.length == 1){
                setInputFocus4()
            }
            let newCode = code.slice()
            newCode[parseInt(index) - 1] = e.target.value;
            setCode(newCode)
             
        }
        else if (index == '4') {
            if (e.target.value.length <= 1) {
                setNum4(e.target.value)
            }
            if (e.target.value.length == 1){
                setInputFocus5()
            }
            let newCode = code.slice()
            newCode[parseInt(index) - 1] = e.target.value;
            setCode(newCode)
             
        }
        else if (index == '5') {
            if (e.target.value.length <= 1) {
                setNum5(e.target.value)
            }
            if (e.target.value.length == 1){
                setInputFocus6()
            }
            let newCode = code.slice()
            newCode[parseInt(index) - 1] = e.target.value;
            setCode(newCode)
             
        }
        else if (index == '6') {
            if (e.target.value.length <= 1) {
                setNum6(e.target.value)
            }
            let newCode = code.slice()
            newCode[parseInt(index) - 1] = e.target.value;
            setCode(newCode)

        }

         
    }


    return (
        <div className='screen-wrapper'>
            <div className='info'>
                <h2>Проверьте свой почтовый ящик</h2>
                <p>Мы отправили письмо c кодом подтверждения</p>
            </div>
            <div className='code-wrapper'>
                <input type="text" class="form-control num-item" value={num1} onChange={e => handleChange(e, '1')}/>
                <input ref={inputRef2} type="text" class="form-control num-item" value={num2} onChange={e => handleChange(e, '2')}/>
                <input ref={inputRef3} type="text" class="form-control num-item" value={num3} onChange={e => handleChange(e, '3')}/>
                <input ref={inputRef4} type="text" class="form-control num-item" value={num4} onChange={e => handleChange(e, '4')}/>
                <input ref={inputRef5} type="text" class="form-control num-item" value={num5} onChange={e => handleChange(e, '5')}/>
                <input ref={inputRef6} type="text" class="form-control num-item" value={num6} onChange={e => handleChange(e, '6')}/>
            </div>
            
        </div>
    );
}

export default ConfirmForm;