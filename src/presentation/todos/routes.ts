import { Router } from 'express';
import { TodosController } from './controller';

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();
    const todoController = new TodosController();

    router.get('/', (req, res): any => todoController.getTodos(req, res));

    router.get('/:id', (req, res): any => todoController.getTodoById(req, res));

    router.post('/', (req, res): any => todoController.createTodo(req, res));
    router.put('/:id', (req, res): any => todoController.updateTodo(req, res));
    router.delete('/:id', (req, res): any =>
      todoController.deleteTodo(req, res)
    );

    return router;
  }
}
