import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import Spinner from "./components/Spinner/Spinner";

const App = () => {
  return (
    <div className={styles.rootContainer}>
      {/* <Button /> */}
      {/* <Counter /> */}
      {/* <Input
        placeholder="Enter first name e.g. John"
        label="First name"
        errorMessage="First name is required"
      /> */}
      <Spinner />
    </div>
  );
};

export default App;
