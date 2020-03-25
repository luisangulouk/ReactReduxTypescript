export interface ISong {
    title: string;
    duration: string;
}
  
export interface IsongReducer {
    Songs: ISong[];
}

export const SONG_SELECTED = 'SONG_SELECTED';
  
export interface IselectSong {
    type: string;
    payload: ISong;
}

  