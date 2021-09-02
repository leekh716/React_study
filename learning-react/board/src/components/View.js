import { memo, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import ItemContext from "./Context";
import './View.scss';

const View = memo(({ match }) => {
	const { birth } = match.params;
	const { state, actions } = useContext(ItemContext);
	const item = state.items[state.items.findIndex(item => item.birth === birth)];
	const page = `/edit/${item.birth}`;

	const onRemove = useCallback(() => {
		actions.setItems(state.items.filter(item => item.birth !== birth))
	}, [actions, state.items, birth]);

	return (
		<div className="View">
			<div className="ViewTitle">Title : {item.title}</div>
			<div className="ViewContent">{item.text}</div>
			<div className="ViewTime">
				{item.time && <div>최종 수정 : {item.time}</div>}
				<div>최초 작성 : {item.birth}</div>
			</div>
			<div className="ViewButtons">
				<Link to="/">목록</Link>
			</div>
			<div className="ViewButtons">
				<Link to="/" onClick={onRemove}>삭제</Link>
			</div>
			<div className="ViewButtons">
				<Link to={page}>수정</Link>
			</div>
		</div>
	)
})

export default View;
