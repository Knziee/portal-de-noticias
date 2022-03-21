import { BrowserRouter, Routes as RoutesWrapper, Route} from "react-router-dom";
import Home from "./pages/Home";
import Entreterimento from "./pages/Entreterimento";
import Esportes from "./pages/Esportes";
import FotosDoHomemAranha from "./pages/FotosDoHomemAranha";
import Tecnologia from "./pages/Tecnologia";

function Routes(){
    return <BrowserRouter>
    <RoutesWrapper>
        <Route path='/' element={<Home/>} />
        <Route path='/Entreterimento' element={<Entreterimento/>} />
        <Route path='/Esportes' element={<Esportes/>} />
        <Route path='/FotosDoHomemAranha' element={<FotosDoHomemAranha/>} />
        <Route path='/Tecnologia' element={<Tecnologia/>} />
    </RoutesWrapper>
    </BrowserRouter>
}

export default Routes