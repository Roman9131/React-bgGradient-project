export const hexColorRegExp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;

export const isColorInputValid = value => {
	return hexColorRegExp.test(value);
};