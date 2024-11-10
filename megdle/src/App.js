import './App.css';
import Page from './components/Page';
import { WordContextProvider } from './components/WordContext';

function App() {
  return (
    <WordContextProvider>
      <div className="App">
        <Page />
      </div>
    </WordContextProvider>
  );
}

export default App;
