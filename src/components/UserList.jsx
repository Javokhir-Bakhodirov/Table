import { Link } from "react-router-dom";
import "./UserList.css";

const UserList = ({ user }) => {
	return (
		<tr>
			<td>{user.id - 6}</td>
			<td>
				<img src={user.avatar} alt="avatar" width={36} height={36} />
			</td>
			<td>
				<Link to={`/user/${user.id}`}>
					{user.first_name} {user.last_name}{" "}
				</Link>
			</td>
			<td>{user.email}</td>
		</tr>
	);
};

export default UserList;
