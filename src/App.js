//import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About'
import NotFound from './Components/NotFound/NotFound';


function App() {

  const routers = createBrowserRouter([{
    path:'/' ,
    element: <Layout/>,
    children:[
      { index:true, element:<Home/>},
      {path:'about', element:<About/>},
      {path:'contact', element:<Contact/>},
      {path:'projects', element:<Projects/>},
      {path:'*', element:<NotFound/>},
    ],
  },
]);


  return (
    <RouterProvider router={routers} ></RouterProvider>
  );
}

export default App;
