import './App.css';
import { Table } from './jsx/Table';
import { MouseTracker } from './useEffect/MouseTracker';
import { Counter } from './useState/Counter';

function App() {
  let something = 'Martin';

  return <>
    <h1>Hello {something}</h1>

    <MouseTracker />

    <Counter />

    <Table rows={3} columns={10}>
      <button onClick={() => console.log('Cau')}>Cau</button>
    </Table>
    <hr />
    <Table rows={7} columns={3}>
      Ahoj
    </Table>
  </>;
}

export default App;
