import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import TodoCreate from "@/components/TodoCreate"
import TodosList from "@/components/TodosList"

const page = () => {

  return (
    <main className="default-width">
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 items-center">
        <div />
        <h1 className="text-6xl font-bold text-primary font-lobster text-center">Todo list</h1>
        <div className="text-end fixed top-2 right-2 sm:static">
          <ThemeSwitcher />
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <TodoCreate />
        <TodosList />
      </div>
    </main>
  )
}

export default page
