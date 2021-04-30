import Link from 'next/link';
import React from 'react';
import styles from "../../styles/Player.module.scss";
import Icons from "../Icons";

const Player: React.FC = () => {
    return (
        <div className={styles.player}>
            <div className={styles.progressBar}>
                <div className={styles.progressMain}></div>
            </div>
            <div className={styles.main}>
                <div className={styles.info}>
                    <div className={styles.infoImage}>
                        <img src={'http://studiosib.ru/storage/album_images/uAj80dqz61yqZvothDRaR6mXx6omZqAXIwa9qYfQ.png'} width={48} height={48} loading={"lazy"}/>
                    </div>
                    <div className={styles.infoNameContainer}>
                        <span className={styles.infoName}>Название трека</span>
                        <span className={styles.infoArtist}>Исполнитель</span>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Icons name={'change'} color={'#4B4B4B'} size={'12px'}/>
                    <Icons name={'repeat'} color={'#4B4B4B'} size={'11px'}/>
                    <Icons name={'like'} color={'#4B4B4B'} size={'12px'}/>
                    <Icons name={'download'} color={'#4B4B4B'} size={'12px'}/>
                </div>
                <div className={styles.control}>
                    <Icons name={'prev'} color={'#4B4B4B'} size={'14px'} height={'11px'} className={styles.controlPrev}/>
                    <div className={styles.controlPlay}>
                        <div className={styles.controlCircleBig}/>
                        <div className={styles.controlCircle}/>
                        <Icons name={'play'} color={'#4B4B4B'} size={'18px'} className={styles.controlPlayIcon}/>
                    </div>
                    <Icons name={'next'} color={'#4B4B4B'} size={'14px'} height={'11px'} className={styles.controlNext}/>
                </div>
                <div className={styles.progress}>

                </div>
                <div className={styles.extra}>
                    <div className={styles.extraInfo}>
                        <span className={styles.extraCurrentTime}>04:21 &ensp;/&ensp; </span>
                        <span className={styles.extraDuration}> 04:43</span>
                    </div>
                    <div className={styles.queue}>
                        <Icons name={'queue'} color={'#4B4B4B'} size={'15px'}/>
                    </div>
                    <div className={styles.volume}>
                        <Icons name={'mute'} color={'#4B4B4B'} size={'15px'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
