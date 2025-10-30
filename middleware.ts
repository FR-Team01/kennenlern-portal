export { default } from "next-auth/middleware";
export const config = { matcher: ["/discover", "/chat/:path*"] };
