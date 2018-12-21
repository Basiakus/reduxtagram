import React from 'react';

const Comments = React.createClass({
	renderComment(comment, i) {
		return (
			<p key={i} className="comment">
				<strong>
					{comment.user}
				</strong>
				{comment.text}
				<button className="remove-comment">&times;</button>
			</p>
		)
	},
	render() {
		return (
			<div className='comments'>
				{this.props.postComments.map(this.renderComment)}
				<form ref="commentForm" className="comment-form">
					<input type="text" ref="author" placeholder="author"></input>
					<input type="text" ref="comment" placeholder="comment"></input>
					<input type='submit' hidden></input>
				</form>
			</div>
		)
	}
});

export default Comments;