const routeBasePath = str => {
  const splitStr = str.split('/');

  return splitStr.slice(1, 2);
};

export default routeBasePath;
