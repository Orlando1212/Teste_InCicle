import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './components/NavBar/header'
import Home from './Home/home'
import JsonDataDisplay from "./services";


function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
        <JsonDataDisplay/>
        </BrowserRouter>
    )
}


export default RoutesApp;