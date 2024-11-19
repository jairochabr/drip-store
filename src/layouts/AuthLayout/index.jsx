import { Link, Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer";
import styled from "styled-components";
import { DripStore } from "@/components/icons";

const Header = styled.header`
  padding: 2.4rem 10rem;

  svg {
    height: 3rem;
    width: 17.3rem;
  }
`;

export function AuthLayout() {
  return (
    <>
      <Header>
        <Link to='/'>
          <DripStore />
        </Link>
      </Header>
      <Outlet />
      <Footer />
    </>
  );
}
