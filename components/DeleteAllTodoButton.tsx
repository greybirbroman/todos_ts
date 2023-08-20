'use client'

import CustomButton from "./CustomButton";
import { useTodoContext } from "@/utils/context/TodosContext";

const DeleteAllTodoButton = () => {
    const {todo: {deleteAllTodos}} = useTodoContext()
  return (
    <div className="bg-white/50 p-3 rounded-full flex hover:scale-110 hover:bg-cyan-700 cursor-pointer duration-300 w-fit h-fit" onClick={deleteAllTodos}>
        <CustomButton imageSrc="/delete-icon.svg"/> 
    </div>
  )
}

export default DeleteAllTodoButton
