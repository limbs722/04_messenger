import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'pages/login/Login';
import Messenger from 'pages/messenger/Messenger';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Messenger />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
