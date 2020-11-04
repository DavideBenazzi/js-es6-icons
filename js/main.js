$(document).ready( function () {
  // Icon set
  const icons = [
      {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
  ];
  const color = ['dodgerblue' , 'orange' , 'purple'];
  //REFERENCIES
  const fonticons = $('.icons');

  //PRINT ON SCREEN VERSIONE BASE
  // printIcons(icons , fonticons);

  //PRINT ON SCREEN COLOR
  const coloredIcons = colorIcons(icons , color);
  printIcons(coloredIcons , fonticons);

  //FILTER BY TYPE











  //UTILITY
  //STAMPA BASE
  function printIcons(icons , fonticons) {
    return icons.forEach( (icon) => {
      const {name, prefix, family, color} = icon;
      const html = `
        <div class="icon">
          <i class="${family} ${prefix}${name}" style="color :${color}"></i>
          <div class="type">
            ${name}
          </div>
        </div>`;
      fonticons.append(html);
    });
  };

  //STAMPA COLORI
  function colorIcons(icons , color) {
    //GET TYPES
    const types = getType(icons);
    //ASSIGN COLOR
    const coloredIcons = icons.map( (icon) => {
      const indexType = types.indexOf(icon.type);
      return {
        ...icon,
        color: color[indexType],
      };
    });
    return coloredIcons;
  };

  //GET TYPES
  function getType(icons) {
    const types = [];
    icons.forEach( (icon) => {
      if (! types.includes(icon.type) ) {
        types.push(icon.type);
      };
    });
    return types;
  };





}); //END DOCUMENT READY
