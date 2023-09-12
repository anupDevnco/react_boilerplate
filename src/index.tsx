import React from "react"; // eslint-disable-next-line prettier/prettier
import ReactDOM from 'react-dom/client'; // eslint-disable-next-line prettier/prettier
import './index.css'; // eslint-disable-next-line prettier/prettier
import App from "./App"; // eslint-disable-next-line prettier/prettier, import/no-unresolved
import reportWebVitals from './reportWebVitals'; // eslint-disable-next-line prettier/prettier, import/no-unresolved

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // eslint-disable-next-line prettier/prettier
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
