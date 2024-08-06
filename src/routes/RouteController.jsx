import React from "react";
import Table from "./table/Table.jsx";
import { Routes, Route } from "react-router-dom";
import SinglePage from "./single-page/SinglePage.jsx";

const RouteController = () => {
	return (
		<Routes>
			<Route path="" element={<Table />} />
			<Route path="/user/:id" element={<SinglePage />} />
		</Routes>
	);
};

export default RouteController;
