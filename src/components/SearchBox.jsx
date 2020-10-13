import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input 
			className='pa3 ba bw2 b--green bg-lightest-blue'
			style={{borderRadius: '50rem'}}
			type='search' 
			placeholder='Search robots'
			onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;