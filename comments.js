import {
    ADD_COMMENT,
    EDIT_COMMENT,
    REMOVE_COMMENT,
    THUMB_UP,
    THUMB_DOWN
} from './actions'

function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state];

        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        text: action.text
                    }
                }
            });

        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);

        case THUMB_UP:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        votes: comment.votes + 1
                    };
                }
                return comment;
            });

        case THUMB_DOWN:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        votes: comment.votes - 1
                    };
                }
                return comment;
            });
        default:
            return state;
    }
}