import React, { Component } from 'react';
import { connect } from 'react-redux';

 const SongDetails = ( { song }) => {
     if(!song){
         return <div className="ui segment">Please select song</div>
     }
    return(
        <>
            <div className="ui segment">
                <div className="ui header"> Details for: </div>
                <p>Title: {song.title}</p>
                <p>Duration: {song.duration}</p>
            </div>
        </>
            )

};

const mapStateToProps = (state) => {
    console.log(state)
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetails);