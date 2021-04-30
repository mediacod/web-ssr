import Link from 'next/link';
import React, {useRef} from 'react';
import styles from '../styles/AlbumItem.module.scss'
import {IAlbumItem} from "../types/album";
// @ts-ignore
import cover from '../public/images/coverDefault.png';

interface IAlbum{
    album: IAlbumItem;
    albumWidth: number
}

const AlbumItem: React.FC<IAlbum> = ({album, albumWidth}) => {

    const styleAlbumCover = {"--albumWidth": albumWidth + 4 +'px', display: 'block'}

    return (
        <div className={styles.albumContainer}>
            <Link href={'/album/'+ album.id}>
                <a>
                    <div className={styles.albumCoverContainer} style={styleAlbumCover}>
                        <img className={styles.albumCover} src={album.url || cover } alt={album.title} loading={"lazy"}/>
                    </div>
                    <div className={styles.albumTitle}>{album.title}</div>
                    <div className={styles.albumCountTrack}>{album.count} треков</div>
                </a>
            </Link>

        </div>
    );
};

export default AlbumItem;
