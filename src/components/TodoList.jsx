import React from "react";

import styles from "../styles/modules/todolist.module.scss";
import Button from "./Button";
import { SelectButton } from "./Button";

const TodoList = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.btnContainer}>
          <Button>Добавить заметку</Button>
          <SelectButton>
            <option value="all">Все</option>
            <option value="incomplete">В процессе</option>
            <option value="complete">Завершенные</option>
          </SelectButton>
        </div>

        <div className={styles.wrapper}>
          <h2>Заметок нет</h2>
        </div>
      </div>
    </>
  );
};

export default TodoList;
