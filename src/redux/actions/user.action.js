const signInUser = data => {
  return {
    type: 'signIn',
    userData: JSON.parse(data).userData,
    employeeData: JSON.parse(data).employeeData,
  };
};
const signOutUser = () => {
  return {
    type: 'signOut',
  };
};
export {signInUser, signOutUser};
