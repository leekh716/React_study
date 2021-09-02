import { memo } from "react";
import { Link } from "react-router-dom";
import './ListItem.scss';

const ListItem = memo(({ item, index }) => {
	const { title, birth } = item;
	const page = `/view/${birth}`;
	return (
		<div className="ListItem">
			<div className="itemNum">{index}</div>
			<span className="itemLink">
				<Link to={page}>{title}</Link>
			</span>
			<span className="itemTime">{birth}</span>
		</div>
	)
})

export default ListItem;
