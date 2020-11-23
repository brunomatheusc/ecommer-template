import styled from 'styled-components';
import Badge from './../Badge/index';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 45px;

	a {
		font-size: 14px;
		font-weight: 400;
		text-decoration: none;
		color: #6a983c;

		margin: 8px 0;
	}
`;

styled(Badge)`
	& + Badge {
		margin-right: 10px;
	}	
`;
