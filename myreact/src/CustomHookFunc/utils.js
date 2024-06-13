// utils.js
export const getElementSize = element => {
  if (!element) {
    return { width: 0, height: 0 };
  }
  const { width, height } = element.getBoundingClientRect();
  return { width, height };
};
