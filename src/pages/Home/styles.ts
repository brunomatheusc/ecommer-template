import styled from 'styled-components';
import Flex from '../../components/Flex';

import background from '../../assets/background-banner.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

	h3 {
		font-size: 18px;
		font-weight: 600;
	}
`;

export const Basics = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;

	height: 280px;

	h3 {
		margin-bottom: 16px;
	}

	a {
		color: #6a983c;
	}

	a + a {
		margin-top: 12px;
	}

	button {
		margin-top: 48px;
	}
`;

export const Banners = styled(Flex)`
	height: 280px;
	width: 38%;

	div:nth-child(1) {
		margin: 48px 33px;
	}

	button {
		margin: 48px 0 32px 32px;
	}

	background: #f4f8ec;
	border-radius: 12px;	
	background-image: url(${background});
	background-size: cover;
`;

export const BestSellings = styled.div`

`;

export const MoreProducts = styled.div`

`;

export const Quotes = styled.div`

`;

export const Headline = styled.div`

`;