import { TCharacter, getCharacterIdFromUrl } from '@/entities/character';
import { CharacterCard, CharacterCardName, CharacterLink } from '@/features';
import { FlexWrapper } from '@/shared/layout';
import { Grid, Header } from '@/shared/ui';

interface ICharactersList {
  characters: TCharacter[];
}

export const CharactersList = ({ characters }: ICharactersList) => {
  if (characters.length === 0)
    return (
      <>
        <FlexWrapper ai="center" jc="center">
          <Header level="m">Nothing was found :(</Header>
        </FlexWrapper>
        <FlexWrapper ai="center" jc="center" style={{ marginTop: '1.5rem' }}>
          <Header level="m">Try to search again!</Header>
        </FlexWrapper>
      </>
    );

  return (
    <Grid columns={5} rows={2} gap={3}>
      {characters.map((character) => (
        <CharacterLink
          key={character.name}
          to={`characters/${getCharacterIdFromUrl(character.url)}`}
        >
          <CharacterCard character={character} />
          <CharacterCardName>{character.name}</CharacterCardName>
        </CharacterLink>
      ))}
    </Grid>
  );
};
