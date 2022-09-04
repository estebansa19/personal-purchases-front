import React, { useState } from 'react';
import { toast } from 'react-toastify';
import NumberFormat from 'react-number-format';
import TextFieldsOutlinedIcon from '@material-ui/icons/TextFieldsOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import '../styles/FormContainer.css';
import 'react-toastify/dist/ReactToastify.css';

export default function FormContainer() {
  const URL = 'https://personal-purchases.herokuapp.com/api/v1/purchases';
  const [state, setState] = useState({ title: '', value: '' });

  const handleChange = (e) => {
    debugger
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'purchase': state })
    })
      .then(function() {
        toast.success('🚀 Success', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(function() {
        toast.error('❌ Error', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })

    setState({ title: '', value: '' });
  }

  return (
    <div className='container form-container'>
      <h1 className='font-weight-bold'>Create new purchase</h1>

      <div className='row pt-5 inputs-container'>
        <div className='card card-body'>
          <form id='example' onSubmit={handleSubmit}>
            <div className='form-group input-group'>
              <div className='input-group-text'>
                <TextFieldsOutlinedIcon />
              </div>

              <input
                type='text'
                className='form-control'
                placeholder='Some title'
                name='title'
                onChange={handleChange}
                value={state.title}
              />
            </div>

            <div className='form-group input-group'>
              <div className='input-group-text'>
                <AttachMoneyOutlinedIcon />
              </div>

              <NumberFormat
                thousandSeparator={true}
                prefix={'$'}
                placeholder='123'
                className='form-control'
                value={state.value}
                onValueChange={handleChange}
              />
            </div>

            <button className='btn btn-primary btn-block'>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
