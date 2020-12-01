import styled from 'styled-components';

export const Container = styled.div`
	height: 48px;
	background: #fdfdfd;

	display: flex;
	align-items: center;

	div {
		padding: 16px 0;

		span {
			font-size: 12px;
			font-weight: 400;

			&:nth-child(1) {
				color: #a9a9a9;
			}
		}
	}

`;
