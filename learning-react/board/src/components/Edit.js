import { memo, useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemContext from "./Context";
import { getWriteTime } from "./Write";
import './Write.scss';

const Edit = memo(({ match }) => {
	const { state, actions } = useContext(ItemContext);
	const { birth } = match.params;
	const item = state.items[state.items.findIndex(item => item.birth === birth)];

	const [content, setContent] = useState({
		title: item.title,
		text: item.text,
		time: item.time,
		birth: item.birth
	});

	const onChange = useCallback(e => {
		const nextContent = {
			...content,
			[e.target.name]: e.target.value
		};
		setContent(nextContent);
	}, [content]);

	const onClick = useCallback(() => {
		if (content.title === '') {
			alert('제목을 입력하세요.');
		}
		else {
			const nextContent = {
				...content,
				time: getWriteTime(),
			}
			setContent(nextContent)
			const nextItem = [...state.items];
			nextItem.splice(state.items.findIndex(item => item.birth === birth), 1, nextContent)
			actions.setItems(nextItem);
		}
	}, [content, actions, state.items, birth]);

	return (
		<div className="Write">
			<input className="WriteTitle" name="title" onChange={onChange} defaultValue={item.title} />
			<textarea className="WriteContent" name="text" onChange={onChange} defaultValue={item.text} />
			<div className="WriteButtons">
				<Link to="/">취소</Link>
			</div>
			<div className="WriteButtons">
				<Link to="/" onClick={onClick}>완료</Link>
			</div>
		</div>
	)
})

export default Edit;
