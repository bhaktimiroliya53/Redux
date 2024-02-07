let value = 0;

const counter = (state = value,action)=>{
    switch(action.type){
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        case 'reset':
            return state = 0;
        default :
            return state;
    }
}

export default counter;
