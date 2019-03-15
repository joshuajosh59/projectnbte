export const authGuard = (to, from, next) => {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
  if (!tokenData) {
    next('/login');
  } else {
    next();
  }
};
