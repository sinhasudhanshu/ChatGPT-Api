import logo from './logo.svg';
import './App.css';
import ChatGPTCApi from './component/ChatGPTCApi';


function App() {
  return (
    <div className="App">
     <h1>Ask a Question</h1>
     <ChatGPTCApi/>
    </div>
  );
}

export default App;
