export const colors = new Map<string, string>([
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

export const gradient = new Map<string, any>([
  ['fade-green-bg', { start: '#E6FFD7', end: colors.get('green-light') }],
  ['fade-green-btn', { start: colors.get('green-dark'), end: colors.get('green-light') }],
  ['fade-gray-btn', { start: '#F2F2F2', end: colors.get('white') }],
]);