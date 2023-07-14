import { BrowserRouter,Route,Routes } from "react-router-dom";
import TabComponents from './pages/TabComponents.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // import react-bootstrap 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<TabComponents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
