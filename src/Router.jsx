import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { ProductDetails } from "./pages/ProductPage/ProductDetails";
import { CategoryPage } from "./pages/CategoryPage";
import { OrderPage } from "./pages/OrderPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos">
          <Route index element={<ProductPage />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="/categorias" element={<CategoryPage />} />
        <Route path="/pedidos" element={<OrderPage />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

