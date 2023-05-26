import plus from "../assets/plus.png";
import AddTodo from '../Components/AddTodo'
import Todo from '../Components/Todo'

import Todos from "./Todos";
const MainContent = () => {

  return (
    <div>
      <div className="grid grid-cols-3 mt-5 gap-3 px-5">
        <div className="">
          <div className="bg-[#242731] rounded-lg">
            <h1 className="text-[16px] p-3 font-semibold">
              List : Things to Buy
            </h1>
          </div>
          <AddTodo />
         <Todos />
        </div>

        <div>
          <div className="bg-[#242731] rounded-lg">
            <h1 className="text-[16px] p-3 font-semibold">List : Empty List</h1>
          </div>
          <AddTodo />
          {/* Add Todo */}
         <Todos />
        </div>

        <div>
          <div className="bg-[#242731] py-1 flex justify-between items-center rounded-lg">
            <input
              type="text"
              placeholder="Add Todo-list"
              className="text-[16px]  px-3 bg-[#242731] border-none outline-none rounded-lg font-semibold"
            />
            <button className="bg-[#353945] text-xl rounded-full p-[6px] text-center  mr-3">
              <img className="w-3" src={plus} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
