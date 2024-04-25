import ReactDOM from 'react-dom/client';
import App from './components/App';
import MenuPage from './components/MenuPage';
import ReservationPage from './components/ReservationPage';
import Navbar from './components/Navbar';
import ReservationModal from './components/ReservationModal';
import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

export const GlobalFormData = createContext(null);

function Layout() {
  const [formData, setFormData] = useState({
    name: '',
    partySize: '',
    date: '',
    time: '',
    modalDisplay: 'none',
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.modalDisplay === 'block') {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          ['modalDisplay']: 'none',
        };
      });
    } else {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          ['modalDisplay']: 'block',
        };
      });
    }
  }

  function closeModal() {
    if (formData.modalDisplay === 'block') {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          ['modalDisplay']: 'none',
        };
      });
    } else {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          ['modalDisplay']: 'block',
        };
      });
    }
  }

  return (
    <>
      <GlobalFormData.Provider
        value={{ formData, setFormData, handleSubmit, closeModal }}
      >
        <Navbar />
        <div id="page-content">
          <Outlet />
        </div>
        <ReservationModal />
      </GlobalFormData.Provider>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/menu',
        element: <MenuPage />,
      },
      {
        path: '/reservations',
        element: <ReservationPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
