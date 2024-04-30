const responseHandler = () => {
  return async (ctx, next) => {
    ctx.response.ok = (message, data) => {
      ctx.status = 200;
      ctx.body = { message, data };
    };

    ctx.response.created = (message, data) => {
      ctx.status = 200;
      ctx.body = { message, data };
    };

    ctx.response.fail = (message, data) => {
      ctx.status = 400;
      ctx.body = { message, data };
    };
    ctx.response.unauthenticated = (message, data) => {
      ctx.status = 401;
      ctx.body = { message, data };
    };
    ctx.response.unauthenticated = (message, data) => {
      ctx.status = 404;
      ctx.body = { message, data };
    };

    await next();
  };
};

module.exports = responseHandler;
