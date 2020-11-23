import styled, { css } from 'styled-components';
import Flex from '../../components/Flex';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
    flex-grow: 1;
	margin-left: 32px;  
`;

export const ProductBox = styled.div`
	display: flex;
	height: 280px;

	background: #ffffff;

	border: 1px solid #d1d1d1;
	box-sizing: border-box;
	border-radius: 12px;	

	& + div {
		margin-top: 32px;
	}
`;

export const Image = styled.div`
	height: 100%;
	width: 268px;

	background: #f9f9f9;
	border-radius: 12px;
`;

export const ProductInfo = styled.div`
	width: 45%;
	padding: 32px 32px 36px 32px;
`;

export const ProductValue = styled(Flex)`
	width: 30%;
	
	padding: 32px 32px 36px 32px;

	> span, > strong {
		color: #a9a9a9;
	}

	span {
		font-size: 12px;
		font-weight: 400;
		margin-bottom: 12px;
	}

	button + button {
		margin-top: 12px;
	}
`;

export const Star = styled.div`
	margin-top: 8px;
`;

export const Extra = styled.div`
	margin-top: 25px;

	span {
		font-size: 14px;
		font-weight: 400;
		color: #a9a9a9;
	}
`;