import React, { useState, useEffect } from "react";
import styles from '../Navigation/Navigation.module.scss'
import classNames from 'classnames/bind';
import { attributes } from '../../content/menu/index.md';
import { slide as Menu } from 'react-burger-menu'
import useWindowSize, { breakpoints } from "hooks/useWindowSize";
import { useRouter } from 'next/router';

let cx = classNames.bind(styles);

export default function Navigation() {
    let { menuLinks } = attributes;

    // Window size
    const size = useWindowSize();
    const smallScreen = size.width < breakpoints.md;
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const [hasMounted, setHasMounted] = useState(false)

    const router = useRouter()

    useEffect(() => {
        setHasMounted(true)
    }, [hasMounted])

    useEffect(() => {
        if (hasMounted) {
            setIsSmallScreen(size.width < breakpoints.md)
        }

    }, [hasMounted])

    const handleRoute = (e, item) => {
        e.preventDefault();
        router.push(`/${item.slug}`)
    }

    const logoClass = cx({
        main_menu_list_item: true,
    });

    return (
        <>
            <Menu right disableOverlayClick width={isSmallScreen ? '100%' : '30%'} >
                <div className={styles.main_menu}>
                    <ul className={styles.main_menu_list}>
                        <li className={logoClass} key="logo" onClick={() => router.push('/')}>
                            <a aria-label="architecture végétale" className={styles.logo}>
                                <img className={styles.image} alt="Logo Architecture végétale"
                                    src="/img/logo-bandeau-menu.svg"
                                />
                            </a>
                        </li>
                        {
                            menuLinks.length !== 0 &&
                            menuLinks.map(item => {
                                return (
                                    <li className={styles.main_menu_list_item} key={item.slug} onClick={(e) => handleRoute(e, item)}>
                                        <a className={styles.link} aria-label={item.menuLink}>
                                            <span>{item.menuLink}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Menu>
        </>
    )
}
