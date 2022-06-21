import TodoList from "./components/TodoList";
import styles from "./styles/modules/app.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <h1>Заметки</h1>
      <TodoList />
      <p>Сделано Адилетом Бердибековым</p>
    </div>
  );
}

export default App;
