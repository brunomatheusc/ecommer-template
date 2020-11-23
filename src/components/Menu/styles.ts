import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	height: 55px;
	padding: 16px 45px;

	background: #F9F9F9;

	select {
		border: none;
		background: transparent;

		font-size: 15px;
		font-weight: 700;

		& + select {
			margin-left: 40px;
		}
	}
`;
