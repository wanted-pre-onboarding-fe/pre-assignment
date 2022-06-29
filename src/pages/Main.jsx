import React from 'react';
import axios from 'axios';

import Gnb from '../component/Gnb';
// import Footer from "../component/Footer";

class Main extends Component {
	constructor(props) {
		super(props);

		const query = new URLSearchParams(props.location.search);
		const day = query.get('day');

		this.state = {
			day: day || 'mon', //디폴트로 월요일
			webtoonList: [] //초기 리스트는 비어있습니다.
		};
	}

	componentDidMount() {
		this._getList();
	}

	componentDidUpdate(prevProps) {
		//요일이 바뀌면 다시 setState 처리
		let prevQuery = new URLSearchParams(prevProps.location.search);
		let prevDay = prevQuery.get('day');

		let query = new URLSearchParams(this.props.location.search);
		let day = query.get('day');

		if (prevDay !== day) {
			this.setState({
				day
			});
		}
	}
	render() {
		return (
			<div>
				<Gnb />
			</div>
		);
	}
}

export default Main;
