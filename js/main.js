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
  const colors = ['dodgerblue' , 'orange' , 'purple'];
  //REFERENCIES
  const sectionIcons = $('.icons');
  const filter = $('#type');
  //STAMPA LE ICONE BASE
  // printIcons(icons , sectionIcons);

  //STAMP COLORED ICONS
  const coloredIcons = colorIcons(icons , colors);
  printIcons(coloredIcons , sectionIcons);

  //FILTER RESULTS
  const types = getType(icons);
  genOptions(types , filter);



}); //END DOCUMENT READY

//FUNCTIONS
//STAMP BASE ICONS
function printIcons(icons , sectionIcons) {
  icons.forEach( (icon) => {
    const {name , prefix , family , color} = icon;
    const html = `
    <div class="icon">
      <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
      <div class="type">${name}</div>
    </div>
    `;
    sectionIcons.append(html);
  });
};

//GET TYPE
function getType(icons) {
  const types = [];
  icons.forEach( (icon) => {
    if (! types.includes(icon.type)) {
      types.push(icon.type);
    };
  });
  return types;
};

//COLOR ICONS
function colorIcons(icons , colors) {
  const types = getType(icons);
  const coloredIcons = icons.map( (icon) => {
    const indexType = types.indexOf(icon.type);
    return {
      ...icon,
      color: colors[indexType],
    };
  });
  return coloredIcons;
};

//OPTIONS GENERATION
function genOptions(types , filter) {
  types.forEach( (type) =>{
    filter.append(`<option>${type}</option>`);
  });
};
