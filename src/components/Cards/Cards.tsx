import React, { useState } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import Card from "./Card";

const Cards = () => {
  // const [todoItems, setTodoItems] = useState(taskList)
  const { todos } = useAppSelector((state) => state.Projects);
  return (
    <>
      {todos.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Card
              title={item.title}
              details={item.details}
              date={item.date}
              priority={item.priority}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Cards;
