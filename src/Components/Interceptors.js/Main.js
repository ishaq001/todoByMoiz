// import React from 'react';
// import App from './App';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

// // For GET requests
// axios.interceptors.request.use(
//    (req) => {
//       // Add configurations here
//       return req;
//    },
//    (err) => {
//       return Promise.reject(err);
//    }
// );

// // For POST requests
// axios.interceptors.response.use(
//    (res) => {
//       // Add configurations here
//       if (res.status === 201) {
//          console.log('Posted Successfully');
//       }
//       return res;
//    },
//    (err) => {
//       return Promise.reject(err);
//    }
// );

// ReactDOM.render(
//    <React.StrictMode>
//       <App />
//    </React.StrictMode>,
//    document.getElementById('root')
// );