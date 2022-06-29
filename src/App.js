import React from 'react';
// import styled from "styled-components";
import LoginPage from './pages/LoginPage';

// import PreAssignmentGuide from './pages/PreAssignmentGuide';
// function App() {
//   return <PreAssignmentGuide />;
// }
function App() {
	var container = {
		backgroundColor: 'white',
		width: '40%',
		margin: '0 auto'
	};
	return (
		<div style={container}>
			<LoginPage />
			<hr />
			{/* <JoinPage /> */}
			<hr />
		</div>
	);
}

export default App;
