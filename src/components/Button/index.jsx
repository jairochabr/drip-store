import { ButtonStyle } from "./style";

export function Button({ children, variant = "primary", size, onClick= () => {}, ...props }) {
  return (
    <ButtonStyle variant={variant} onClick={onClick} {...props}>
      {children}
    </ButtonStyle>
  );
}
