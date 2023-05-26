import { useDispatch } from "react-redux";
import money from "../assets/money-bag.png";
import plus from "../assets/plus.png";
import victor from '../assets/Vector.png'
import { upadateTodo } from "../redux/todos/actions";

const Todo = ({todo}) => {
  const dispatch = useDispatch()
  const {title,des} = todo
    return (
        <div className="bg-[#191B20] h-[116px] mt-2 p-4 rounded-lg">
          <div className="flex justify-between items-center ">
            <div className="flex justify-center items-center gap-2">
              <div className="bg-gradient-to-r from-[#BBB5E2] to-[#9C92DF] w-6 h-6 rounded-full">
                <img
                  src={money}
                  className="w-3 h-3 mt-[6px] ml-[6px] rounded-xl"
                  alt=""
                />
              </div>
              <h1 className="bg-[#191B20] text-white w-44 text-lg font-bold p-[6px] font-poppins border-none rounded-lg"
              >{title}</h1>
            </div>
            <button onClick={()=>dispatch(upadateTodo(todo))} className="bg-[#242731] text-xl w-[27px] h-[27px] rounded-full pl-[8px]">
              <img className="w-3" src={victor} alt="" />
            </button>
          </div>
          <p className="w-full mt-1 bg-[#191B20] text-[#808191] border-none rounded-lg p-2 text-sm"
 >{des}</p>
        </div>
    );
};

export default Todo;