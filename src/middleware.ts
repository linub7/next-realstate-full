import { authMiddleware } from '@clerk/nextjs';

// if you didn't write anything in authMiddleware -> clerk suppose all the routes is private
export default authMiddleware({
  publicRoutes: ['/sign-in', '/sign-up'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
