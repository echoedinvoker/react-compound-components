import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>

      <Counter>
        <Counter.Label>My Super Flexible Counter</Counter.Label>
        <div>
        <Counter.Increase icon="+" />
        <Counter.Count />
        <Counter.Decrease icon="-" />
        </div>
        <Counter.Label>It's Realy Flexible!</Counter.Label>
      </Counter>
    </div>
  );
}
