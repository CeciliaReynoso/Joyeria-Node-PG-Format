const reportMiddleware = (req, res, next) => {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  console.log(`
    ${now} Ruta consultada: ${req.method} Resultado:${req.path} a las ${formattedTime}
    `);
  next();
};

module.exports = reportMiddleware;
