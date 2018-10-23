import layout from './layout';

export const render = (colors) => {

  return Object.keys(colors).map((cs) => {
    const colorSet = colors[cs];

    for (let colorName in colorSet) {
      colorSet[colorName] = colorSet[colorName].toLowerCase();
    }

    return Promise.resolve({
      name: `mintty.${cs}`,
      contents: Buffer.from(layout(colorSet, cs), 'utf8')
    });
  });
};
