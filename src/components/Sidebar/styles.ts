import styled from 'styled-components';

export const Container = styled.div`
	width: 270px;
	height: 100%;

	display: flex;
	flex-direction: column;
`;

export const Categories = styled.div`
	display: flex;
	flex-direction: column;

	div + div {
		margin-top: 12px;
	}

	margin-bottom: 48px;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	& + div {
		margin-top: 12px;
	}

	input {
		width: 24px;
		height: 24px;

		& + svg {
			margin-left: 10px;
		}
	}

	input[type="range"] {
		width: 251px;
	}

	span {
		font-size: 14px;
		font-weight: 400;
		color: #151515;
		
		margin-left: 8px;
	}
`;

export const Title = styled.h3`
	font-size: 18px;
	font-weight: 600;
	color: #151515;

	margin-bottom: 16px;
`;

export const CategoryWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CategoryName = styled.span`
	font-size: 14px;
	font-weight: 400;
`;

export const Quantity = styled.div`
	padding: 0 8px;

	font-size: 12px;
	font-weight: 600;

	background: #F4F8EC;
	border-radius: 12px;
`;

export const Brands = styled.div`
	margin-bottom: 48px;
`;

export const Rating = styled.div`
	margin-bottom: 48px;
`;

export const Price = styled.div`
	margin-bottom: 48px;
`;

export const MinMax = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-right: 18px;
	margin-bottom: 30px;

	div {
		display: flex;
		flex-direction: column;
	}

	input {
		height: 42px;
		width: 100px;

		padding: 11px 20px;

		background: #F9F9F9;
		border: 1px solid #D1D1D1;
		box-sizing: border-box;
		border-radius: 12px;		
	}
`;

export const Finish = styled.div`
	display: flex;
	justify-content: flex-start;

	button {
		height: 48px;
		padding: 12px 16px;
		background: var(--color-primary);

		font-size: 15px;
		font-weight: bold;
		color: #fff;

		border: 2px solid #46760A;
		box-sizing: border-box;
		border-radius: 12px;		

		& + button {
			margin-left: 34px;
		}
	}
`;