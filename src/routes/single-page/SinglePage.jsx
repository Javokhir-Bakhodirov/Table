import { useParams } from "react-router-dom";
import "./SinglePage.css";
import { useEffect, useState } from "react";
import apiInstance from "../../api/axios";
import mail from "../../img/mail.svg";
import map from "../../img/map.svg";
import phone from "../../img/phone.svg";

const SinglePage = () => {
	const [user, setUser] = useState({});
	const { id } = useParams();

	useEffect(() => {
		apiInstance(`/${id}`).then((response) => setUser(response.data.data));
	}, []);
	console.log(user);

	return (
		<div className="container">
			<div className="single-page">
				<div className="img-block">
					<img className="user-img" src={user.avatar} alt="avatar" />
					<ul className="user-links">
						<li className="user-link">
							<a href={`https://${user.email}`}>
								<img src={mail} alt="" />
							</a>
						</li>
						<li className="user-link">
							<a href="#">
								<img src={map} alt="" />
							</a>
						</li>
						<li className="user-link">
							<a href="#">
								<img src={phone} alt="" />
							</a>
						</li>
					</ul>
				</div>
				<div className="user-content">
					<h2 className="content__title">
						Hello, I'm {user.first_name} {user.last_name}
					</h2>
					<p className="content__text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sed
						animi accusantium dolores amet sapiente vitae, velit, autem dolorem
						alias veritatis facere, voluptatem atque commodi? Dicta odio
						eligendi dolor perferendis. Vel repellat fuga quam porro,
						consequuntur nisi eligendi vero neque optio nesciunt enim, inventore
						explicabo culpa quis error asperiores natus?
						<br />
						<br />
						<br />
						{user.email}
					</p>

					<a className="content__link" href={`https://${user.email}`}>
						My Project
					</a>
				</div>
			</div>
		</div>
	);
};

export default SinglePage;
