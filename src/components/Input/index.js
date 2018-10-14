import * as React from 'react';
import cn from 'classnames';

import './styles.css';

class Input extends React.PureComponent {
	render() {
		const { value, error, onChange } = this.props;

		const classNames = cn(
			'input',
			{ input_error: error },
		);

		return (
			<input onChange={onChange} className={classNames} value={value} />
		);
	}
}
export default Input;