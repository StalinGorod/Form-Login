import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div class='box'>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path='Signup' element={<Signup />} />
                </Routes>
                {/* <Register/> */}
            </div>
        </BrowserRouter>
    )
}

export default App;