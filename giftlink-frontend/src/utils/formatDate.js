export default (timestamp) => {
	const date = new Date(timestamp * 1000);
	return date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' });
};
