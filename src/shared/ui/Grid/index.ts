import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface IGrid {
  columns: number;
  rows: number;
  gap: number;
}

export const Grid = styled.div.attrs<IGrid>((props) => props)`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  grid-column-gap: ${({ gap }) => gap}rem;
  grid-row-gap: ${({ gap }) => gap}rem;
`;
