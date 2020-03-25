import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../reducers';
import { ISong } from '../types/types';

interface AppProps {
    song?: ISong;
}

const SongDetail = (props: AppProps) => {
    if(!props.song){
        return <div>Select a song!</div>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p> 
                Title: {props.song.title} 
                <br />
                Duration: {props.song.duration}
            </p>
        </div>
        );
}

const mapStateToProps = (state: AppState) => {
    return {
        song: state.selectedSong
    };
}

export default connect(mapStateToProps)(SongDetail);