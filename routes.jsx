import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./src/Pages/Home/Home";

export const AppRoutes = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* ao dercorer do projeto vou criar as outras rotas */}
                </Routes>
            </BrowserRouter>
        </>
     );
}