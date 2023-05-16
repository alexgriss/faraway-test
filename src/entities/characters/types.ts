import { TCharacter } from '../character';

export type TCharacters = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TCharacter[];
};
