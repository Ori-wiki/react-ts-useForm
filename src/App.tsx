import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import Main from './pages/MainPage/Main';
import AuthForm from './pages/AuthPage/AuthForm';
import RegisterForm from './pages/AuthPage/RegisterForm';

function App() {
  return (
    <Routes>
      {/* Главная страница */}
      <Route path="/" element={<Main />} />

      {/* Страница аутентификации */}
      <Route path="/auth/*" element={<AuthPage />}>
        <Route path="login" element={<AuthForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>
    </Routes>
  );
}

export default App;
