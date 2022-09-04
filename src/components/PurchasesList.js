import { React, useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import Loading from './Loading';
import '../styles/PurchasesList.css';

export default function PurchasesList() {
  const URL = 'https://personal-purchases.herokuapp.com';
  const [state, setState] = useState({ data: [], loading: true, error: null });

  async function fetchData() {
    await fetch(URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(async function(response) {
      const data = await response.json();
      setState({ data, loading: false });
    }).catch(function(error) {
      setState({ error: error.message, loading: false });
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (state.loading) return <Loading />
  if (state.error) return <h1>`There was an error ${state.error}`</h1>
  if (state.data.length === 0) return <h1>There's nothing to see :(</h1>

  return (
    <div className='container-fluid'>
      <div className='row m-5'>
        {state.data.map(function(record) {
          return(
            <div className='purchases-container container col-md-4 col-sm-12'>
              <h3>{record.month}</h3>
              <h4>Total: {record.total}</h4>

              <ul>
                {record.purchases.map(function(purchase) {
                  return(
                    <li>
                      {
                        purchase.title && purchase.value ?
                        <NumberFormat value={purchase.value} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={(value) => <div>{`${purchase.title} - ${value}`}</div>} /> :
                        `${purchase.title}`
                      }
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
