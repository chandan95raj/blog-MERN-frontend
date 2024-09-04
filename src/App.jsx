import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPgae";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import RootLayout from "./shared/Layout/RootLayout";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout><HomePage /></RootLayout>} />
          <Route path='/blog' element={<RootLayout><HomePage /></RootLayout>} />
          <Route path='/login' element={<RootLayout><LoginPage /></RootLayout>} />
          <Route path='/signup' element={<RootLayout><SignupPage /></RootLayout>} />
          <Route path='/dashboard' element={<RootLayout><DashboardPage /></RootLayout>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App