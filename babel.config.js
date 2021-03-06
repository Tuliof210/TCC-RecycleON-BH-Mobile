module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      [
        'inline-dotenv',
        {
          path: './env/.env',
        },
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            assets: './src/assets',
            common: './src/common',
            config: './src/config',
            context: './src/context',
            helpers: './src/helpers',
            routes: './src/routes',
            screens: './src/screens',
            services: './src/services',
            src: '.',
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
