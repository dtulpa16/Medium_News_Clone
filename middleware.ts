import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: (req : any) => true,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
