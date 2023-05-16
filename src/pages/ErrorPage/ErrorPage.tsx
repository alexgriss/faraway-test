import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { CenteredPageWrapper } from '@/shared/layout';
import { Header } from '@/shared/ui';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <CenteredPageWrapper>
      <Header level="xl">Ooops!</Header>
      <p style={{ marginTop: '20px' }}>Sorry, an error occured :(</p>
      <p style={{ marginTop: '20px' }}>
        <i>
          {isRouteErrorResponse(error)
            ? error.statusText
            : (error as Error).message}
        </i>
      </p>
      <Link to="/" style={{ marginTop: '20px' }}>
        To the Main Page
      </Link>
    </CenteredPageWrapper>
  );
};
