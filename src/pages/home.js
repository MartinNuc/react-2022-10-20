import { Table } from '../jsx/Table';
import { MouseTracker } from '../useEffect/MouseTracker';
import { Counter } from '../useState/Counter';
import { AutoCounter } from '../useEffect/AutoCounter';
import { Dropdown } from '../dropdown/dropdown';
import { Joke } from '../api-requests/Joke';
import { SwitchThemeButton } from '../context/switch-theme';

export function HomePage() {

  return <>
    <SwitchThemeButton />
    <h1>Hello</h1>

    <Joke />

    <Dropdown />

    {/* <AutoCounter /> */}

    {/* <MouseTracker /> */}

    <Counter onCounterChanged={(n) => console.log(`Counter is ${n}!`)} />

    <Table rows={3} columns={10}>
      <button onClick={() => console.log('Cau')}>Cau</button>
    </Table>
    <hr />
    <Table rows={7} columns={3}>
      Ahoj
    </Table>
  </>
}