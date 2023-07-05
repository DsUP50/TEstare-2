const path = require('path');

module.exports = {
  entry: './src/index.js', // Fișierul de intrare pentru aplicație
  output: {
    filename: 'bundle.js', // Fișierul de ieșire generat de Webpack
    path: path.resolve(__dirname, 'dist') // Directorul în care va fi generat fișierul de ieșire
  },
  // Alte setări și module pentru Webpack
};

