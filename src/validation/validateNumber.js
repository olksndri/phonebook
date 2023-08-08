export const validateNumber = number => {
  const testNumber = /^[^a-zA-Z]{5,}$/;
  return testNumber.test(number);
};
