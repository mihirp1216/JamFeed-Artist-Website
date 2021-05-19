import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Grid3 = () => {
	return (
		<Container>
			<NewsTitle>
				<h1>News</h1>
			</NewsTitle>
			<Content>
				<NewsCard>
					<Card
						img="https://assets.website-files.com/5f184e602456824e6abe9eda/5f31634b6730a4868493df23_Cal%20Scruby%20News%201%20WWWS.png"
						title="Cal Scruby Shines On 'While You Were Sleeping'"
						src="Hot New Hip Hop"
					/>
				</NewsCard>
				<NewsCard>
					<Card
						img="https://assets.website-files.com/5f184e602456824e6abe9eda/5f31634b0188e71e62f74b66_Cal%20Scruby%20News%204%20Unsigned.png"
						title="Cal Scruby's Unsigned is a Captivating Introduction"
						src="Hot New Hip Hop"
					/>
				</NewsCard>
				<NewsCard>
					<Card
						img="https://assets.website-files.com/5f184e602456824e6abe9eda/5f31634b5aac9628ba6b99bd_Cal%20Scruby%20News%205%20White%20Privledge.png"
						title="Cal Scruby Is Honest About White Privilege In Hip Hop"
						src="HipHopDX"
					/>
				</NewsCard>
				<NewsCard>
					<Card
						img="https://assets.website-files.com/5fb95cf05977975e3262b629/5fb9869f2425942c47fe6619_Cal%20Scruby%20News%203%20Redman.jpg"
						title="Cal Scruby and Redman Come Back to Life for 'Do Or Die' Video: Premiere"
						src="Billboard"
					/>
				</NewsCard>
				<NewsCard>
					<Card
						img="https://assets.website-files.com/5fb95cf05977975e3262b629/5fb9869f2425944cf0fe661d_Cal%20Scruby%20News%207%20Confidence.png"
						title="L.A. rapper Remembers His HJumble Lebanon Roots"
						src="Cincinnati.com"
					/>
				</NewsCard>
				<NewsCard>
					<Card
						img="https://assets.website-files.com/5fb95cf05977975e3262b629/5fb9869f242594cc2afe6622_Cal%20Scruby%20News%202%20Big%20Year.png"
						title="2015:  Cal Scruby's Big Year"
						src="Cincinnati.com"
					/>
				</NewsCard>
			</Content>
		</Container>
	);
};

export default Grid3;

const Container = styled.div`
	background-color: black;
	height: 100vh;
`;

const NewsTitle = styled.div`
	display: block;
	font-family: 'Montserrat', sans-serif;
	font-size: 40px;
	font-weight: 100;
	text-align: center;
	h1 {
		font-size: 28px;
		font-weight: 100;
		color: white;
		padding-top: 10px;
		padding-bottom: 10px;
	}
`;

const Content = styled.div`
	display: grid;
	margin: 0 25px;
	box-sizing: border-box;
	overflow: hidden;
	cursor: pointer;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	a {
		text-decoration: none;
		max-width: 100%;
		background-color: #252525;
	}
	@media screen and (max-width: 991px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
`;

const NewsCard = styled.a`
	border-radius: 10px;
    display: inline-block;
	margin: 10px;
	box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
	transition: transform 100ms ease-in;
	cursor: pointer;
	&:hover {
		transform: scale(1.04);
		border-radius: 10px;
	}
    img {
		inset: 0;
        object-fit: cover;
        width: 100%;
		height: 30vh;
		max-width: 100%
		vertical-align: center;
		display: inline-block;
		/* margin-top: 10px; */
		border-radius:10px;
    }
    

    h2 {
		display: flex;
		padding-right: 10px;
		padding-left: 10px;
		font-size: 20px;
		line-height: 24px;
		margin-top: 10px;
		margin-bottom: 40px;
		font-family: 'Montserrat', sans-serif;
        color: white;
        font-weight: 500;
	}
	h3 {
        padding-right: 10px;
        padding-bottom: 5px;
        padding-left: 10px;
		margin-top: 10px;
		margin-bottom: 10px;
		font-family: 'Montserrat', sans-serif;
        color: #c5c5c5;
        font-weight: 100;
        font-size: 14px;
	}
	
`;
