import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import './List.scss';
import { memo, useContext } from "react";
import ItemContext from "./Context";

const List = memo(() => {
	const { state } = useContext(ItemContext);
	return (
		<div className="List-container">
			<div className="ListHead">
				<span className="ListId">번호</span>
				<span className="ListTitle">제목</span>
				<span className="ListTime">작성일자</span>
			</div>
			<div className="List">
				{state.items.map((item, index) => (
					<ListItem key={item.birth} item={item} index={index + 1}/>
				))}
			</div>
				<div className="writeButton"><Link to="/write">글쓰기</Link></div>
		</div>
	)
})

export default List;
