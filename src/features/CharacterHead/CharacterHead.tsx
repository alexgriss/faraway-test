import {
  TCharacter,
  getBirthYear,
  getGender,
  getHeight,
  getMass,
} from '@/entities/character';

import { CharacterHeadValue } from './ui';
import {
  CharacterHeadWrapper,
  Head,
  HeadBeard,
  HeadContent,
  HeadEyes,
  HeadTip,
} from './styled';

interface ICharacterHead {
  character: TCharacter;
  birthYear: string;
  onEditBirthYear: (value: string) => void;
  gender: string;
  onEditGender: (value: string) => void;
  height: string;
  onEditHeight: (value: string) => void;
  mass: string;
  onEditMass: (value: string) => void;
}

export const CharacterHead = ({
  character,
  birthYear,
  onEditBirthYear,
  gender,
  onEditGender,
  height,
  onEditHeight,
  mass,
  onEditMass,
}: ICharacterHead) => {
  return (
    <CharacterHeadWrapper>
      <Head $hairColor={character.hair_color}>
        <HeadEyes $eyeColor={character.eye_color} />
        <HeadBeard />
        <HeadContent>
          <CharacterHeadValue
            title="Birth&nbsp;year:&nbsp;"
            value={getBirthYear(birthYear)}
            onEditHandler={onEditBirthYear}
          />
          <CharacterHeadValue
            title="Gender:&nbsp;"
            value={getGender(gender)}
            onEditHandler={onEditGender}
          />
          <CharacterHeadValue
            title="Height:&nbsp;"
            postfix="m"
            value={getHeight(height)}
            onEditHandler={onEditHeight}
          />
          <CharacterHeadValue
            title="Mass:&nbsp;"
            postfix="kg"
            value={getMass(mass)}
            onEditHandler={onEditMass}
          />
          <HeadTip>Click on the character properties to change them</HeadTip>
        </HeadContent>
      </Head>
    </CharacterHeadWrapper>
  );
};
