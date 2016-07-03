const routeRootName = str => {
  let newStr = str;

  if (str.indexOf('.') !== -1) newStr = str.substring(0, str.indexOf('.'));

  const splitStr = newStr.toLowerCase().split(' ');

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(' ');
};

export default routeRootName;
