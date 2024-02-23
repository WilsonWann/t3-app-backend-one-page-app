import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const recipientRouter = createTRPCRouter({

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.recipient.findMany();
    }),

  getById: publicProcedure
    .input(z.object({
      id: z.string().min(1),
    }))
    .query(async ({ ctx, input }) => {
      return ctx.db.recipient.findUnique({
        where: {
          id: input.id
        }
      });
    }),

  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      cellphone: z.string().min(1),
      email: z.string().email(),
      gender: z.string().min(1),
      timeToReceive: z.string().min(1),
      note: z.string().optional(),
      city: z.string().min(1),
      district: z.string().min(1),
      street: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.recipient.create({
        data: {
          name: input.name,
          cellphone: input.cellphone,
          email: input.email,
          gender: input.gender,
          timeToReceive: input.timeToReceive,
          note: input.note,
          address: {
            create: {
              city: input.city,
              district: input.district,
              street: input.street,
            }
          }
        },
        include: {
          address: true
        },
      });
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string().min(1),
      name: z.string().min(1),
      cellphone: z.string().min(1),
      email: z.string().email(),
      gender: z.string().min(1),
      timeToReceive: z.string().min(1),
      note: z.string().optional(),
      city: z.string().min(1),
      district: z.string().min(1),
      street: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.recipient.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          cellphone: input.cellphone,
          email: input.email,
          gender: input.gender,
          timeToReceive: input.timeToReceive,
          note: input.note,
          address: {
            create: {
              city: input.city,
              district: input.district,
              street: input.street,
            }
          }
        },
        include: {
          address: true
        },
      });
    }),

  remove: protectedProcedure
    .input(z.object({
      id: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.recipient.delete({
        where: {
          id: input.id
        },
      });
    }),

});
