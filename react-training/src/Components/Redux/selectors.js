import { createSelector } from 'reselect'
// I am a generic selector, I need no special treatment
// I am now passing props so I can find a specific bar
const getBar = (state, props) => {
    console.log(state)

    //   const id = props.id;
    const id = state.searchId;
    const barById = state.foo.bar.find((item, i) => item.name === id)
    return barById
}

const getAllState = (state, props) => {
    console.log(state)

    return state
}

const getTotalMark=(state)=>{
    console.log(state)
    const totalMark = state.foo.bar.reduce((acc, item) => acc + item.mark, 0)
    return totalMark
}

// This no longer will work if it is needed in multiple places
//export const getBarState = createSelector(
//  [ getBar ],
//  (bar) => bar
//)
// This is proper if it is needed in multiple instances
export const makeGetBarState = () => createSelector(
    [getBar],
    (bar) => bar
)

export const makeGetAlState = () => createSelector(
    [getAllState],
    (state) => state
)

export const makeGetTotalMark = () => createSelector(
    [getTotalMark],
    (state) => state
)