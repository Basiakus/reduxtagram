import React from 'react';
import Foto from './Foto';
import Comments from './Comments';

const Single = React.createClass({
	render() {
		const index = this.props.posts.findIndex(post => post.code === this.props.params.postId);
		const post = this.props.posts[index];
		const postComments = this.props.comments[this.props.params.postId] || [];
		console.log(post);
		return (
			<div className="single-photo">
				<Foto i={index} post={post} {...this.props} />
				<Comments i={index} postComments={postComments} {...this.props}/>
			</div>
		)
	}
});

export default Single;