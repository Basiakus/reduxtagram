//likes
export function addLike(indexFoto) {
	return {
		type: 'DO_LIKE',
		index: indexFoto
	}
}


//dont like 
export function dontLike(indexFoto) {
	return {
		type: 'DONT_LIKE',
		index: indexFoto
	}
}


//add comment
export function addComment(postId, comment, author) {
	console.log("dispaching comment from reducer");
	return {
		type: 'ADD_COMMENT',
		postId, 
		comment, 
		author
	}
}

//remove comment 
export function removeComment(postId, index) {
	return {
		type: 'REMOVE_COMMENT',
		postId, 
		index
	}
}
