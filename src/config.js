export const getHeader = function() {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'bearer ' + tokenData.token,
  };

  return headers;
};

export const url = 'https://nbte.forum.org.ng/api/';
