import { ICrew } from "../controllers/getSingleMovieReducer/models";

export const removeDuplicates = (array: ICrew[]) => {
    const flags:any = [], output = [];
    let l = array.length, i;

    for( i=0; i<l; i++) {
        if( flags[array[i].name]) continue;
        flags[array[i].name] = true;
        output.push(array[i]);
    }

    return output
}