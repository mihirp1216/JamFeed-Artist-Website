import React from 'react';
import styled from 'styled-components';

const Home = () => {
	return (
        <Container>
			<Content>
				<CTA>
					<CTALogoOne src="https://assets.website-files.com/5fb95cf05977975e3262b629/5fb95ebaec0945189f8d533a_JamFeed%20Text%20Only%20(XL%20-%20white%20%26%20green)%20(2450x650).png" alt="" />
					<Description>
                        Hover on the navbar menu to view each individual component for artist website templates.
					</Description>
				</CTA>
				<BgImage />
			</Content>
		</Container>
	);
};

export default Home;

const Container = styled.section`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100vh;
`;

const Content = styled.div`
	margin-bottom: 10vw;
	width: 100%;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 40px;
	height: 100%;
`;

const BgImage = styled.div`
	height: 100%;
	background-position: top;
	background-size: cover;
	background-repeat: no-repeat;
	background-color: black;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	z-index: -1;
`;

const CTA = styled.div`
	max-width: 650px;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const CTALogoOne = styled.img`
	margin-bottom: 12px;
	max-width: 600px;
	min-height: 1px;
	display: block;
	width: 100%;
`;

const Description = styled.p`
	color: white;
	font-size: 10px;
	margin: 0 0 15px;
	line-height: 1.5;
	letter-spacing: 1px;
    font-family: arial;
`;
