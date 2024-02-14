
import './App.css';
import Login from './login/Login';
import Nav from './navigation/Nav';
import Home from './home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './registeruser/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
            <Routes>
              <Route path="/" Component={Nav}>
                <Route index  Component={Home}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" Component={Register}/>
                </Route>
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;
