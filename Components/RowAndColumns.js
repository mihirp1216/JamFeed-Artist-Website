import React from 'react';
import styled from 'styled-components';

const RowAndColumns = () => {
	return (
		<Container>
			<NewsTitle>
				<h1>News</h1>
			</NewsTitle>
			<Content>
				<NewsCard>
					<img
						src="https://assets.website-files.com/5f184e602456824e6abe9eda/5f31634b6730a4868493df23_Cal%20Scruby%20News%201%20WWWS.png"
						alt=""
					/>
				</NewsCard>
				<Card>
					<h2>Cal Scruby Shines On "While You Were Sleeping"</h2>
					<p>
						Last year, Los Angeles based emcee Cal Scruby turned heads with his
						Unsigned project, impressing new fans with his slick flow and clever
						pen game. And while he remains relatively under-the-radar, his brand
						new album While You Were Sleeping should go a long way in raising
						his stock something nice. There's plenty to enjoy on the lengthy
						seventeen track effort, with Scruby managing to keep the bars sharp
						without losing sight of the vibes.
					</p>
					<h3>Hot New Hip Hop</h3>
				</Card>
				<NewsCard>
					<img
						src="https://assets.website-files.com/5fb95cf05977975e3262b629/5fb97d70d6eff26af625960b_Cal%20Scruby%20News%204%20Unsigned.png"
						alt=""
					/>
				</NewsCard>
				<Card>
					<h2>Cal Scruby's "Unsigned" Is A Captivating Introduction</h2>
					<p>
						Cal Scruby name is beginning to buzz, a flashback to the days in
						which “<em>Unsigned </em> Hype” carried special significance. Since
						departing his home state of Ohio in favor of Los Angeles’ eternal
						artistic haven, Scruby has been honing each attribute of his
						skillset. His Jack-Of-All-Trades nature is evident across the
						fifteen track runtime of his recent album
					</p>
					<h3>Hot New Hip Hop</h3>
				</Card>
				<NewsCard>
					<img
						src="https://assets.website-files.com/5fb95cf05977975e3262b629/5fb97d70d6eff2c3c4259616_Cal%20Scruby%20News%205%20White%20Privledge.png"
						alt=""
					/>
				</NewsCard>
				<Card>
					<h2>Cal Scruby Is Honest About White Privilege In Hip Hop</h2>
					<p>
						Ohio-born rap artist Cal Scruby absolutely loathes the term “white
						rapper.”It’s not so much that the 28-year-old is ashamed to be a
						rapper who happens to be white. The assumption of how the context of
						his music should play out is what really irks him. Never mind,
						there’s the constant struggle to remain in the good graces of his
						supporters.
					</p>
					<h3>Hip Hop DX</h3>
				</Card>
			</Content>
		</Container>
	);
};

export default RowAndColumns;

const Container = styled.div`
	background-color: black;
	/* height: 100vh; */
`;

const NewsTitle = styled.div`
	display: block;
	font-family: 'Montserrat', sans-serif;
	font-size: 40px;
	font-weight: 100;
	text-align: center;
	h1 {
		/* margin-top: 10px; */
		font-size: 28px;
		font-weight: 100;
		color: white;
		padding-top: 10px;
		padding-bottom: 10px;
	}
`;

const Content = styled.div`
	display: grid;
	margin-right: 10vw;
	margin-left: 10vw;
	margin-bottom: 20px;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	box-sizing: border-box;
	overflow: hidden;
	cursor: pointer;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	grid-template-rows: auto;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	@media screen and (max-width: 991px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
`;

const NewsCard = styled.div`
	display: block;
	img {
		object-fit: cover;
		width: 92%;
		height: 45vh;
		padding: 20px;
		max-width: 100%;
		vertical-align: middle;
		display: inline-block;
		border: 0;
	}
`;

const Card = styled.div`
	margin-right: 20px;
	margin-left: 20px;
	display: block;
	h2 {
		font-size: 21px;
		line-height: 30px;
		margin-top: 10px;
		font-family: 'Lato', sans-serif;
		color: #ccc;
		font-weight: bold;
	}
	p {
		font-size: 10px;
		line-height: 18px;
		margin-top: 10px;
		margin-bottom: 10px;
		font-family: 'Lato', sans-serif;
		color: #ccc;
	}
	h3 {
		margin-top: 12px;
		font-family: 'Lato', sans-serif;
		color: #ccc;
		line-height: 18px;
		font-weight: bold;
		font-size: 10px;
	}
`;
