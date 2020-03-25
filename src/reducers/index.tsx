import { combineReducers } from 'redux';
import { IselectSong, SONG_SELECTED } from '../types/types';

export const songReducer = () => {
    return [
        { title: 'Ray of Light', duration: '4:00' },
        { title: 'Ironic', duration: '3:40' },
        { title: 'Freedom', duration: '5:00' },
        { title: 'Conga', duration: '4:30' }
    ];

}

export const selectedSongReducer = (selectedSong = null, action: IselectSong) => {
    if(action.type === SONG_SELECTED){
        return action.payload;
    }

    return selectedSong;
}

const songListReducer =  combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});

export default songListReducer;
export type AppState = ReturnType<typeof songListReducer>;