import React, { ComponentType, FC, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	iconAlignment?: 'right' | 'left';
	label?: string;
	icon?: ComponentType<IconBaseProps>;
}

const Input: FC<IProps> = ({ iconAlignment, icon: Icon, label, ...rest }) => {
  	return (
		<Container>
			{ label && <label>{ label }</label>}
			{ Icon && (iconAlignment == 'left') && <Icon size={16} />}
			<input { ...rest } />
			{ Icon && (iconAlignment == 'right') && <Icon size={16} />}
		</Container>	
	);
}

export default Input;