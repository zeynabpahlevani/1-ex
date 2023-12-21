import React from 'react';
import ReactDOM from 'react-dom/client';

const name = 'zeynab';
const age = '20';
const introduce = <h2>Hello, my name is {name} and I am {age} years old </h2>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(introduce);
