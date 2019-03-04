export const ACTIONS = {
    HANDLE_INPUT: 'HANDLE_INPUT',
    ADD_TODO: 'ADD_TODO', 
    COMPLETE_TODO: 'COMPLETE_TODO', 
    DELETE_TODO: 'DELETE_TODO'
};

// Handle Input
export const handleInput = (text, eventTarget) => ({type: ACTIONS.HANDLE_INPUT, text: text, target:eventTarget})

// Add
export const todoAdd = () => ({type: ACTIONS.ADD_TODO});

// Complete
export const todoComplete = id => ({type: ACTIONS.COMPLETE_TODO, id: id});

// Delete
export const todoDelete = () => ({type: ACTIONS.DELETE_TODO});

