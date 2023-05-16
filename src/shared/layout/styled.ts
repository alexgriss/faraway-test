import { styled } from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1200px;

  margin: 2rem auto;
`;

export const PageContent = styled.div`
  margin-top: 2rem;
`;

export const CenteredPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

interface IFlexWrapper {
  jc:
    | 'flex-end'
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch';
  ai:
    | 'flex-end'
    | 'flex-start'
    | 'baseline'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch';
}

export const FlexWrapper = styled.div<IFlexWrapper>`
  display: flex;
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};
`;
