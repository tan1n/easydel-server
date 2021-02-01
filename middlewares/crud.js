const getAll = (model) => {
    return async (req, res) => {
        try {
            let data = await model
                .find(req.filter)
                .sort(req.sort)
                .skip(req.range[0])
                .limit(req.range[1]);
            res.set('Access-Control-Expose-Headers', 'Content-Range');
            res.set({ 'Content-Range': 'pickups 0-1/4' })
            res.send(data);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

const get = (model) => {
    return async (req, res) => {
        try {
            let data = await model.findById(req.params.id);
            res.json(data);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

const create = (model) => {
    return async (req, res) => {
        try {
            let data = await model.create(req.body)
            res.send(data);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

const update = (model) => {
    return async (req, res) => {
        try {
            let data = await model.findByIdAndUpdate(req.params.id, req.body);
            res.send(data);
        } catch (err) {
            res.statusCode(500).err(err);
        }
    }
}

const remove = (model) => {
    return async (req, res) => {
        try {
            let data = await model.findByIdAndDelete(req.params.id);
            res.send(data);
        } catch (err) {
            res.statusCode(500).err(err);
        }
    }
}

module.exports = {
    getAll: getAll,
    get: get,
    create: create,
    update: update,
    remove: remove
}