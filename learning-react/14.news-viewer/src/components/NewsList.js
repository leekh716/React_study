import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../node_modules/axios/index";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

const NewsList = ({ category }) => {
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		//async를 사용하는 함수 따로 선언
		const fetchData = async () => {
			setLoading(true);
			try {
				const query = category === 'all' ? '' : `&category=${category}`;
				const response = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d25f6b8041ec413fa17b4eedd7a0d0cd`
				);
				setArticles(response.data.articles);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, [category]);

	//대기 중일때
	if (loading){
		return <NewsListBlock>대기 중..</NewsListBlock>;
	}

	//아직 articles 값이 설정되지 않았을때
	if (!articles) {
		return null;
	}

	//articles 값이 유효할 때
	return (
		<NewsListBlock>
			{articles.map(article => (
				<NewsItem key={article.url} article={article} />
			))}
		</NewsListBlock>
	)
}

export default NewsList;
