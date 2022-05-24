import { AddEditUser, Home, UserInfo } from 'pages';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = () => {
   return (
      <>
         <ToastContainer />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddEditUser />} />
            <Route path="/update/:id" element={<AddEditUser />} />
            <Route path="/view/:id" element={<UserInfo />} />
         </Routes>
      </>
   );
};

export default App;
