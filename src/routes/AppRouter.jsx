import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CrudPages from '../pages/CrudPages'
import HomePages from '../pages/HomePages'
import SobrenosotrosPages from '../pages/SobrenosotrosPages';
import NuestroMenuPages from '../pages/NuestroMenuPages';

const AppRouter = () => {
    return (
        <Router basename='/restaurantapp'>
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/sobrenosotros" element={<SobrenosotrosPages/>} />
                <Route path="/crud" element={<CrudPages/>} /> 
                <Route path='/nuestromenu'element ={<NuestroMenuPages/>} />
            </Routes>
        </Router>

    )
}

export default AppRouter