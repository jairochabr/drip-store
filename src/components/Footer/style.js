import styled from "styled-components";

export const FooterStyle = styled.footer`
  padding: 2.5rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.white};
  font-family: Arial, Helvetica, sans-serif;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between; /* Ajuste para distribuir igualmente */
  align-items: flex-start;
  margin-left: 20rem;
  margin-top: 4rem;
`;

export const FooterLogo = styled.div`
  max-width: 50rem;
  margin-right: 18rem;

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    margin-top: 3rem;
    text-align: left;
    line-height: 2.5rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 3rem;
  transition: color 0.3s;

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FooterInfoSections = styled.div`
  display: flex;
  justify-content: start; /* Alinha as colunas no início */
  gap: 0.5rem; /* Espaço muito pequeno entre as colunas */
  width: 100%;
  flex-wrap: wrap; /* Garante que não quebre em telas pequenas */
`;

export const InfoSection = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  gap: 1.375rem;

  h4 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
    margin-bottom: 0.375rem;
    text-align: left;
    margin-left: 2rem;
  }

  ul {
    margin-top: 1rem;
    list-style-type: none;
    padding: 0;
    text-align: left;
  }

  ul li {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    margin: 1rem;
    padding: 1rem;
  }
`;

export const Divider = styled.hr`
  width: 80%;
  border: none;
  border-top: 0.0625rem solid ${({ theme }) => theme.colors.darkGray2};
  margin: 1.5rem auto; /* Isso centraliza a linha */
`;

export const Copyright = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
