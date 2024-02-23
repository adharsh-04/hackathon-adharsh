
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Dash from './components/Dash';
import Login from './components/Login';
import Register from './components/Register';
import Root from './components/Root';



function App() {

  let router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/dashboard",
          element:<Dash/>
        }
      ]
    }
  ]);
  return (
    <div className='container-fluid'>
      <RouterProvider router={router}></RouterProvider>


    </div>

  );
};

export default App;
