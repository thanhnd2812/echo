import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const add = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const orgId = identity.orgId as string;

    if (!orgId) {
      throw new Error("Organization not found");
    }

    throw new Error('Tracking test');
    
    return await ctx.db.insert("users", {
      name: args.name,
    });
  },
});