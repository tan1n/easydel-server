module.exports = (req, res, next) => {
    const queries = { ...req.query };
    req.filter = {};
    req.sort = {};
    req.range = {};
    if ('filter' in queries && typeof JSON.parse(queries.filter) === 'object') {
        req.filter = JSON.parse(queries.filter);
    }
    if ('sort' in queries && Array.isArray(JSON.parse(queries.sort))) {
        let sort = JSON.parse(queries.sort);
        if (sort.length > 1) {
            req.sort = {
                [sort[0]]: sort[1]
            }
        }
    }
    if ('range' in queries) {
        let range = JSON.parse(queries.range);
        if (range.length === 2) {
            req.range = range;
        }
    }
    next();
}