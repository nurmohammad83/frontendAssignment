import { useSelector } from "react-redux";
import Todo from "./Todo";
const Todos = () => {
    const allTodo = useSelector(state=>state.todos)
    return (
        <div className="flex flex-col">
        {
          allTodo?.map(todo=> <Todo todo={todo} key={todo.id}/>)
        }
      </div>
    );
};

export default Todos;