const incrementUser = () => {
  return {
    type: 'increment',
  };
};
const decrementUser = () => {
  return {
    type: 'decrement',
  };
};
export {incrementUser, decrementUser};
