'use client'

import { useTodo } from '@/hooks/useTodo';
import { Button, Input } from '@nextui-org/react'
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoCreate = () => {
  const [task, setTask] = useState('')
  const { create } = useTodo()
  const inputRef = useRef<HTMLInputElement>(null);

  const createTodo = () => {

    const todo = {
      id: uuidv4(),
      name: task,
      completed: false,
      date: new Date()
    }

    create(todo)
    setTask('')

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }


  return (
    <form className="flex items-center gap-2">
      <Input ref={inputRef} placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)} />
      <Button type="submit" onClick={createTodo} isDisabled={!task.trim()}>Submit</Button>
    </form>
  )
}

export default TodoCreate
