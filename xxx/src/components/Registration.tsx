import MyButton from './UI/button/MyButton';
import {Input} from "./UI/input/Input";
import React, {useState} from 'react';
import {setRegister} from '../store/todoSlice';
import store from "../store/store";
import {useNavigate} from "react-router-dom";
import "../style/Registration.scss"
import {InputDate} from "./UI/input/InputDate";
import {InputRadio} from "./UI/input/InputRadio";
import ReCAPTCHA from  "react-google-recaptcha";

const Registration = () => {
    const dataForm = {
        login: "",
        password: "",
        password1: "",
        user: "",
        surname: "",
        birthdate: "",
        pol:"",
    }

    const [valuesForm, setValuesForm] = useState(dataForm)
    const navigate = useNavigate()

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim().replace(/ +/g, ' ')
        setValuesForm(prev => ({...prev, [e.target.name]: value}));
    }

    const onClick = (e:any) => {
        if (valuesForm.user.length === 0 || valuesForm.surname.length === 0 || valuesForm.login.length === 0 || valuesForm.password.length === 0 || valuesForm.pol.length ===0 || valuesForm.birthdate.length === 0) {
            alert("Заполните форму")
        } else if (valuesForm.password != valuesForm.password1) {
            alert("Пароли не совпадают")
        } else if(!valueCaptcha){
            alert("Подтвердите что вы не робот")
        }else {
            store.dispatch(setRegister(valuesForm))
            navigate('/', {replace: true})
        }
        e.preventDefault();
    }
    const [valueCaptcha, setValueCaptcha]=useState(false)
    function Change () {
        setValueCaptcha(true)
    }

    return (
        <div className={'Registration'}>
            <header className="header">
                <a className="headerBut" href="/">Войти</a>
                <div className="custom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </header>
            <form action="" autoComplete="off">
                <div className="formInput">
                    <Input
                        type="text"
                        name={'surname'}
                        value={valuesForm.surname}
                        onChange={onChange}
>Введите фамилию</Input>
                </div>
                <div className="formInput">
                    <Input
                    type="text"
                    name={'user'}
                    value={valuesForm.user}
                    onChange={onChange}
>Введите Имя</Input>
                </div>
                <div className="formInput">
                    <Input
                    type="text"
                    name={'login'}
                    value={valuesForm.login}
                    onChange={onChange}
>Видите Логин</Input>
                </div>
                <div className="formInput">
                    <Input
                    type="text"
                    name={'password'}
                    value={valuesForm.password}
                    onChange={onChange}
>Введите пароль</Input>
                </div>
                <div className="formInput">
                    <Input
                    type="text"
                    name={'password1'}
                    value={valuesForm.password1}
                    onChange={onChange}
>Повторите пароль</Input>
                </div>
                <div className="formInput">
                    <InputDate
                        type="date"
                        name={'birthdate'}
                        value={valuesForm.birthdate}
                        onChange={onChange}
                    >Возраст</InputDate>
                    <div className="formInputRadio">
                        <span>Пол</span>
                        <div>
                            <InputRadio type="radio" name={'pol'} onChange={onChange} value="Женский">Женщина</InputRadio>
                            <InputRadio type="radio" name={'pol'} onChange={onChange} value="Мужской">Мужчина</InputRadio>
                        </div>
                    </div>
                </div>
                <div className="formInputRadio">
                    <ReCAPTCHA
                        sitekey= "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={Change}
                    />
                </div >
                <MyButton onClick={onClick}>Enter</MyButton>
            </form>

        </div>
    )
}
export default Registration;