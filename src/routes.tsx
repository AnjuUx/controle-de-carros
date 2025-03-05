import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Cars from "./pages/Cars";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={ <Home /> }/>
                    <Route path="carros" element={ <Cars /> } />
                    <Route path="*" element={ <PageNotFound /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes