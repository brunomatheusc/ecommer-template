import styled, { css } from 'styled-components';

interface IProps {
	flexDirection?: string;
	align?: string;
	justify?: string;
	flex?: number;
}

export const Container = styled.div<IProps>`
	display: flex;

	${({ flexDirection }) => flexDirection && css `
		flex-direction: ${flexDirection};
	`};
	
	${({ align }) => align && css `
		align-items: ${align};
	`};
	
	${({ justify }) => justify && css `
		justify-content: ${justify};
	`};

	${({ flex }) => flex && css`
		flex: ${flex};
	`};
`;
