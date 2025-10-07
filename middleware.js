// middleware.js
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 👇 Define public routes here
const isPublicRoute = createRouteMatcher([
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/about",
    "/contact",
]);

export default clerkMiddleware((auth, req) => {
    // Protect all non-public routes
    if (!isPublicRoute(req)) {
        auth().protect();
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and static files
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
