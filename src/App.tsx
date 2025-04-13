import './App.css';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <>
      <div className="text-xl font-medium text-cyan-800 dark:text-blue-100">
        Search Input
      </div>
      <div className="flex items-center justify-center w-full mt-4">
        <SearchInput />
      </div>
    </>
  );
}

export default App;
