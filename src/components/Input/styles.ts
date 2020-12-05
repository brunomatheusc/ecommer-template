import styled from 'styled-components';
import Flex from '../Flex';

export const Container = styled(Flex)`
	input {
		height: 42px;
		padding: 11px 16px 12px 21px;
		background: #f9f9f9;

		font-size: 14px;
		font-weight: 400;
		color: #a9a9a9;

		border: 1px solid #d1d1d1;
		box-sizing: border-box;
		border-radius: 12px;  
	}

	label {
		font-size: 12px;
		font-weight: 600;
		color: #151515;
	}

	input[type='text'] {
		background: transparent;
		border: none;
	}
`;
