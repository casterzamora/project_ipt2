import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './components/Routers';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>
);
