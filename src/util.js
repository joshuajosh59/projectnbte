export const authGuard = (to, from, next) => {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
  if (!tokenData) {
    next('/admin/login');
  } else {
    next();
  }
};

export const loginAuth = (to, from, next) => {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
  if (tokenData) {
    next('/admin/institution');
  } else {
    next();
  }
};
