const pagination = (req, res, next) => {
    const { query: {page = 1, limit = 10}} = req;
    const pagination = {page, limit};
    req.pagination = pagination;
    next();
}

module.exports = { pagination };