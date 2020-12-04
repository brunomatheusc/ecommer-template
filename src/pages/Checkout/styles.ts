import styled from 'styled-components';
import Flex from '../../components/Flex';

export const Container = styled.div``;

export const Wrapper = styled(Flex)`
	padding-top: 16px;

	small {
		font-size: 12px;
		line-height: 16px;
		color: #a9a9a9;		
	}
`;

export const Billing = styled(Flex)`
	width: 66%;
`;

export const BillingInfo = styled(Flex)`
	label {
		font-size: 12px;
		font-weight: bold;
	}

	> div {
		margin-top: 4px;
		margin-bottom: 32px;
	}
`;

export const Input = styled.input`
	height: 42px;
	padding: 11px 21px;
	background: #f9f9f9;

	border: 1px solid #d1d1d1;
	box-sizing: border-box;
	border-radius: 12px;	
`;

export const CheckboxWrapper = styled(Flex)`
	height: 42px;
	width: fit-content;
	margin-top: 32px;
	padding: 9px 16px;
	background: #f9f9f9;

	border: 1px solid #d1d1d1;
	box-sizing: border-box;
	border-radius: 12px;	

	input[type="checkbox"] {
		width: 24px;
		height: 24px;
	}

	label {
		margin-left: 8px;
		font-size: 14px;
		font-weight: 400;
	}
`;

export const OrderSummary = styled(Flex)`
	padding: 32px 16px;
	margin-left: 32px;
	background: #ffffff;
	
	border: 1px solid #d1d1d1;
	box-sizing: border-box;
	border-radius: 12px;	
`;

export const ProductTile = styled(Flex)`
	border-bottom: 1px solid #a9a9a9;

	div:nth-child(1) {
		margin-right: 16px;

		div {
			margin-top: 12px;
		}
		
		svg + span {
			margin-left: 6px;
			font-size: 12px;
			line-height: 16px;
			color: #a9a9a9;
		}
	}

	& + & {
		margin-top: 32px;
	}
`;

export const ProductImage = styled.div`
	height: 67px;
	width: 100px;

	background: #f9f9f9;
	border-radius: 12px;
`;

export const Price = styled.div`
	padding: 16px 0;

	h3 {
		font-size: 18px;
		font-weight: 600;
		color: var(--color-primary);
	}

	strong {
		font-size: 12px;
		font-weight: 600;
		color: #a9a9a9;
		text-decoration: line-through;
	}
`;

export const Box = styled(Flex)`
	margin: 16px 0;
`;

export const InputSimple = styled.div`
	height: 32px;
	width: 102px;
	background: #F9F9F9;

	border: 1px solid #D1D1D1;
	box-sizing: border-box;
	border-radius: 12px;	


	> div {
		margin-top: 0;
		padding: 6px;	
		margin-right: 0 !important;

		span {
			padding-right: 6px;
			font-size: 12px;
			border-right: solid 1px #ccc;
		}
	}

	select, input, button {
		border: none;
		background: transparent;
	}

	select {
		padding-left: 6px;
		font-size: 12px;
		font-weight: bold;
	}

	input {
		padding: 0 24px;
	}
`;

export const Totals = styled(Flex)`
	margin: 32px 0 40px 0;
`;

export const PromoCode = styled(Flex)`
	margin: 32px 0 40px 0;
	flex: 1;
	position: relative;

	input {
		flex: 1;
	}

	button {
		display: block;
		position: absolute;

		top: 10px;
		right: 16px;

		background: transparent;
		border: none;

		font-size: 15px;
		font-weight: bold;
	}
`;

export const Badges = styled(Flex)``;

export const InputRadio = styled(Flex)`
	flex: 1;
	height: 48px;
	padding: 12px 16px;
	background: #f9f9f9;

	border: 1px solid #d1d1d1;
	box-sizing: border-box;
	border-radius: 12px;

	${Badges} {
		position: absolute;
		left: 330px;
	}

	& + & {
		margin-top: 16px;
	}

	label {
		font-size: 12px;
		font-weight: 600;
		margin-left: 16px;
	}

	svg {
		width: 54px;
		height: 16px;
	}
`;

export const DeliveryAt = styled.div`
	font-size: 12px;
	font-weight: 400;
	color: var(--color-primary);
`;

export const Total = styled.h1`
	font-size: 26px;
	font-weight: bold;
	color: var(--color-primary);
`;

export const BillingMethod = styled(Flex)`
	margin-top: 64px;

	> div {
		> small {
			margin-top: 4px;
			margin-bottom: 32px;
		}
	}
`;

export const PaymentMethod = styled(Flex)`
	margin-top: 64px;

	${InputRadio} {
		margin-top: 16px;
	}
`;

export const PaymentHeader = styled(Flex)`
	margin-bottom: 32px;

	input + label {
		margin-left: 16px;
	}

	input {
		width: 24px;
		height: 24px;
	}

	label {
		font-size: 12px;
		font-weight: 600;
	}

	img + img {
		margin-left: 12px;
	}
`;

export const PaymentBody = styled(Flex)`
	margin-top: 32px;
`;

export const CardHolder = styled(Flex)`
	margin-right: 32px;
`;

export const ExpirationCVC = styled(Flex)`
	div + div {
		margin-left: 16px;
	}
`;

export const CardBox = styled(Flex)`
	background: #ffffff;

	border: 1px solid #d1d1d1;
	box-sizing: border-box;
	border-radius: 12px;

	padding: 16px;
`;

export const AdditionInformations = styled(Flex)`
	margin-top: 64px;

	> div {
		> small {
			margin-top: 4px;
			margin-bottom: 32px;
		}
	}

	textarea {
		height: 150px;
		padding: 11px 21px;
		background: #f9f9f9;
		color: #a9a9a9;

		border: 1px solid #d1d1d1;
		box-sizing: border-box;
		border-radius: 12px;		
	}
`;

export const InputCheckbox = styled(Flex)`
	height: 48px;
	padding: 11px 21px;
	background: #f9f9f9;
	color: #a9a9a9;

	border: 1px solid #d1d1d1;
	box-sizing: border-box;
	border-radius: 12px;		

	input + span {
		margin-left: 8px;
	}

	span {
		font-size: 14px;
		font-weight: 400;
		color: #151515;
	}
`;

export const Confirmation = styled(Flex)`
	margin-top: 64px;

	> div {
		> small {
			margin-top: 4px;
			margin-bottom: 32px;
		}
	}

	${InputCheckbox} {
		margin-top: 16px;
	}

	button {
		margin: 32px 0;
	}
`;