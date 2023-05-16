import { axios } from '@/shared';

const getCharactersUrl = () => 'people/';

interface IGetCharacters {
  page?: number;
  search?: string;
}

export const getCharacters = ({ page, search }: IGetCharacters) =>
  axios.get(getCharactersUrl(), {
    params: {
      page,
      search,
    },
  });
