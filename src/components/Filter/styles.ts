import styled from 'styled-components';

export const Container = styled.div`
	height: 108px;

	padding: 16px 0;
`;

export const Filters = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: row;

	& + div {
		margin: 16px 0;
	}
`;

export const AppliedFilters = styled.div`
	display: flex;
	align-items: flex-start;

	font-size: 12px;
	font-weight: 600;

	span {
		color: #a9a9a9;
		margin-right: 12px;
	}

	div + div {
		margin-left: 12px;
	}
`;

export const Component = styled.div`
	display: flex;
	align-items: center;

	height: 42px;

	background-color: #f9f9f9;
	box-sizing: border-box;
	border: 1px solid #d1d1d1;
	border-radius: 12px;

	padding: 9px 16px;

	> div {
		display: flex;
		align-items: center;

		input {
			width: 24px;
			height: 24px;
		}

		span {
			margin-left: 8px;
		}

		& + div {
			margin-left: 16px;
		}
	}

	/*
	input[type='radio']:checked:before {
		content: " ";
		display: inline-block;
		position: relative;
		color: #000;
	}

	input[type='radio']:checked:after {
		width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #ffa500;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
	}
	*/

	select {
		border: none;
		background: transparent;
	}

	& + div {
		margin-left: 24px;
	}
`;

export const Badge = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #ebebeb;

	padding: 0 8px;

	background: #F4F8EC;
	border-radius: 12px;
`;