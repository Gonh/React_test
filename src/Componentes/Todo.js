import React from 'react'

export default function Todo( todo, toogle_todo ) {
 
 function cambiar_toogle_todo(){
  toogle_todo(todo.todo.id);
 }
 return (
<div>
<input onChange={cambiar_toogle_todo} type= 'checkbox' checked= {todo.todo.completed}></input>
<label>
{todo.todo.name}
</label>
</div>
  )
}
