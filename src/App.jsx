import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";

const App = () => {
  return (
    <div className={styles.rootContainer}>
      <Counter />
      {/* <Button>Add</Button> */}
    </div>
  );
};
export default App;
