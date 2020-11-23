import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    display: flex;
    align-items: center;

	height: 48px;
	padding: 12px 16px;
	background: #6A983C;

	font-size: 15px;
	font-weight: bold;
	color: #fff !important;

	border: 2px solid #46760A;
	box-sizing: border-box;
	border-radius: 12px;		
	
	&:hover {
		background: ${shade(0.2, '#46760A')};
	}
`;
