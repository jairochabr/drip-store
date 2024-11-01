import { ButtonStyle, LinkStyle } from "./style";

export function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick = () => {},
  type = "button",
  to,
  ...props
}) {
  if (to) {
    return (
      <LinkStyle
        to={to}
        variant={variant}
        size={size}
        onClick={onClick}
        {...props}
      >
        {children}
      </LinkStyle>
    );
  }
  return (
    <ButtonStyle
      type={type}
      disabled={disabled}
      variant={variant}
      size={size}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
}
