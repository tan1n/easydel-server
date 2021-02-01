module.exports = (schema) => {
    return async (req, res, next) => {
        let validator;
        switch (req.user.role) {
            case 'user':
                validator = schema.user;
                break;
            case 'admin':
                validator = schema.admin;
                break;
        }
        try {
            const validated = await validator.validateAsync(req.body);
            req.body = validated;
            next();
        } catch (err) {
            res.status(400).send(err);
        }
    }
}