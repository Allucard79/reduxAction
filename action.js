import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    };
}

function removeCommment(id) {
    return {
    type: REMOVE_COMMENT,
    id
    };
} 

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    };
}

function thumbUpComment(id, thumb) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        thumb: thumb++
    }
}

function thumbDownComment(id, thumb) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        thumb: thumb--
    }
}