import { ChangeEvent, useState } from "react";
import { data } from "./components/constants";
import { IData } from "./components/interfaces";
import styles from "./home.module.css";

const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<IData[]>(data);

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setTitle(evt.target.value);
  };

  const handleSubmit = (): void => {
    if (!title?.length) return;
    console.log(title);
    const newData = {
      title: title,
      id: new Date().getTime(),
      description: "description ",
    };
    setArr([...arr, newData]);
    setTitle("");
  };

  const deleteItem = (id: number): void => {
    // ! first route
    // setArr(
    //   arr.filter((item) => {
    //     return item.id !== id;
    //   })
    // );
    // ! second route
    const newData = arr.filter((item) => {
      return item.id !== id;
    });
    setArr(newData);
  };

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>App Todo 📝</h1>
      <input
        type="text"
        placeholder="Enter todo"
        value={title}
        onChange={changeHandler}
        className={styles.input}
      />
      <button className={styles.button} onClick={handleSubmit}>
        Add button
      </button>

      <div className={styles.card}>
        {arr.map((item) => (
          <div key={item.id} className={styles.cardItem}>
            <p>{item.title}</p>
            <div className={styles.delBtn}>
              <button onClick={() => deleteItem(item.id)}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
