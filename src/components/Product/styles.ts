import styled from 'styled-components';

export const Container = styled.div`
	height: 350px;
	padding: 16px;

	border: 1px solid #d1d1d1;
	box-sizing: border-box;
	border-radius: 12px;

	span {
		font-size: 12px;
		font-weight: 400;
		color: #575757;
	}  
`;

export const Image = styled.div`
	height: 180px;
	background: #f9f9f9;
	border-radius: 12px;
`;

export const Title = styled.h2`
	margin-top: 16px;
	margin-bottom: 0;
	font-size: 15px;
	font-weight: 500;
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-top: 16px;

	h3 {
		margin: 0;
	}

	button {
		margin: 0;
	}
`;

export const Price = styled.h3`
	font-size: 18px;
	font-weight: 600;
`;