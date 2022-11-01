import {Routes, Route} from 'react-router-dom';
import './style/App.scss'
import Entrance from "./components/Entrance";
import Registration from "./components/Registration";
import Home from "./components/Home";



const App = () => {


    return (
        <div className="body">

            <Routes>
                <Route path={"/"} element={<Entrance/>}/>
                <Route path={"/Registration"} element={<Registration/>}/>
                <Route path={"/Home"} element={<Home/>}/>
            </Routes>
        </div>
    )

}

export default App;
