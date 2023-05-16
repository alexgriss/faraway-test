const getCharacterColor = (color: string) => {
  switch (color) {
    case 'fair':
    case 'blond':
    case 'blonde':
    case 'light':
      return '#ffeb9c';
    case 'auburn':
      return '#71231d';
    case 'blue-gray':
      return '#6699cc';
    case 'dark':
      return '#000';
    case 'hazel':
      return '#c9c789';
    case 'green-tan':
      return '#a9be70';
    case 'metal':
      return '#aaa9ad';
    case 'pale':
      return '#F0DDD7';
    case 'brown mottle':
      return '#4e4e4e';
    case 'mottled green':
      return '#6d9b91';
    case 'unknown':
    case 'n/a':
    case 'none':
      return 'white';
    default:
      return color;
  }
};

export const getCharacterColors = (colors: string) =>
  colors.split(', ').length === 1
    ? getCharacterColor(colors)
    : `linear-gradient(to left, ${colors
        .split(', ')
        .map((color) => getCharacterColor(color))
        .join(', ')})`;

export const getEyeColors = (colors: string) =>
  `linear-gradient(to left, ${colors
    .split(', ')
    .map(
      (color, index) =>
        `${getCharacterColor(color)} ${
          index * (100 / colors.split(', ').length)
        }% ${(index + 1) * (100 / colors.split(', ').length)}%`
    )
    .join(', ')})`;

export const getBirthYear = (birthYear: string) => {
  switch (birthYear) {
    case 'none':
    case 'unknown':
      return 'Unknown';
    default:
      return birthYear;
  }
};

export const getGender = (gender: string) => {
  switch (gender) {
    case 'male':
      return 'M';
    case 'female':
      return 'F';
    case 'none':
    case 'unknown':
    case 'n/a':
      return 'Unknown';
    default:
      return gender;
  }
};

export const getHeight = (height: string) => {
  switch (height) {
    case 'none':
    case 'unknown':
      return '?';
    default:
      return height;
  }
};

export const getMass = (mass: string) => {
  switch (mass) {
    case 'none':
    case 'unknown':
      return '?';
    default:
      return mass;
  }
};

export const getCharacterIdFromUrl = (url: string) => {
  const urlMatches = url.slice(0, -1).match(/\d+$/);

  return urlMatches ? urlMatches[0] : '0';
};
