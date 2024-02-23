import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const logisticsRouter = createTRPCRouter({

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.logisticsMethod.findMany();
    }),

  getById: publicProcedure
    .input(z.object({
      id: z.string().min(1),
    }))
    .query(async ({ ctx, input }) => {
      return ctx.db.logisticsMethod.findUnique({
        where: {
          id: input.id
        }
      });
    }),

  create: protectedProcedure
    .input(z.object({
      type: z.string().min(1),
      mode: z.string().min(1),
      name: z.string().email(),
      freight: z.number().min(1),
      payment: z.number().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.logisticsMethod.create({
        data: {
          logisticsType: input.name,
          logisticsMode: input.mode,
          logisticsName: input.name,
          freight: input.freight,
          payment: input.payment,
        }
      });
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string().min(1),
      type: z.string().min(1),
      mode: z.string().min(1),
      name: z.string().email(),
      freight: z.number().min(1),
      payment: z.number().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.logisticsMethod.update({
        where: {
          id: input.id
        },
        data: {
          logisticsType: input.name,
          logisticsMode: input.mode,
          logisticsName: input.name,
          freight: input.freight,
          payment: input.payment,
        }
      });
    }),

  remove: protectedProcedure
    .input(z.object({
      id: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.logisticsMethod.delete({
        where: {
          id: input.id
        },
      });
    }),

});
