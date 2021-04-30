import React from 'react';
import {ITrack} from "../types/track";
import styles from "../styles/Track.module.scss"
import Icons from "./Icons";

interface Track {
    track: ITrack
}

const Track: React.FC<Track> = ({track}) => {

    const isOpenMenu = false;
    return (
        <div>
            <div className={styles.container} >
                {/*<div className={styles.trackPlay} />*/}
                <Icons name={'playItem'} size={'20px'} color={'#B1AFAF'}/>
                <p className={styles.name}>{track.name}</p>
                <Icons className={styles.like} name={'like'} color={'#B1AFAF'} size={'20px'}/>
                <span className={styles.duration}>{track.duration ? track.duration : null}</span>
                <Icons className={styles.popupMenu} name={'popupMenu'} color={'#B1AFAF'} size={'20px'}/>


                {isOpenMenu && <>
                    <div className='playlist__menu-background' />
                    <div className='playlist__menu-dropdown'>
                        <a className='download' href={track.link} download='fe'>Скачать</a>
                        <a className='add-playlist' href="#">Добавить в плейлист</a>
                        <a className='add-turn' href="#">Добавить в очередь</a>
                    </div>
                </>}
            </div>
        </div>
    );
};

export default Track;
