import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">

        <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon"/>
            <input className="widgets__inputBox" placeholder="Search Twitter" type="text"/>
        </div>

        <div className="widgets__widgetContainer">
            <h2>What's Happening?</h2>

            <div className="widgets__widgetNews">
                <h4>Technology . Huge News</h4>
                <h3>Chandran creates Tweety</h3>
                <p>Does absolutely nothing.Again!!</p>
            </div>
            <div className="widgets__widgetNews">
                <h4>Sports . Cricket</h4>
                <h3>NZ are WT Champs</h3>
                <p>They beat India in a rain spoiled match</p>
            </div>
            <div className="widgets__widgetNews">
                <h4>Finance . News</h4>
                <h3>El Salvador accepting BTC</h3>
                <p>BTC may go upto $100k</p>
            </div>
            <div className="widgets__widgetNews">
                <h4>Crypto . News</h4>
                <h3>Scammers banned on TikTok</h3>
                <p>Crypto scammers are banned on it</p>
            </div>
            <div className="widgets__widgetNews">
                <h4>YouTube . Channel  News</h4>
                <h3>DevBees growing popular</h3>
                <p>The Flutter-React channel blows up!</p>
            </div>
            <h4 className="widgets__widgetShow">Show More</h4>
        </div>

        </div>
    )
}

export default Widgets
