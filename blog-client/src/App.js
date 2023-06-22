
import { createBrowserRouter, RouterProvider, Route, Outlet, } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Single from './pages/Single';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import "./style.scss"

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
    // <> combined three elements
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    //apply layout to all the following three pages
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/post/:id",
        element:<Single />
      },
      {
        path:"/write",
        element:<Write />
      },
    ]
  },
  {
    path:"/register",
    element:<Register/>,
  },
  {
    path:"/login",
    element:<Login/>,
  },
])

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}


export default App;
