import React from 'react';
import styled from 'styled-components';

const Card = ({ img, title,description, src }) => {
	return (
		<Container>
			<CardNews>
				<a href="#">
					<img src={img} alt="" />
					<CardInfo>
						<h2>{title}</h2>
						<p>{description}</p>
						<h3>{src}</h3>
					</CardInfo>
				</a>
			</CardNews>
		</Container>
	);
};

export default Card;

const Container = styled.div`

`;
const CardNews = styled.div`

`;

const CardInfo = styled.div`

`;



// import React from 'react';
// import styled from 'styled-components';
// import Card from './Card';

// const RowAndColumns = () => {
// 	return (
// 		<Container>
// 			<NewsTitle>
// 				<h1>News</h1>
// 			</NewsTitle>
// 			<Content>
// 				<NewsCard>
// 					<Card
// 						img="https://assets.website-files.com/5f184e602456824e6abe9eda/5f31634b6730a4868493df23_Cal%20Scruby%20News%201%20WWWS.png"
// 						title="Cal Scruby Shines On 'While You Were Sleeping'"
// 						description="Last year, Los Angeles based emcee Cal Scruby turned heads with his
// 						Unsigned project, impressing new fans with his slick flow and clever
// 						pen game. And while he remains relatively under-the-radar, his brand
// 						new album While You Were Sleeping should go a long way in raising
// 						his stock something nice. There's plenty to enjoy on the lengthy
// 						seventeen track effort, with Scruby managing to keep the bars sharp
// 						without losing sight of the vibes."
// 						src="Hot New Hip Hop"
// 					/>
// 				</NewsCard>
// 			</Content>
// 		</Container>
// 	);
// };

// export default RowAndColumns;

// const Container = styled.div`
// 	padding: 10px;
// 	background-color: black;
// `;

// const NewsTitle = styled.div`
// 	display: block;
// 	font-family: 'Montserrat', sans-serif;
// 	font-size: 40px;
// 	font-weight: 100;
// 	text-align: center;
// 	h1 {
// 		margin-top: 10px;
// 		font-size: 28px;
// 		font-weight: 100;
// 		color: white;
// 		padding-top: 10px;
// 		padding-bottom: 10px;
// 	}
// `;

// const Content = styled.div`
// 	display: grid;
// 	margin-right: 10vw;
// 	margin-left: 10vw;
// 	margin-bottom: 20px;
// 	flex-direction: row;
// 	align-items: center;
// 	justify-content: flex-end;
// 	box-sizing: border-box;
// 	overflow: hidden;
// 	cursor: pointer;
// 	grid-auto-columns: 1fr;
// 	grid-column-gap: 16px;
// 	grid-row-gap: 16px;
// 	grid-template-columns: repeat(2, minmax(0, 1fr));
// 	a {
// 		text-decoration: none;
// 		max-width: 100%;
// 		/* background-color: #252525; */
// 	}
// 	@media screen and (max-width: 991px) {
// 		grid-template-columns: 1fr 1fr;
// 	}
// 	@media (max-width: 768px) {
// 		grid-template-columns: repeat(1, minmax(0, 1fr));
// 	}
// `;

// const NewsCard = styled.a`
// 	margin-right: 20px;
// 	margin-left: 20px;
// 	border-radius: 20px;
//     display: block;
// 	margin: 10px;
// 	box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
// 	transition: transform 100ms ease-in;
// 	cursor: pointer;
// 	&:hover {
// 		transform: scale(1.07);
// 		border-radius: 10px;
// 	}
//     img {
//         object-fit: cover;
//         /* width: 100%; */
// 		height: 50vh;
// 		padding: 20px;
// 		max-width: 100%
//     }
    

//     h2 {

// 		font-size: 24px;
// 		line-height: 30px;
// 		margin-top: 20px;
// 		font-family: 'Lato', sans-serif;
//         color: white;
//         font-weight: 500;
// 	}
// 	p {
// 		font-size: 12px;
// 		line-height: 24px;
// 		margin-top: 0px;
// 		margin-bottom: 10px;
// 		font-family: 'Lato', sans-serif;
//         color: white;
// 	}
// 	h3 {
// 		margin-bottom: 10px;
// 		font-family: 'Montserrat', sans-serif;
//         color: #c5c5c5;
// 		line-height: 18px;
//         font-weight: bold;
//         font-size: 10px;
// 	}
	
// `;

