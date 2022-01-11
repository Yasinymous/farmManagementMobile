// main server canli sunucu
//export const baseUrl = "";

//local server
export const baseUrl = 'http://localhost:4500';

export const defaultIcons = {
  userIcon: 'https://image.flaticon.com/icons/png/128/847/847969.png',
};

export const general = {
  getPermAll: baseUrl + '/general/get/perm/all',

  getNotifyFirstAll: baseUrl + '/company/get/notify/first/all',
  getNotifyAll: baseUrl + '/company/get/notify/get/all',
  readNotify: baseUrl + '/company/read/notify',

  getPaymentType: baseUrl + '/general/get/payment/type/all',
  getPriceType: baseUrl + '/general/get/price/type/all',
  getAirPorts: baseUrl + '/general/get/airport/all',

  getCountry: baseUrl + '/general/get/country/all',
  getCity: baseUrl + '/general/get/city/all',

  getExchangeRate: baseUrl + '/general/get/exhange/rate/all',
};

export const auth = {
  signIn: baseUrl + '/users/sign/in',
  signOut: baseUrl + '/users/sign/out',
};

export const animals = {
  getAll: baseUrl + '/animals/get/all',
  getCountAll: baseUrl + '/animals/get/count/all',
};
export const teams = {
  getAll: baseUrl + '/teams/get/all',
  getSearchAll: baseUrl + '/teams/get/search/all',

  add: baseUrl + '/teams/add',
  edit: baseUrl + '/teams/edit',
  changeLeader: baseUrl + '/teams/set/team/leader',

  passive: baseUrl + '/teams/passive',
  active: baseUrl + '/teams/active',

  getMembers: baseUrl + '/teams/get/team/member/all',
  getSearchMembers: baseUrl + '/teams/get/team/member/search/all',
  addMember: baseUrl + '/teams/add/team/member',
  removeTeam: baseUrl + '/teams/remove/team/member',
};
