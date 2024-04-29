const GameReducer = (state, action) => {
    switch (action.type) {
        case "ClickedBox":
            return state.map((item) =>
                item.boxNumber === action.boxNumber
                    ? { ...item, value: 'X', classValue: 'right' }
                    : item
            );
        case 'UnclickedBox':
            return state.map((item) =>
                item.boxNumber === action.boxNumber
                    ? { ...item, value: 'O', classValue: 'left' }
                    : item
            );
        case 'ResetBox':
            return state.map(item => ({ ...item, value: '', classValue: '' }));
        default:
            return state;
    }
}

export default GameReducer;
