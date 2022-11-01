import {useStoreWithInitializer} from "../store/reduxHook";
import "../style/Home.scss"
import React from "react";
import {IoMdExit} from "react-icons/io"
import {MdAppRegistration} from "react-icons/md"
import {ImHome ,ImAndroid} from "react-icons/im"

const Home = () => {
    const {formRegister} = useStoreWithInitializer(({todos}) => todos, () => {
    })
    return (
        <div className="bodyH">
            <header  className="header">
                <a className="headerBut" href="/">Выйти</a>
                <div className="custom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </header>
            <div className="home">
                <p>Логин:{formRegister.login}</p>
                <p>Имя:{formRegister.user}</p>
                <p>Фамилия:{formRegister.surname}</p>
                <p>Дата Рождения:{formRegister.birthdate}</p>
                <p>Пол:{formRegister.pol}</p>

            </div>
            <footer>
                <ul><li><a href="/"><IoMdExit className="logo"/>Вход</a></li></ul>
                <ul><li><a href="/Registration" ><MdAppRegistration className="logo"/>Регистрация</a></li></ul>
                <ul><li><a href="/Home"><ImHome className="logo"/>Главная</a></li></ul>
                <ul><li><a href="#"><ImAndroid className="logo"/>Ничего</a></li></ul>
            </footer>
        </div>
    )
}
export default Home;