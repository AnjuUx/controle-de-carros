import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import SelectCar from './pages/SelectCar'
import Usage from './pages/Usage'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path='carros' element={<SelectCar />} />
                    <Route path='utilizando' element={<Usage />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
