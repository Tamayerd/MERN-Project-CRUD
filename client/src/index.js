import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import store from "./redux/actions/reducers/store.js"; 
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2123bf",
          colorBgLayout: " #d9d9d9",
          colorBgContainer: "#f0f0f0",
          colorText: "black",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);


