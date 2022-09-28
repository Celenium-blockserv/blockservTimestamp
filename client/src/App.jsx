import { EthProvider } from "./contexts/EthContext";
import "./App.css";

import Main from "./components/Main"
function App() {
  return (
    <EthProvider>
      <div id="App" >
        <Main></Main>
      </div>
    </EthProvider>
  );
}

export default App;
