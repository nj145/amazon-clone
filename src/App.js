import './App.css';
import Routes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import useConfig from './hooks/useStateContext';

function App() {
  const { user } = useConfig();
  console.log(user);
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
