import { TodoTypes } from "utils/types";

export default class TodosLocalStorage{
    readonly __name__:string = "#todos";
    todos: TodoTypes[] = JSON.parse(localStorage.getItem(this.__name__) || JSON.stringify([]));

    get():TodoTypes[] {
        return this.todos
    }
    set(todos:TodoTypes[]):void {
        this.todos = todos;
        localStorage.setItem(this.__name__, JSON.stringify(this.todos));
    }
}