// import Navbar from './components/navigations/navigation';
// import ProductDetail from './components/ProductDetail';
// import ProductImage from './components/ProductImage';
// import Modal from './components/modal';
import Collections from './pages/Collections';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages';
import ProductItem from './pages/ProductItem';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home />}>
        <Route index element={<Collections />} />
        <Route path='/product-item/:id' element={<ProductItem />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
