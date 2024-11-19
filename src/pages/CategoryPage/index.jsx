import styled from "styled-components";

const CategoryContainer = styled.div`
  height: 50vh;
  background: #F9F8FE;
  display: flex;
  align-items: center;
  justify-content: center;
  
  h2 {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 3.2rem;
  }
`;

export function CategoryPage() {
  return (
    <CategoryContainer>
      <h2>Não existe á página de Categorias</h2>
    </CategoryContainer>
  );
}