import type { NextPage } from "next";
import { useEffect, useContext } from "react";
import TodoTask from "../apps/Todo/components/TodoTask";
import CreateTodo from "../apps/Todo/components/TodoList";
import Head from "next/head";

import { TaskContext, TaskContextTypes } from "../context/taskContext";

const Todo: NextPage = () => {
  const { tasks, updateTasks } = useContext(TaskContext) as TaskContextTypes;

  useEffect(() => {
    console.log("ue running");
    updateTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Next UP: Todo List</title>
        <meta name="description" content="Todo list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <CreateTodo /> */}
      <h1>To-do</h1>
      {tasks?.length && tasks.length > 0 ? (
        tasks
          .filter((task) => !task.isDone)
          .map((task) => <TodoTask key={task.id} {...task} />)
      ) : (
        <h2>No tasks to display, all caught up!</h2>
      )}

      <h1>Completed</h1>
      {tasks?.length && tasks.length > 0 ? (
        tasks
          .filter((task) => task.isDone)
          .map((task) => <TodoTask key={task.id} {...task} />)
      ) : (
        <h2>Nothing here... get to work!</h2>
      )}
    </>
  );
};

export default Todo;
