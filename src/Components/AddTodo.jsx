import { useDispatch } from "react-redux";
import money from "../assets/money-bag.png";
import plus from "../assets/plus.png";
import { useState } from "react";
import { addTodo } from "../redux/todos/actions";


const AddTodo = () => {
  const dispatch = useDispatch();
  const [title,setTitle] = useState('')
  const [des,setDes] = useState('')


  const submit = (e) => {
    e.preventDefault();
   dispatch(addTodo({title,des}))
    setDes('')
    setTitle('')
  };



    return (
        <div className="bg-[#191B20] h-[116px] mt-2 p-4 rounded-lg">
         <form onSubmit={submit}>
         <div className="flex justify-between items-center ">
            <div className="flex justify-center items-center gap-2">
              <div className="bg-gradient-to-r from-[#BBB5E2] to-[#9C92DF] w-6 h-6 rounded-full">
                <img
                  src={money}
                  className="w-3 h-3 mt-[6px] ml-[6px] rounded-xl"
                  alt=""
                />
              </div>
              <input
                type="text"
                required
                name='title'
                placeholder="Add Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-[#191B20] text-[#6E6E6E] w-44 text-lg font-bold p-[6px] font-poppins border-none rounded-lg"
              />
            </div>
            <button type="submit" className="bg-[#242731] text-xl w-[27px] h-[27px] rounded-full pl-[8px]">
              <img className="w-3" src={plus} alt="" />
            </button>
          </div>
          <input
            className="w-full mt-1 bg-[#191B20] text-[#808191] border-none rounded-lg p-2 text-sm"
            placeholder="Add Todo Description"
            type="text"
            id="des"
            required
            name="des"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
         </form>
        </div>
    );
};

export default AddTodo;