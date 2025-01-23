import Todo from "../models/Todo";

export default class TodoController {
    async create(req, res, next) {
        const { title, description } = req.body;

        const newTodo = new Todo({ title, description });

        try {
            await newTodo.save();
        } catch (err) {
            console.log(err);
            const error = new Error("Error creating a todo");
            return next(error);
        }

        res.send({
            id: newTodo._id,
            title: newTodo.title,
            description: newTodo.description,
        });
    }

    async update(req, res, next) {
        const { title, description } = req.body;

        try {
            await Todo.findByIdAndUpdate(req.params.id, {
                title,
                description,
            });
        } catch (err) {
            console.log(err);
            const error = new Error("Error updating a todo");
            return next(error);
        }

        res.send({
            id: req.params.id,
            title: title,
            description: description,
        });
    }

    async delete(req, res, next) {
        try {
            await Todo.findByIdAndDelete(req.params.id);
        } catch (err) {
            console.log(err);
            const error = new Error("Error deleting a todo");
            return next(error);
        }

        res.sendStatus(204);
    }

    async list(req, res, next) {
        const page: number = req.query.page;
        const limit: number = req.query.limit;

        let query: any[] = [];
        try {
            query = await Todo.find()
                .skip(5 * (page - 1))
                .limit(limit)
                .lean();
        } catch (err) {
            console.log(err);
            const error = new Error("Error listind todos");
            return next(error);
        }

        res.send({
            data: query,
            page,
            limit,
            total: query.length,
        });
    }
}
