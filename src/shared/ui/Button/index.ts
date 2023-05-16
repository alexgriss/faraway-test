import styled from 'styled-components';

interface IButton {
  disabled?: boolean;
}

export const Button = styled.button.attrs<IButton>((props) => props)`
  padding: 0.25rem 1rem;

  background-color: #fff;

  color: ${({ disabled, theme }) =>
    disabled ? theme.color.button.text : theme.color.button.border};

  border: 2px solid
    ${({ disabled, theme }) =>
      disabled ? theme.color.button.borderDisabled : theme.color.button.border};

  border-radius: 4px;

  font-family: Vollkorn, Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
`;
