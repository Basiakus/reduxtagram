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
				<button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} className="remove-comment">&times;</button>
			</p>
		)
	},

	handleSubmit(e) {
		e.preventDefault();
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		const { postId } = this.props.params;
		console.log(author, comment, postId);
		this.props.addComment(postId, comment, author);
		this.refs.commentForm.reset();

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