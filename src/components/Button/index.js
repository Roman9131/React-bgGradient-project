import * as React from 'react';
import cn from 'classnames';

import './styles.css';

class Button extends React.PureComponent {
	render() {
		const { error, type, children } = this.props;

		const classNames = cn(
			'button',
			{ input_error: error },
		);

		return (
			<button className={classNames} type={type}>{children}</button>
		);
	}
}

export default Button;