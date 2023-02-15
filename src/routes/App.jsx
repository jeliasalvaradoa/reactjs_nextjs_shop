import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
//import { HashRouter } from `react-router-dom`;
import '@styles/global.css';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import RecoveryPassword from '@pages/RecoveryPassword';
import Home from '@pages/Home';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value = { initialState }>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/clothes" element={<Home categoryId = {1}/>} />
                    <Route exact path="/electronics" element={<Home categoryId = {2}/>} />
                    <Route exact path="/furnitures" element={<Home categoryId = {3}/>} />
                    <Route exact path="/shoes" element={<Home categoryId = {4}/>} />
                    <Route exact path="/others" element={<Home categoryId = {5}/>} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route exact path="/send-email" element={<SendEmail />} />
                    <Route exact path="/new-password" element={<NewPassword />} />
                    <Route exact path="/account" element={<MyAccount />} />
                    <Route exact path="/signup" element={<CreateAccount />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;

/*configuracion usada con router-dom version 5
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const App = () => {
    return (
        <BrowserRouter>
        <Switch>

        <Layout>
            <Route exact path = "/" element = {Home} />
            <Route exact path = "/login" element = {Login} />
            <Route exact path = "/recovery-password" element = {RecoveryPassword} />
            <Route element = {NotFound} />
        </Layout>

        </Switch>
        </BrowserRouter>
    );
}
export default App;
*/
