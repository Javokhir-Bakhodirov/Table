import { useEffect, useState } from "react";
import apiInstance from "../../api/axios";
import UserList from "../../components/UserList";

import "./Table.css";

const Table = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		apiInstance("?page=2").then((response) => setUsers(response.data.data));
	}, []);
	console.log(users);
	return (
		<div className="container">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Avatar</th>
						<th>Username</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<UserList key={user.id} user={user} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
