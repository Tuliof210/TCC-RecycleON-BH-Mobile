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
            components: './src/components',
            context: './src/context',
            helpers: './src/helpers',
            routes: './src/routes',
            screens: './src/screens',
            services: './src/services',
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
