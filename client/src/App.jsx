import { EthProvider } from "./contexts/EthContext";
import Footer from "./components/Footer";
import "./App.css";
import TransactionRecorder from "./components/TransactionRecorder";
import TransactionReader from "./components/TransactionReader";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <h2>Timestamper</h2>
          <hr />
          <TransactionRecorder />
          <hr />
          <TransactionReader />
          <hr />
          <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
