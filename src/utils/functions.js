const transformObjectToArray = (object) => Object.entries(object)
  .map(([key, value]) => {
    const obj = {id: key, ...value};
    return obj;
});

export default transformObjectToArray;
