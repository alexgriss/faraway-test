import { axios } from '@/shared';

const getCharacterUrl = (id: string) => `people/${id}/`;

export const getCharacter = (id: string) => axios.get(getCharacterUrl(id));
