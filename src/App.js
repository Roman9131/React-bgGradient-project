import * as React from 'react';

import Button from './components/Button';
import Input from './components/Input';

import { isColorInputValid } from './utils';

import './App.css';

export default class App extends React.PureComponent {
	state = {
		firstColorInput: {
			value: '',
			error: false,
		},
		secondColorInput: {
			value: '',
			error: false,
		},
	};

	appRef = React.createRef();

	handleChange = ({ target: { value } }, color) => {
		this.setState(prevState => ({
			[color]: {
				value,
				error: prevState[color].error,
			},
		}))
	};

	handleSubmit = e => {
		e.preventDefault();

		const {
			firstColorInput: {
				value: firstColorInputValue,
			},
			secondColorInput: {
				value: secondColorInputValue,
			},
		} = this.state;
		
		const firstColorInputError = !isColorInputValid(firstColorInputValue);
		const secondColorInputError = !isColorInputValid(secondColorInputValue);

		this.setState(prevState => ({
			firstColorInput: {
				value: firstColorInputValue,
				error: firstColorInputError,
			},
			secondColorInput: {
				value: secondColorInputValue,
				error: secondColorInputError,
			},
		}));

		if (!firstColorInputError && !secondColorInputError) {
			this.appRef.current.style.background = `linear-gradient(${firstColorInputValue}, ${secondColorInputValue})`;
		}
	};

  render() {
		const {
			firstColorInput: {
				value: firstColorInputValue,
				error: firstColorInputError,
			},
			secondColorInput: {
				value: secondColorInputValue,
				error: secondColorInputError,
			},
		} = this.state;

    return (
      <div className="app" ref={this.appRef}>
				<div className="wrapper">
					<h1>BG gradient colors</h1>
					<form className="form" onSubmit={e => this.handleSubmit(e)}>
						<Input
							error={firstColorInputError}
							value={firstColorInputValue}
							onChange={e => this.handleChange(e, 'firstColorInput')}
						/>
						<Input
							error={secondColorInputError}
							value={secondColorInputValue}
							onChange={e => this.handleChange(e, 'secondColorInput')}
						/>
						<Button type="submit">GO</Button>
					</form>
				</div>
      </div>
    );
  }
}
