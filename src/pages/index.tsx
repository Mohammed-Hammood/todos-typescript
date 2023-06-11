import React from "react";
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from 'utils/routes';
import HomePage from './home';
import Error404 from "./error404";


export default function Pages(): JSX.Element {
    return (
        <Routes>
            <Route element={<HomePage />} path={AppRoutes.homePage} />
            <Route element={<Error404 />} path={AppRoutes.error404 } />
        </Routes>)

}