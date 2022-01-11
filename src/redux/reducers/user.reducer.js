import {combineReducers} from 'redux';

const initialState = {
  isAuth: false,
  userData: {
    firstName: '',
    lastName: '',
    phone: '',
    username: '',
    email: '',
    image: '',
    token: '',
  },
  employeeData: {
    block: {
      id: '',
      title: '',
    },
    farm: {
      id: '',
      name: '',
    },
    role: {
      id: '',
      title: '',
      permission: '',
    },
  },
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'signIn': {
      return {
        ...state,
        isAuth: true,
        userData: {
          firstName: action.userData.firstName,
          lastName: action.userData.lastName,
          phone: action.userData.phone,
          username: action.userData.username,
          email: action.userData.email,
          image: action.userData.image,
          token: action.userData.token,
        },
        employeeData: {
          block: action.employeeData.block,
          farm: action.employeeData.farm,
          role: action.employeeData.role,
        },
      };
    }
    case 'signOut': {
      return {
        ...state,
        isAuth: false,
        userData: {
          firstName: '',
          lastName: '',
          phone: '',
          username: '',
          email: '',
          image: '',
          token: '',
        },
        employeeData: {
          block: {
            id: '',
            title: '',
          },
          farm: {
            id: '',
            name: '',
          },
          role: {
            id: '',
            title: '',
            permission: '',
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};
export default combineReducers({
  user: userReducer,
});
