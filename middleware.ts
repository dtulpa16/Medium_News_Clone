import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({ publicRoutes: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)",'/search((?!.+\\.[\\w]+$|_next).*)'] });

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
