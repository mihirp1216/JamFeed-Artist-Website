import React from 'react';
import styled from 'styled-components';

const ThreeColumns = () => {
	return (
		<Container>
			<NewsTitle>
				<h1>News</h1>
			</NewsTitle>
			<Content>
				<Wrapper>
					<Columns>
						<Blog>
							<Image>
								<img
									src="https://assets.website-files.com/5fb95cf05977975e3262b629/5fb9bfbd86ad1b1987112072_Jimmy%20News%203.jpeg"
									alt=""
								/>
							</Image>
							<h2>Jimmy the Human - News Article 1</h2>
							<TagLine>JAMFEED</TagLine>
						</Blog>
					</Columns>
					<Columns>
						<Blog>
							<Image>
								<img
									src="https://assets.website-files.com/5fb95cf05977975e3262b629/5fb9bfbd86ad1b59bc112062_Jimmy%20News%202.jpeg"
									alt=""
								/>
							</Image>
							<h2>Jimmy the Human - News Article 2</h2>
							<TagLine>HOT NEW HIP HOP</TagLine>
						</Blog>
					</Columns>
					<Columns>
						<Blog>
							<Image>
								<img
									src="https://assets.website-files.com/5fb95cf05977975e3262b629/5fb9bfbd86ad1b1c3c112044_2F4wzAEN.jpg"
									alt=""
								/>
							</Image>
							<h2>Jimmy the Human - News Article 3 - LONGER TEXT BLOCK</h2>
							<TagLine>THAT NEW JAM</TagLine>
						</Blog>
					</Columns>
				</Wrapper>
			</Content>
		</Container>
	);
};

export default ThreeColumns;

const Container = styled.div`
	background-color: black;
	height: 100vh;
`;

const NewsTitle = styled.div`
	display: block;
	justify-content: center;
	font-family: 'Montserrat', sans-serif;
	text-align: center;
	h1 {
		color: white;
		font-weight: 100;
		padding: 10px 0px;
		font-size: 28px;
	}
`;

const Content = styled.div`
	margin-right: 81.5px;
	margin-left: 81.5px;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	/* margin-right: 81.5;
	margin-left: 81.5; */
	@media screen and (max-width: 991px) {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Columns = styled.div`
	display: inline-block;
	width: 300px;
	margin-right: 20px;
`;

const Blog = styled.div`
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
	h2 {
		color: white;
		font-size: 25px;
		line-height: 36px;
		margin-top: 20px;
		font-weight: bold;
		margin-bottom: 10px;
		font-family: 'Montserrat', sans-serif;
	}
`;

const Image = styled.div`
background-position: 50% 50%;
object-fit: cover;
width: 100%;
border-radius: 10px;
img {
object-fit: cover;
width: 100%;
height: 270px;
border-radius: 10px;
width: 92%;
`;

const TagLine = styled.div`
	color: white;
	display: block;
	opacity: 0.6;
	font-size: 12px;
	letter-spacing: 2px;
	text-transform: uppercase;
	font-family: 'Montserrat', sans-serif;
`;
