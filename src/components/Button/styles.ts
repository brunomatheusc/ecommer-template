import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IProps {
	iconLeft?: boolean;
	iconRight?: boolean;
}

export const Container = styled.button<IProps>`
    display: flex;
    align-items: center;

	height: 48px;
	padding: 12px 16px;
	background: var(--color-primary);

	font-size: 15px;
	font-weight: bold;
	color: #fff !important;

	border: 2px solid #46760A;
	box-sizing: border-box;
	border-radius: 12px;		

	${({ iconLeft }) => iconLeft && css`
		svg {
			margin-right: 6px;
			stroke-width: 2;
		}
	`};

	${({ iconRight }) => iconRight && css`
		svg {
			margin-left: 6px;
		}
	`};

	&:hover {
		background: ${shade(0.2, '#46760A')};
	}
`;
