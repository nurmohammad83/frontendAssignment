import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUpdateTodo, upadateTodo } from "../redux/todos/actions";

const RightSideBar = () => {
  const dispatch=useDispatch()
  const {id,title,des} = useSelector(state=>state.editing)

  const [updateTitle,setUpdateTitle]= useState('')
  const [updateDes,setUpdateDes]= useState('')
  console.log(updateDes,updateTitle)
const updateTodo = { id,title:updateTitle,des:updateDes}


  const handelSubmit=(e)=>{
    e.preventDefault()
    dispatch(allUpdateTodo(id,updateTodo))
    setUpdateTitle('')
    setUpdateDes('')
  }
  return (
    <div>
      <div className="flex gap-4 items-center px-6 py-5">
        <span className="flex justify-center items-center">
          <ion-icon size="small" name="arrow-back-outline"></ion-icon>
        </span>
        <h2 className="text-lg font-poppins font-medium">Edit Todo</h2>
      </div>

      <form onSubmit={handelSubmit} className="px-4">
        <input
          type="text"
          placeholder="Carrot"
          name='title'
          defaultValue={title}
          onChange={(e) => setUpdateTitle(e.target.value)}
          className="text-[20px] w-full px-3 text-[#808191] bg-[#242731] border-none outline-none rounded-lg font-semibold"
        />
        <textarea
          className="w-full rounded-lg px-3 border-none mt-2 bg-[#242731] text-sm text-[#808191]"
          placeholder="Carrot improves eyesight."
          rows="8"
          defaultValue={des}
          name='des'
          onChange={(e) => setUpdateDes(e.target.value)}
          id="message"
        ></textarea>
        <button type="submit" className="rounded-md text-sm text-white py-2 px-3 text-center bg-blue-600 w-full"> Save</button>
      </form>
    </div>
  );
};

export default RightSideBar;
