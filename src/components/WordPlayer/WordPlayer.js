import React from 'react'
import {FaRandom} from 'react-icons/fa'
import {ImLoop2} from 'react-icons/im'
import {IoIosRewind, IoIosPlay, IoIosFastforward, } from 'react-icons/io'
import './word.css'
import speaker from '../../screens/all-images/pastor.jpg'

function WordPlayer() {
    return (
        <section className='player-section'>
            <div className='current-track'>
                <div className="controls">
                    <p className='random'><FaRandom/></p>
                    <p><IoIosRewind/></p>
                    <p><IoIosPlay/></p>
                    <p><IoIosFastforward/></p>
                    <p className='restart'><ImLoop2/></p>
                </div>
                <div className="playing">
                    <p>playing now</p>
                </div>
                <div className="volume">
                    <p>audio</p>
                </div>
            </div> 
            <div className= 'player-body'>
                <div className="audio-image">
                    <img src={speaker} alt="audio name"/>
                </div>
                <div className="playlist">
                    <article>
                        <div className ='track'>
                        <div className="track-photo">
                            <img src={speaker} alt={speaker}/>
                        </div>
                        <div className="track-details">
                            <div className="track-title">Stay Focused As He Leads</div>
                            <div className="artiste">Pastor David Simpsons</div>
                        </div>
                        </div>
                        <div className="track-duration">
                            30:45
                        </div>
                    </article>
                    <article>
                        <div className ='track'>
                        <div className="track-photo">
                            <img src={speaker} alt={speaker}/>
                        </div>
                        <div className="track-details">
                            <div className="track-title">Stay Focused As He Leads</div>
                            <div className="artiste">Pastor David Simpsons</div>
                        </div>
                        </div>
                        <div className="track-duration">
                            30:45
                        </div>
                    </article>
                    <article>
                        <div className ='track'>
                        <div className="track-photo">
                            <img src={speaker} alt={speaker}/>
                        </div>
                        <div className="track-details">
                            <div className="track-title">Stay Focused As He Leads</div>
                            <div className="artiste">Pastor David Simpsons</div>
                        </div>
                        </div>
                        <div className="track-duration">
                            30:45
                        </div>
                    </article>
                    <article>
                        <div className ='track'>
                        <div className="track-photo">
                            <img src={speaker} alt={speaker}/>
                        </div>
                        <div className="track-details">
                            <div className="track-title">Stay Focused As He Leads</div>
                            <div className="artiste">Pastor David Simpsons</div>
                        </div>
                        </div>
                        <div className="track-duration">
                            30:45
                        </div>
                    </article>
                    <article>
                        <div className ='track'>
                        <div className="track-photo">
                            <img src={speaker} alt={speaker}/>
                        </div>
                        <div className="track-details">
                            <div className="track-title">Stay Focused As He Leads</div>
                            <div className="artiste">Pastor David Simpsons</div>
                        </div>
                        </div>
                        <div className="track-duration">
                            30:45
                        </div>
                    </article>
                    <article>
                        <div className ='track'>
                        <div className="track-photo">
                            <img src={speaker} alt={speaker}/>
                        </div>
                        <div className="track-details">
                            <div className="track-title">Stay Focused As He Leads</div>
                            <div className="artiste">Pastor David Simpsons</div>
                        </div>
                        </div>
                        <div className="track-duration">
                            30:45
                        </div>
                    </article>
                    <article>
                        <div className ='track'>
                        <div className="track-photo">
                            <img src={speaker} alt={speaker}/>
                        </div>
                        <div className="track-details">
                            <div className="track-title">Stay Focused As He Leads</div>
                            <div className="artiste">Pastor David Simpsons</div>
                        </div>
                        </div>
                        <div className="track-duration">
                            30:45
                        </div>
                    </article>
                    <article>
                        <div className ='track'>
                        <div className="track-photo">
                            <img src={speaker} alt={speaker}/>
                        </div>
                        <div className="track-details">
                            <div className="track-title">Stay Focused As He Leads</div>
                            <div className="artiste">Pastor David Simpsons</div>
                        </div>
                        </div>
                        <div className="track-duration">
                            30:45
                        </div>
                    </article>
                    <article>
                        <div className ='track'>
                        <div className="track-photo">
                            <img src={speaker} alt={speaker}/>
                        </div>
                        <div className="track-details">
                            <div className="track-title">Stay Focused As He Leads</div>
                            <div className="artiste">Pastor David Simpsons</div>
                        </div>
                        </div>
                        <div className="track-duration">
                            30:45
                        </div>
                    </article>
                    <article>
                        <div className ='track'>
                        <div className="track-photo">
                            <img src={speaker} alt={speaker}/>
                        </div>
                        <div className="track-details">
                            <div className="track-title">Stay Focused As He Leads</div>
                            <div className="artiste">Pastor David Simpsons</div>
                        </div>
                        </div>
                        <div className="track-duration">
                            30:45
                        </div>
                    </article>
                    
                </div>
            </div>
        </section>
    )
}

export default WordPlayer
