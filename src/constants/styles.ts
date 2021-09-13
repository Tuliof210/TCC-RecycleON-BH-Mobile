export const colors = new Map<string, string>([
  ['black-medium', '#263238'],
  ['gray-font', '#606060'],
  ['gray-font-dark', '#2E3A59'],
  ['gray-line', '#CCCCCC'],
  ['green-dark', '#489C17'],
  ['green-light', '#87D459'],
  ['white', '#FFFFFF'],
  ['white-font', '#FEFEFE'],
]);

export const gradient = new Map<string, any>([
  ['fade-green-bg', { start: '#E6FFD7', end: colors.get('green-light') }],
  ['fade-green-btn', { start: colors.get('green-dark'), end: colors.get('green-light') }],
  ['fade-gray-btn', { start: '#F2F2F2', end: colors.get('white') }],
]);
