import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./src/Pages/Home/Home";
import { LoginPage } from "./src/pages/LoginPage";

export const AppRoutes = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* ao dercorer do projeto vou criar as outras rotas */}
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </>
     );
}