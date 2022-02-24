import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import World from './component/World';
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      
      <div className={styles.box}>app</div>
      <World></World>
    </div>
  );
}

export default App;
