import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IProps {
	iconLeft?: boolean;
	iconRight?: boolean;
	size?: string;
	buttonType?: string;
}

export const Container = styled.button<IProps>`
    display: flex;
    align-items: center;

	font-size: 15px;
	font-weight: bold;

	border: 2px solid #46760A;
	box-sizing: border-box;
	border-radius: 12px;		

	height: ${({ size }) => size === 'small' && '36px' || size === 'medium' && '48px' || '56px' };
	padding: ${({ size }) => size === 'small' && '12px' || size === 'medium' && '12px 16px' || '12px 48px' };
	border: ${({ buttonType }) =>  buttonType === 'stroke' && '2px solid #92c064' || buttonType === 'colored' && '2px solid #46760a;' || buttonType === 'bright' && 'none' || 'none' };
	background: ${({ buttonType }) =>  buttonType === 'stroke' && 'none' || buttonType === 'colored' && '#6a983c' || buttonType === 'bright' && '#f5f5f5' || '#fff' };
	color: ${({ buttonType }) =>  buttonType === 'colored' && '#fff' || '#000' };
	
	${({ iconLeft }) => iconLeft && css<IProps>`
		svg {
			margin-right: 6px;
			stroke-width: 2;
		}
	`};

	${({ iconRight }) => iconRight && css<IProps>`
		svg {
			margin-left: 6px;
		}
	`};

	&:hover {
		background: ${shade(0.2, '#46760A')};
	}
`;
