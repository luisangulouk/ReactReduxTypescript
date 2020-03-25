import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../reducers'
import { ISong, IselectSong } from '../types/types';
import { selectSong } from '../actions';

interface AppProps {
    songs?: ISong[];
    selectSong: (song: ISong) => IselectSong;
}

class SongList extends Component<AppProps> {
    
    public render() {
        const { songs } = this.props;
        return (
            <div className="ui divided list">
              {songs &&
                songs.map(song => {
                  return (
                    <div key={song.title} className="item">
                        <div className="right floated content">
                            <button
                                onClick={() => this.props.selectSong(song)} 
                                className="ui button primary"
                            >
                                select
                            </button>
                        </div>
                        <div className="content">{song.title}</div>
                    </div>
                  );
                })}
            </div>
          );
    }

}

const mapStateToProps = (state: AppState) => {
    return { songs: state.songs };
}

export default connect(
    mapStateToProps, 
    { selectSong }
)(SongList);