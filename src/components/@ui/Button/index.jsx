import { ButtonStyle, RouterLink } from "./style";

export function Button({ children, variant = "primary", size = "medium", to, ...props }) {
  // Se houver uma propriedade 'to', o botão se transformará em um link
  if (to) {
    return (
      <RouterLink to={to} variant={variant} size={size} {...props}>
        {children}
      </RouterLink>
    );
  }
  // Caso contrário, permanece como um botão normal
  return (
    <ButtonStyle variant={variant} size={size} {...props}>
      {children}
    </ButtonStyle>
  );
}
