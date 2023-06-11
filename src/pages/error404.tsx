import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { AppRoutes } from 'utils/routes';


const Container = styled.main`
  display: flex;
  justify-content: center;
  .box {
    width:100%;
    max-width: 500px;
    display:flex;
	justify-content: center;
	flex-direction: column;
	gap:10px;
	color:orangered;
	margin-top: 100px;
	&__section {
		width:100%;
		text-align:center;
		font-size: var(--fontSize18);
		a {
			color: blue;
		}
	}
  }
`

function Error404() {

	return (
		<Container>
			<div className='box'>
				<div className='box__section'>
					<h1>Page not found</h1>
				</div>
				<div className='box__section'>
					<span>Move to </span>
					<Link to={AppRoutes.homePage}>Home page</Link>
				</div>
			</div>
		</Container>
	);
}

export default Error404;