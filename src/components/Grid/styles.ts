import styled, { css } from 'styled-components';

interface IProps {
	gridTemplateColumns: string;
	gridGap?: number;
}

export const Container = styled.div<IProps>`
	display: grid;
	grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns };

	${({ gridGap }) => gridGap && css `
		grid-gap: ${gridGap}px;
	`}
`;
