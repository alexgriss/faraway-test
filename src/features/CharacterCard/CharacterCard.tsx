import { FlexWrapper } from '@/shared/layout';
import {
  TCharacter,
  getBirthYear,
  getGender,
  getHeight,
  getMass,
} from '@/entities/character';

import {
  CardBody,
  CardBodyContent,
  CardEyes,
  CardFooter,
  CardBeard,
  CardHeader,
  CardLabel,
  Wrapper,
} from './styled';

interface ICharacterCard {
  character: TCharacter;
}

export const CharacterCard = ({ character }: ICharacterCard) => {
  return (
    <Wrapper>
      <CardHeader $hairColor={character.hair_color}>
        <CardEyes $eyeColor={character.eye_color} />
        <CardBeard />
      </CardHeader>
      <CardBody $skinColor={character.skin_color}>
        <CardBodyContent>
          <FlexWrapper ai="center" jc="center">
            <CardLabel>Birth&nbsp;year:&nbsp;</CardLabel>
            {getBirthYear(character.birth_year)}
          </FlexWrapper>
          <FlexWrapper ai="center" jc="center">
            <CardLabel>Gender:&nbsp;</CardLabel>
            {getGender(character.gender)}
          </FlexWrapper>
          <FlexWrapper ai="center" jc="center">
            <CardLabel>Height:&nbsp;</CardLabel>
            {getHeight(character.height)}&nbsp;m
          </FlexWrapper>
          <FlexWrapper ai="center" jc="center">
            <CardLabel>Mass:&nbsp;</CardLabel>
            {getMass(character.mass)}&nbsp;kg
          </FlexWrapper>
        </CardBodyContent>
        <CardFooter />
      </CardBody>
    </Wrapper>
  );
};
