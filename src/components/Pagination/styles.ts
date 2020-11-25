import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-top: 60px;

	> div {
		span:nth-child(1) {
			margin-left: 4px;
			color: #a9a9a9;
		}

		span:nth-child(4) {
			color: #a9a9a9;
		}

		span + span {
			margin-left: 8px;
		}
	}
`;