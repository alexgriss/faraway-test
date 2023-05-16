import { useEffect, useState } from 'react';

import { TCharacter } from '@/entities/character';
import { getCharacter } from '@/entities/character';

interface IUseCharacterPage {
  characterId: string;
}

export const useCharacterPage = ({ characterId }: IUseCharacterPage) => {
  const [character, setCharacter] = useState<TCharacter | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const characterFromLS = JSON.parse(localStorage.getItem(characterId) || '{}');

  const [birthYear, setBirthYear] = useState('');

  const onEditBirthYear = (value: string) => {
    setBirthYear(value);

    localStorage.setItem(
      characterId,
      JSON.stringify({
        ...characterFromLS,
        birthYear: value,
      })
    );
  };

  const [gender, setGender] = useState('');

  const onEditGender = (value: string) => {
    setGender(value);

    localStorage.setItem(
      characterId,
      JSON.stringify({
        ...characterFromLS,
        gender: value,
      })
    );
  };

  const [height, setHeight] = useState('');

  const onEditHeight = (value: string) => {
    setHeight(value);

    localStorage.setItem(
      characterId,
      JSON.stringify({
        ...characterFromLS,
        height: value,
      })
    );
  };

  const [mass, setMass] = useState('');

  const onEditMass = (value: string) => {
    setMass(value);

    localStorage.setItem(
      characterId,
      JSON.stringify({
        ...characterFromLS,
        mass: value,
      })
    );
  };

  useEffect(() => {
    setCharacter(null);

    setIsLoading(true);

    getCharacter(characterId).then((response: { data: TCharacter }) => {
      setCharacter(response.data);

      setBirthYear(characterFromLS.birthYear || response.data.birth_year);
      setGender(characterFromLS.gender || response.data.gender);
      setHeight(characterFromLS.height || response.data.height);
      setMass(characterFromLS.mass || response.data.mass);

      setIsLoading(false);
    });
  }, [
    characterId,
    characterFromLS.birthYear,
    characterFromLS.gender,
    characterFromLS.height,
    characterFromLS.mass,
  ]);

  return {
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
  };
};
