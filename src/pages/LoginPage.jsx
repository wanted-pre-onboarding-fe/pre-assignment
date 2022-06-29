import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 100px;
	padding: 30px 30px 40px 30px;
	box-shadow: 0px 0px 8px #2b2b2bc1;
	border-radius: 5px;
`;

const Input = styled.input`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 45px;
	margin: 0 0 8px;
	padding: 5px 39px 5px 11px;
	border: solid 1px #dadada;
	background: #fff;
	box-sizing: border-box;
	border-radius: 5px;
`;

const PageTitle = styled.h1`
	text-align: left;
	font-size: 20px;
	font-weight: 700;
	padding: 15px 3px;
`;

const Button = styled.div`
	font-size: 18px;
	font-weight: 700;
	line-height: 49px;
	display: block;
	width: 100%;
	height: 49px;
	margin: 7px 0 7px;
	cursor: pointer;
	text-align: center;
	color: #686363;
	border: solid 1px;
	border-color: #9ec9fa;
	border-radius: 5px;
	&:hover {
		background-color: #226abb;
		color: #f1f8ff;
	}
	/* background-color: #03c75a; */
	${({ disabled }) =>
		disabled &&
		`
    background-color: #efefef;
  `};
`;

function LoginPage() {
	return (
		<body>
			<Container styled="backgroudColor: '#f1f1f1';">
				{/* <h1>Login page</h1> */}
				<div>
					<PageTitle>Login</PageTitle>
				</div>
				<Input id="id" name="id" placeholder="아이디를 입력해주세요" />
				<Input id="password" name="password" type="password" placeholder="비밀번호를 입력해주세요" />
				<Button>로그인</Button>
			</Container>
		</body>
	);
}

export default LoginPage;
