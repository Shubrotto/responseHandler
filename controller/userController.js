const { get } = require("../model/userModel");

exports.get = (ctx) => {
  try {
    const user = get();
    ctx.status = 200;
    ctx.body = { statusCode: "data fetch successfully!", user: user };
  } catch (error) {
    ctx.status = 400;
    ctx.body = { statusCode: "data fetch failed!", user: user };
  }
};

exports.post = (ctx) => {
  try {
    const id = ctx.params.id;
    const user = ctx.request.body;
    ctx.status = 200;
    ctx.body = { statusCode: "data created successfully!", user: user, id };
  } catch (error) {
    ctx.status = 400;
    ctx.body = { statusCode: "data fetch failed!", user: user };
  }
};
