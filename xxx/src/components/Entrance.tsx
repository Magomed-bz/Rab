import MyButton from './UI/button/MyButton';
import {Input} from "./UI/input/Input";
import "../style/Entrance.scss"
import "../style/App.scss"
import {useStoreWithInitializer} from "../store/reduxHook";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const Entrance = () => {
    const initialForm = {
        login: "",
        password: "",
    }
    const [stringValues, setStringValues] = useState(initialForm)
    const {formRegister,} = useStoreWithInitializer(({todos}) => todos, () => {
    })
    const navigate = useNavigate()
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStringValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }


    const onClick = (e: any) => {
        if (stringValues.password === undefined|| stringValues.login === undefined) {
            alert("Заполните форму")
        } else if (formRegister.password === stringValues.password && formRegister.login === stringValues.login) {
            alert('good')
            navigate('/Home', {replace: true})
        } else {
            alert('fuck bitch')
        }
        e.preventDefault();
    }
    return (
        <div className="Entrance">
            <header className="header">
                <div className="custom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </header>
            <form action="" >
                <div className="formBlock">
                    <Input
                        onChange={onChange}
                        name={'login'}
                        value={stringValues.login}
                        type="text"
                    >Введите логин</Input>
                </div>
                <div className="formBlock">
                    <Input
                        onChange={onChange}
                        name={'password'}
                        value={stringValues.password}
                        type="password"
                    >Введите пароль</Input>
                </div>
                <div className="formBlock">
                    <a href="/Registration"><p>Зарегистрироваться</p></a>
                </div>
                <MyButton  onClick={onClick}>Enter</MyButton>
            </form>
        </div>
    );
}
export default Entrance;