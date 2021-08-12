import './App.css';
import { useSelector } from 'react-redux';

import { NPMSearch } from './components/NPMSearch';
import { BankAccount } from './components/BankAccount';

function App() {
  const state = useSelector((state) => state);
  console.log(`state`, state);

  return (
    <div className="App">
      <BankAccount />
      <NPMSearch />
    </div>
  );
}

export default App;
