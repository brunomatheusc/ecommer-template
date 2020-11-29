import styled, { css } from 'styled-components';
import Flex from '../../components/Flex';
import Grid from '../../components/Grid';

export const Container = styled.div``;

export const Wrapper = styled(Flex)``;

export const ProductBox = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 1;
`;

export const ProductImage = styled(Flex)`
	margin-right: 32px;
`;

export const Image = styled(Flex)`
	height: 440px;
	width: 100%;

	background: #f9f9f9;
	border-radius: 12px;
`;

export const ProductInfo = styled(Flex)`
	> div small {
		color: #a9a9a9;
		font-size: 12px;
		font-weight: 400;

		margin-left: 8px;
		text-decoration: underline;
	}

	> span {
		padding: 40px 0;
	}
`;

export const ButtonSimple = styled.h3`
	display: flex;
	align-items: center;
	padding: 6px 12px;

	font-size: 15px;
	font-weight: 700;

	svg {
		margin-right: 6px;
	}

	& + & {
		margin-left: 16px;
	}
`;

export const WishList = styled(Flex)``;

export const GridWrapper = styled(Grid)`
	flex: 1;

	& + & {
		margin-left: 32px;
	}
`;

export const Box = styled(Flex)`
	margin: 40px 0 24px 0;
	background: #ffffff;

	border: 1px solid #f5f5f5;
	box-sizing: border-box;
	border-radius: 12px;

	button {
		margin-left: 24px;
	}
`;

export const Price = styled.div`
	padding: 16px 0;

	h3 {
		font-size: 26px;
		font-weight: 600;
		color: #6a983c;
	}

	strong {
		font-size: 12px;
		font-weight: 600;
		color: #a9a9a9;
		text-decoration: line-through;
	}
`;
export const InputSimple = styled.div`
	height: 48px;
	width: 120px;
	margin-left: 90px;
	background: #F9F9F9;

	border: 1px solid #D1D1D1;
	box-sizing: border-box;
	border-radius: 12px;	

	> div {
		padding: 14px 16px;	

		span {
			padding-right: 16px;
			border-right: solid 1px #ccc;
		}
	}

	select, input, button {
		border: none;
		background: transparent;
	}

	select {
		padding-left: 16px;
		font-size: 16px;
		font-weight: bold;
	}

	input {
		padding: 0 24px;
	}
`;

export const Title = styled.span`
	font-size: 14px;
	font-weight: 400;
	color: #a9a9a9;
`;

export const Description = styled.span`
	font-size: 14px;
	font-weight: 400;
	color: #151515;
`;

export const Badge = styled.span`
	display: table;
	margin: 16px;
	padding: 4px 10px;

	background: #f4f8ec;
	border-radius: 12px;
	color: #6a983c;

	& + & {
		margin-left: 0;
	}
`;

export const Tabs = styled(Flex)`
	margin-top: 62px;
	padding-bottom: 16px;

	> div {
		cursor: pointer;
	}
`;

export const Tab = styled.div`
	& + & {
		margin-left: 32px;
	}
`;

interface TabActiveProps {
	active: boolean;
}

export const TabActive = styled(Flex)<TabActiveProps>`
	margin-top: 48px;

	h3 {
		margin-bottom: 8px;
	}

	h3 + span {
		margin-bottom: 32px;
	}

	${({ active }) => !active && css`
		display: none;
	`};

	table {
		border-collapse: collapse;
	}

	table thead {
		text-align: left;
	}

	table thead th {
		padding-bottom: 6px;
		vertical-align: bottom;
	    border-bottom: 2px solid #dee2e6;		
	}

	tbody tr td {
		padding: 12px 0;
	}

	tbody tr:nth-of-type(odd) {
		background-color: rgba(0,0,0,.05);
	}
`;

export const RelatedProducts = styled(Flex)`
	margin-top: 64px;

	> div {
		margin-bottom: 32px;
	}
`;