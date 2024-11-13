import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const colorVariants = {
  primary: {
    base: ({ theme }) => theme.colors.primary,
    hover: "#991956",
    active: "#900F5D",
  },
  secondary: {
    base: ({ theme }) => theme.colors.warning,
    hover: "#cf8900",
    active: "#de9910",
  },
  outline: {
    base: ({ theme }) => theme.colors.lightGray3,
    hover: "#B5B6F2",
    active: "#B5B6F2",
  },
  danger: {
    base: ({ theme }) => theme.colors.error,
    hover: "#d0153e",
    active: "#DE4266",
  },
  success: {
    base: ({ theme }) => theme.colors.success,
    hover: "#0ba038",
    active: "#42CA76",
  },
};

const sizes = {
  small: {
    padding: "1.6rem 1.6rem",
    fontSize: "1.4rem",
  },
  medium: {
    padding: "1.6rem 3.6rem",
    fontSize: "1.6rem",
  },
  large: {
    padding: "1.6rem 6rem",
    fontSize: "1.8rem",
  },
};

const baseStyles = css`
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
    border: 1px solid ${({ variant }) =>
      variant === "outline" ? ({ theme }) => theme.colors.primary : ""};
  }

  ${({ variant, size }) => {
    const { base, hover, active } = colorVariants[variant];
    const { padding, fontSize } = sizes[size];
    return css`
      color: ${variant === "outline"
        ? ({ theme }) => theme.colors.primary
        : ({ theme }) => theme.colors.lightGray3};
      background-color: ${base};
      padding: ${padding};
      font-size: ${fontSize};
      &:hover:not(:disabled) {
        color: ${variant === "outline"
          ? ({ theme }) => theme.colors.lightGray3
          : ""};
        background-color: ${hover};
      }
      &:active:not(:disabled) {
        background-color: ${active};
        opacity: 0.8;
      }
    `;
  }}
`;

export const ButtonStyle = styled.button`
  ${baseStyles}
`;

export const RouterLink = styled(Link)`
  ${baseStyles}
  text-decoration: none;
  display: inline-block;
`;
