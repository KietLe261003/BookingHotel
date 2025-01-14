export const sanitizeUserData = (data) => {
    return Object.keys(data).reduce((acc, key) => {
      acc[key] = data[key] === null ? "" : data[key];
      return acc;
    }, {});
  };
  