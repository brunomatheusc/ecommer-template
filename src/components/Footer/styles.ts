import styled from 'styled-components';
import Badge from './../Badge/index';
import Flex from './../Flex/index';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 64px 45px;

	a {
		font-size: 14px;
		font-weight: 400;
		text-decoration: none;
		color: #6a983c;

		margin: 8px 0;
	}
`;

export const Wrapper = styled(Flex)`
	& + & {
		margin-top: 48px;
	}
`;

styled(Badge)`
	& + Badge {
		margin-right: 10px;
	}	
`;
