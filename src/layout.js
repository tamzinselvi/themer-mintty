function toRGBCSV(hex) {
  return `${parseInt(hex.substr(1, 2), 16)},${parseInt(hex.substr(3, 2), 16)},${parseInt(hex.substr(5, 2), 16)}`;
}

export default (colorSet, name) => {
  const colorMap = {
    ansi0: name === 'dark' ? colorSet.shade0 : colorSet.shade7,
    ansi1: colorSet.accent0,
    ansi2: colorSet.accent3,
    ansi3: colorSet.accent2,
    ansi4: colorSet.accent5,
    ansi5: colorSet.accent7,
    ansi6: colorSet.accent4,
    ansi7: name === 'dark' ? colorSet.shade6 : colorSet.shade1,
    ansi8: name === 'dark' ? colorSet.shade1 : colorSet.shade6,
    ansi9: colorSet.accent1,
    ansi10: colorSet.accent4,
    ansi11: colorSet.accent2,
    ansi12: colorSet.accent5,
    ansi13: colorSet.accent7,
    ansi14: colorSet.accent4,
    ansi15: name === 'dark' ? colorSet.shade7 : colorSet.shade0,
    background: colorSet.shade0,
    foreground: colorSet.shade7,
    cursor: colorSet.accent6,
    cursorText: colorSet.shade7,
    selection: colorSet.accent7,
    selectionText: colorSet.shade7,
    bold: colorSet.shade6,
  };

  return `
BackgroundColour=${toRGBCSV(colorMap.background)}
ForegroundColour=${toRGBCSV(colorMap.foreground)}
CursorColour=${toRGBCSV(colorMap.cursor)}
Black=${toRGBCSV(colorMap.ansi0)}
BoldBlack=${toRGBCSV(colorMap.ansi8)}
Red=${toRGBCSV(colorMap.ansi1)}
BoldRed=${toRGBCSV(colorMap.ansi9)}
Green=${toRGBCSV(colorMap.ansi2)}
BoldGreen=${toRGBCSV(colorMap.ansi10)}
Yellow=${toRGBCSV(colorMap.ansi3)}
BoldYellow=${toRGBCSV(colorMap.ansi11)}
Blue=${toRGBCSV(colorMap.ansi4)}
BoldBlue=${toRGBCSV(colorMap.ansi12)}
Magenta=${toRGBCSV(colorMap.ansi5)}
BoldMagenta=${toRGBCSV(colorMap.ansi13)}
Cyan=${toRGBCSV(colorMap.ansi6)}
BoldCyan=${toRGBCSV(colorMap.ansi14)}
White=${toRGBCSV(colorMap.ansi7)}
BoldWhite=${toRGBCSV(colorMap.ansi15)}
  `;
};
