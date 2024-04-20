import { rest } from "msw";
import { PAYMENTS } from "./constants";

export const handlers = [
  rest.post(`${process.env.BASE_URL}/business/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: 1 }));
  }),
  rest.post(
    `${process.env.BASE_URL}/business/tradingAddress/`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
  rest.post(`${process.env.BASE_URL}/transactions`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
  rest.post(`${process.env.BASE_URL}/user/save`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: 1 }));
  }),
  rest.post(`${process.env.BASE_URL}/user/login`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${process.env.BASE_URL}/payments`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PAYMENTS));
  }),
  rest.get(`${process.env.BASE_URL}/business`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ id: 1 }]));
  }),
  rest.post(
    `${process.env.BASE_URL}/business/businessProfile/`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    }
  ),
  rest.get(`${process.env.BASE_URL}/payments/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PAYMENTS[0]));
  }),
];
