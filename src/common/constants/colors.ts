const colorsMap = new Map<string, string>([
  ['black', '#000000'],
  ['black-medium', '#263238'],
  ['gray-border', '#E1E1E1'],
  ['gray-font', '#606060'],
  ['gray-font-dark', '#2E3A59'],
  ['gray-font-light', '#999999'],
  ['gray-line', '#CCCCCC'],
  ['green-dark', '#489C17'],
  ['green-light', '#87D459'],
  ['red', '#D93030'],
  ['white', '#FFFFFF'],
  ['white-dark', '#F8F8F8'],
  ['white-font', '#FEFEFE'],
]);
export const colors = (key: string) => {
  const valueToReturn = colorsMap.get(key);
  return valueToReturn ?? '#FFFFFF';
};

//===============================================================================

const gradientMap = new Map<string, { start: string; end: string }>([
  ['fade-green-bg', { start: '#E6FFD7', end: colors('green-light') }],
  ['fade-green-btn', { start: colors('green-dark'), end: colors('green-light') }],
  ['fade-gray-btn', { start: '#F2F2F2', end: colors('white') }],
]);
export const gradient = (key: string) => {
  const valueToReturn = gradientMap.get(key);
  return valueToReturn ?? { start: '#FFFFFF', end: '#FFFFFF' };
};
