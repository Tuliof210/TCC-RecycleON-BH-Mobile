export const colors = new Map<string, string>([
  ['gray-line', '#CCCCCC'],
  ['gray-font', '#606060'],
  ['black-medium', '#263238'],
  ['green-dark', '#489C17'],
  ['green-light', '#87D459'],
  ['font-white', '#FEFEFE'],
  ['white', '#FFFFFF'],
]);

export const gradient = new Map<string, any>([
  ['fade-bg', { start: '#E6FFD7', end: colors.get('green-light') }],
  ['fade-btn', { start: colors.get('green-dark'), end: colors.get('green-light') }],
]);
