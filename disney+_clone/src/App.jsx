import Header from "./components/Header"
import Home from "./components/Home"
import Detail from "./components/Detail";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import store from './app/store';
import { Provider } from "react-redux";
function App() {


  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/details/:id" element={<Detail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
