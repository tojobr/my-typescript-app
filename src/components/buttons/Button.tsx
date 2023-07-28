import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	onClick: () => void
}>;

const Button = ({ onClick, children }: Props) => {
	return <button onClick={onClick}>
		{children}
	</button>
};
export default Button;