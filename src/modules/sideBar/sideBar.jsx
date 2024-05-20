import React from 'react'
import logo from '../../assets/logo.svg'
import style from "./sideBar.module.css"
import {sideBarNavigation} from "../../consants/sideBarNavigation";
import Plus from '../../assets/Plus.svg'
import Heart from '../../assets/heart.svg'

const SideBar = () => {
  return (
    <div className={style.sideBar}>
        <div className={style.sideBarLogo}>
            <img src={logo} alt="" />
        </div>
        <div className={style.linksListParents}>
            <ul className={style.linksList}>
                {sideBarNavigation.map((item, idx) => {
                    return (
                        <li>
                            <a href={item.link}>
                                <img src={item.src} alt=""/> <p className={style.linksTxt}>{item.title}</p>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className={style.PlaylistsSection}>
            <p>PLAYLISTS</p>
            <div className={style.PlaylistsList}>
                <ul>
                   <li>
                       <img src={Plus} alt=""/> <p>Create Playlist</p>
                   </li>
                    <li>
                        <img src={Heart} alt=""/> <p>Liked Songs</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideBar