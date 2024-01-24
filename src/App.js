import './App.css'
import Main from './Components/Main/Main';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import RootLayout from './Layout/RootLayout';
import AddtoCart from './Components/Pages/AddToCart/AddtoCart';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path='AddtoCart' element ={<AddtoCart />} />
  </Route>
)
)



function App() {
return (
  (<RouterProvider router={router} />)
);
}

export default App;
