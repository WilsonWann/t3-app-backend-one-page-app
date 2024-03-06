import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const shoppingItemRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.shoppingItem.findMany();
    }),


  create: protectedProcedure
    .input(z.object({
      itemName: z.string().min(1),
      imageSrc: z.string().min(1),
      imageAlt: z.string().min(1),
      itemSubtitle: z.string().min(1),
      itemDescription: z.string().min(1),
      itemPrice: z.number().min(1),
      itemSpecialPrice: z.number().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.shoppingItem.create({
        data: {
          itemName: input.itemName,
          imageSrc: input.imageSrc,
          imageAlt: input.imageAlt,
          itemSubtitle: input.itemSubtitle,
          itemDescription: input.itemDescription,
          itemPrice: input.itemPrice,
          itemSpecialPrice: input.itemSpecialPrice,
        },
      });
    }),

  // getLatest: protectedProcedure.query(({ ctx }) => {
  //   return ctx.db.shoppingItem.findFirst({
  //     orderBy: { createdBy: "desc" },
  //   });
  // }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
