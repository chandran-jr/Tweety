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
                <p>Does absolutely nothing..again!!</p>
            </div>
            <div className="widgets__widgetNews">
                <h4>Sports . Cricket</h4>
                <h3>NZ are WT Champs</h3>
                <p>They beat India in a rain spoiled match</p>
            </div>
            <div className="widgets__widgetNews">
                <h4>Technology . Huge News</h4>
                <h3>Chandran creates Tweety</h3>
                <p>Does absolutely nothing again!!</p>
            </div>
            <div className="widgets__widgetNews">
                <h4>Technology . Huge News</h4>
                <h3>Chandran creates Tweety</h3>
                <p>Does absolutely nothing again!!</p>
            </div>
            <div className="widgets__widgetNews">
                <h4>Technology . Huge News</h4>
                <h3>Chandran creates Tweety</h3>
                <p>Does absolutely nothing again!!</p>
            </div>
        </div>

        </div>
    )
}

export default Widgets
