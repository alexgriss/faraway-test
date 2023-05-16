import { Link, useParams } from 'react-router-dom';

import { CharacterHead } from '@/features';
import { CenteredPageWrapper, PageWrapper } from '@/shared/layout';
import { Header, Spinner } from '@/shared/ui';

import { useCharacterPage } from './hooks';
import { CharacterPageHeader } from './styled';

export const CharacterPage = () => {
  const { characterId } = useParams();

  const {
    character,
    isLoading,
    birthYear,
    onEditBirthYear,
    gender,
    onEditGender,
    height,
    onEditHeight,
    mass,
    onEditMass,
  } = useCharacterPage({
    characterId: characterId || '',
  });

  if (isLoading || !character)
    return (
      <CenteredPageWrapper>
        <Spinner />
      </CenteredPageWrapper>
    );

  return (
    <PageWrapper>
      <CharacterPageHeader>
        <Link to="/">
          <Header level="m">←&nbsp;Back</Header>
        </Link>
        <Header level="xl" style={{ textAlign: 'center' }}>
          {character.name}
        </Header>
      </CharacterPageHeader>

      <CharacterHead
        character={character}
        birthYear={birthYear}
        onEditBirthYear={onEditBirthYear}
        gender={gender}
        onEditGender={onEditGender}
        height={height}
        onEditHeight={onEditHeight}
        mass={mass}
        onEditMass={onEditMass}
      />
    </PageWrapper>
  );
};
