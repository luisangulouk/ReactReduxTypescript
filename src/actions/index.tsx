import { ISong } from '../types/types';

// ACTION CREATOR
export const selectSong = (song: ISong) => {
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };

};
