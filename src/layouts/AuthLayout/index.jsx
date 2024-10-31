import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer";

export function AuthLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
