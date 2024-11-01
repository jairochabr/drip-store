import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const colorVariants = {
  primary: (theme) => ({
    base: theme.colors.primary,
    hover: "#991956",
    active: "#900F5D",
  }),
  secondary: (theme) => ({
    base: theme.colors.warning,
    hover: "#cf8900",
    active: "#de9910",
  }),
};

const sizes = {
  small: { padding: "6px 12px", fontSize: "14px" },
  medium: { padding: "8px 16px", fontSize: "16px" },
  large: { padding: "10px 20px", fontSize: "18px" },
};

const baseStyles = css`
  color: ${({ theme }) => theme.colors.lightGray3};
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 300ms ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variant, theme }) => {
    const colors = colorVariants[variant](theme);
    return css`
      background-color: ${colors.base};
      &:hover:not(:disabled) {
        background-color: ${colors.hover};
      }
      &:active:not(:disabled) {
        background-color: ${colors.active};
        opacity: 0.8;
      }
    `;
  }}

  ${({ size }) => {
    const { padding, fontSize } = sizes[size];
    return css`
      padding: ${padding};
      font-size: ${fontSize};
    `;
  }}
`;

export const ButtonStyle = styled.button`
  ${baseStyles}
`;

export const LinkStyle = styled(Link)`
  ${baseStyles}
  text-decoration: none;
  display: inline-block;
`;
