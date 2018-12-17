function posts(state = [], actions) {
	switch(actions.type) {
		case 'DO_LIKE' : 
			console.log('add like');
			const i = actions.index;
			return [
			...state.slice(0, i),
			{...state[i], likes: state[i].likes + 1},
			...state.slice(i + 1)
			]
		default: 
			return state;
	}
}

export default posts;