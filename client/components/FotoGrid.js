import React from 'react';
import Foto from './Foto';

const FotoGrid = React.createClass({

	render() {
		return (
			<div className="photo-grid">	
					{this.props.posts.map((post, i) => <Foto 
															{...this.props}
															key={i}
															i={i}
															post={post}
														/>
					)}
			</div>
		)
	}
});

export default FotoGrid;