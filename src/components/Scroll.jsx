import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', height: '80vh', padding: '.5rem'}}>
			{props.children}
		</div>
	);
};

export default Scroll;