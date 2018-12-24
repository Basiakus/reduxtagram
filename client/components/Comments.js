import React from 'react';

const Comments = React.createClass({
	renderComment(comment, i) {
		console.log(i);
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

	handleSubmit(e) {
		e.preventDefault();
		const {author, comment} = this.refs;
		const commentId = this.props.params.postId;
		console.log(author.value, comment.value, commentId);
		this.props.addComment(author.value, comment.value, commentId);

	},

	render() {
		return (
			<div className='comments'>
				{this.props.postComments.map(this.renderComment)}
				<form ref="commentForm" className="comment-form"onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="author"></input>
					<input type="text" ref="comment" placeholder="comment"></input>
					<input type='submit' hidden></input>
				</form>
			</div>
		)
	}
});

export default Comments;