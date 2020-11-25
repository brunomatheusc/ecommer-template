import styled from 'styled-components';
import Flex from '../../../components/Flex';

export const Container = styled(Flex)`
	margin-left: 34px;
`;

export const Box = styled(Flex)`
	& + & {
		margin-top: 48px;
	}
`;
