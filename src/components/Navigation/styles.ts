import styled from 'styled-components';

export const Container = styled.div`
	height: 64px;
	padding: 8px 0;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Options = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Frame = styled.div`
	display: flex;
	align-items: center;

	& + div {
		margin-left: 24px;
	}

	svg {
		margin-right: 4px;
	}
`;

export const Badge = styled.div`
	width: 50px;
	text-align: center;

	background: #F4F8EC;
	border-radius: 12px;

	margin-right: 4px;
`;