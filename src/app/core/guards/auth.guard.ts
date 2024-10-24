import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  let token = localStorage.getItem('token');

  if (token && state.url != '/login') {
    return true;
  } else if (token && state.url == '/login') {
    router.navigate(['app']);
    return false;
  } else if (!token && state.url != '/login') {
    router.navigate(['auth']);
    return true;
  }
  return true;
};