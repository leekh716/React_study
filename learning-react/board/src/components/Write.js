import { memo, useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemContext from "./Context";
import './Write.scss';

export function getWriteTime(){
	const date = new Date()
	const now = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, " ")}.${String(date.getDate()).padStart(2, " ")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
	return now
}

const Write = memo(() => {
	const { state, actions } = useContext(ItemContext);
	const [content, setContent] = useState({
		title: '',
		text: '',
		time: '',
		birth: '',
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
				birth: getWriteTime(),
			}
			setContent(nextContent)
			actions.setItems(state.items.concat(nextContent));
		}
	}, [content, actions, state.items]);

	return (
		<div className="Write">
			<input className="WriteTitle" name="title" onChange={onChange} placeholder="제목을 입력하세요." />
			<textarea className="WriteContent" name="text" onChange={onChange} placeholder="내용을 입력하세요." />
			<div className="WriteButtons">
				<Link to="/">취소</Link>
			</div>
			<div className="WriteButtons">
				<Link to="/" onClick={onClick}>등록</Link>
			</div>
		</div>
	)
})

export default Write;
