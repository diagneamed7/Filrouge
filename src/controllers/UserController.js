const userService = require('../services/UserService');

class UserController {
    async getAll(req, res) {
        try {
            const user = await userService.getAll();
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const user = await userService.getById(req.params.id);
            res.json(user);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const user = await userService.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const user = await userService.update(req.params.id, req.body);
            res.json(user);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const reponse = await userService.delete(req.params.id);
            res.json(reponse);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new UserController();
