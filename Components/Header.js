import React from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = () => {
	return (
		<div>
			<Nav>
				<NavMenu>
					<a>
						<span>TEMPLATES</span>
						<ExpandMoreIcon
							style={{ color: 'white', fontSize: '18px', cursor: 'pointer' }}
						/>
					</a>
					<a href="/">
						<span>HOME</span>
						<ExpandMoreIcon style={{ color: 'white', fontSize: '18px' }} />
					</a>
					<a>
						<span>MUSIC</span>
						<ExpandMoreIcon style={{ color: 'white', fontSize: '18px' }} />
					</a>
					<a>
						<ShowDropDown>
							<span>NEWS</span>
							<ExpandMoreIcon style={{ color: 'white', fontSize: '18px' }} />
							<DropDown>
								<a href="/Grid3">
									<span>News - Grid 3</span>
								</a>
								<a href="/rowandcolumns">
									<span>News - 1 Row 2 Columns</span>
								</a>
								<a href="/3columns">
									<span>News - 3 Columns</span>
								</a>
							</DropDown>
						</ShowDropDown>
					</a>
					<a>
						<span>TOUR</span>
						<ExpandMoreIcon style={{ color: 'white', fontSize: '18px' }} />
					</a>
					<a>
						<span>VIDEOS</span>
						<ExpandMoreIcon style={{ color: 'white', fontSize: '18px' }} />
					</a>
					<a>
						<span>MERCH</span>
						<ExpandMoreIcon style={{ color: 'white', fontSize: '18px' }} />
					</a>
					<a>
						<span>ABOUT</span>
						<ExpandMoreIcon style={{ color: 'white', fontSize: '18px' }} />
					</a>
					<a>
						<span>CONTACT</span>
						<ExpandMoreIcon style={{ color: 'white', fontSize: '18px' }} />
					</a>
					<a>
						<span>PHOTOS</span>
						<ExpandMoreIcon style={{ color: 'white', fontSize: '18px' }} />
					</a>
					<a>
						<span>PAGES</span>
						<ExpandMoreIcon style={{ color: 'white', fontSize: '18px' }} />
					</a>
				</NavMenu>
			</Nav>
		</div>
	);
};

export default Header;

const Nav = styled.div`
	display: flex;
	z-index: 1000;
	height: 55px;
	position: relative;
	top: 0%;
	left: 0%;
	right: 0%;
	background-color: #252525;
	text-align: center;
	align-items: center;
	justify-content: space-evenly;
`;

const NavMenu = styled.div`
	overflow: hidden;
	display: flex;
	width: 100%;
	margin: 0 auto;
	list-style: none;
	height: 210px;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	position: relative;

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20px;

		span {
			font-family: 'Montserrat', sans-serif !important;
			float: left;
			display: flex;
			color: #f2f2f2;
			text-align: center;
			padding: 5.5px 5px;
			font-size: 9px;
			cursor: pointer;

			&:hover {
				color: #28a327;
			}
		}
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const DropDown = styled.div`
	position: absolute;
	top: 48px;
	right: 0px;
	background: rgb(19, 19, 19);
	border: 1px solid rgba(151, 151, 151, 0.34);
	border-radius: 4px;
	padding: 5px;
	font-size: 8px;
	font-family: 'Montserrat', sans-serif !important;
	width: 142px;
	opacity: 0;
	/* z-index: 1000; */
`;

const ShowDropDown = styled.div`
	position: relative;
	height: 48px;
	width: 48px;
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;

	&:hover {
		${DropDown} {
			opacity: 1;
			transition-duration: 1s;
		}
	}
`;
