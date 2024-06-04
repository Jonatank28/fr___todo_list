'use client'

import { useTodo } from "@/hooks/useTodo"
import { Button, Card, CardBody, Checkbox, Pagination } from "@nextui-org/react"
import { Trash } from "lucide-react"
import { useState } from "react"

const TodosList = () => {
  const { todos, delete: deleteTodo, updateName, changeStatus } = useTodo()
  const [currentPage, setCurrentPage] = useState(1)
  const todosPerPage = 8

  const sortedTodos = todos.slice().sort((a, b) => {
    if (a.completed === b.completed) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return Number(a.completed) - Number(b.completed)
  })

  const indexOfLastTodo = currentPage * todosPerPage
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage
  const currentTodos = sortedTodos.slice(indexOfFirstTodo, indexOfLastTodo)

  const totalPages = Math.ceil(sortedTodos.length / todosPerPage)

  return (
    <div className="overflow-hidden">
      {
        sortedTodos.length > 0 && (
          <div className="flex flex-col gap-2">
            {currentTodos.map((todo) => (
              <Card key={todo.id}>
                <CardBody>
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 w-full ${todo.completed && 'line-through opacity-40'}`}>
                      <Checkbox defaultSelected={todo.completed} onClick={() => changeStatus(todo.id)} />
                      <input
                        className="w-full bg-transparent no-underline outline-none"
                        defaultValue={todo.name}
                        onChange={(e) => updateName(todo.id, e.target.value)}
                      />
                    </div>
                    <Button isIconOnly variant="light" className="group" onClick={() => deleteTodo(todo.id)}>
                      <Trash
                        size={16}
                        className="cursor-pointer opacity-50 transition-all group-hover:opacity-100 group-hover:text-red-400"
                      />
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )
      }
      {todos.length > 0 && (
        <div className="flex justify-between items-center pt-4">
          <h1>Total: {sortedTodos.length}</h1>
          <Pagination isCompact showControls total={totalPages || 1} initialPage={1} onChange={(page) => setCurrentPage(page)} />
        </div>
      )}
    </div >
  )
}

export default TodosList
