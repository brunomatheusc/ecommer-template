import styled, { css } from 'styled-components';

interface TabProps {
	active?: boolean;
}

export const Container = styled.div<TabProps>`
	h2 {
		font-weight: 18px;
		font-size: 600;
		min-width: 163px;
	}

	padding-bottom: 16px;
	border-bottom: 1px solid #f5f5f5;

	${({ active }) => active && css`
		border-bottom: 2px solid var(--color-primary);
	`};

	& + & {
		h2 {
			margin-left: 32px;
		}
	}
`;
