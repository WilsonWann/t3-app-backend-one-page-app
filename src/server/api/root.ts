// import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { shoppingItemRouter } from "./routers/shoppingItem";
import { recipientRouter } from "./routers/recipient";
import { logisticsRouter } from "./routers/logistics";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  shoppingItem: shoppingItemRouter,
  recipient: recipientRouter,
  logistics: logisticsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
