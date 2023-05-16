import styled from 'styled-components';

export const Input = styled.input.attrs((props) => ({
  ...props,
  type: 'text',
}))`
  padding: 0.25rem 1rem;

  background-color: #fff;

  color: ${({ theme }) => theme.color.text};

  border: 2px solid ${({ theme }) => theme.color.button.border};

  border-radius: 4px;

  font-family: Vollkorn, Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
`;
