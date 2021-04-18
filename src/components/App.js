import React from 'react';
import FormContainer from './FormContainer';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <>
      <FormContainer />


      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
