import styled from 'styled-components';

export const Container = styled.div`
	height: 130px;
	padding: 40px 45px;
	background: var(--color-white);

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;

	}
`;

export const LogoHeader = styled.img``;

export const Search = styled.div`
	display: flex;
	align-items: center;

	width: 500px;
	height: 42px;

	background-color: #f9f9f9;
	box-sizing: border-box;
	border: 1px solid #d1d1d1;
	border-radius: 12px;

	select, input, button {
		border: none;
		background: transparent;
	}

	select {
		padding: 10px 16px;

		font-size: 16px;
		font-weight: bold;
	}

	input {
		border-left: solid 1px #ccc;
		width: 262px;

		padding: 0 24px;
	}
`;

export const InputSearch = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	flex: 1;

	margin-left: 24px;
	margin-right: 16px;
`;

export const Actions = styled.div`
	display: flex;
	align-items: center;

	> div {
		margin-left: 34px;
	}
`;

export const Bag = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`;

export const Counter = styled.div`
	width: 16px;
	height: 16px;
	
	position: relative;
	right: 30px;
	top: 12px;

	font-size: 12px;
	color: var(--color-white);
	text-align: center;

	border: none;
	border-radius: 50%;
	background: #E6704B;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;