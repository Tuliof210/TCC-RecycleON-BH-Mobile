module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            assets: './src/assets',
            constants: './src/constants',
            screens: './src/screens',
            styles: './src/styles',
          },
        },
      ],
    ],
  };
};

/**
 * para criar um caminho absoluto
 * => instalar module-resolver do babel
 * => retornar plugins com um root e alias (apelidos para caminhos)
    
 * => adicionar "baseUrl": "src" no tsconfig
 */
