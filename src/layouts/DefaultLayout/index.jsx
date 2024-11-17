import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { CartModal } from "@/components/CartModal";
import { Footer } from "@/components/Footer";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <CartModal />
      <Outlet />
      <Footer />
    </>
  );
}
