// import "./Navigation.scss"
import Link from 'next/link'
import styles from '../Navigation/Navigation.module.scss'
import Image from 'next/image'
import cx from 'classnames';

export default function Navigation() {
    return (
        <>
            <div className={styles.navigation}>
                <div className={styles.navigation_container}>
                    <Link href="/">
                        <a aria-label="architecture végétale" href="/" className={styles.logo}>
                            <img className={styles.image} alt="Logo Architecture végétale"
                                src="/images/logo-bandeau-menu.svg"
                            />
                        </a>
                    </Link>

                    {/* map over the links coming from content */}

                    <div className={styles.main_menu}>
                        <ul className={styles.main_menu_list}>
                            <li className={styles.main_menu_list_item}>
                                <Link href="/prestations">
                                    <a className={styles.link} aria-label="menu-nos prestations" href="/prestations/">
                                        <span>Nos prestations</span>
                                    </a>
                                </Link>
                            </li>

                            <li className={styles.main_menu_list_item}>
                                <Link href="/atouts">
                                    <a className={styles.link} aria-label="menu-nos atouts" href="/atouts/">
                                        <span>Nos atouts</span>
                                    </a>
                                </Link>
                            </li>

                            <li className={styles.main_menu_list_item}>
                                <Link href="/vision/">
                                    <a className={styles.link} aria-label="menu-notre vision" href="/vision/">
                                        <span>Notre vision</span>
                                    </a>
                                </Link>
                            </li>

                            <li className={styles.main_menu_list_item}>
                                <Link href="/inspiration">
                                    <a className={styles.link} aria-label="menu-inspiration" href="/inspiration/">
                                        <span>Inspiration</span>
                                    </a>
                                </Link>
                            </li>

                            <li className={styles.main_menu_list_item}>
                                <Link href="/contact">
                                    <a className={styles.link} aria-label="menu-contact" href="/contact/">
                                        <span>Contact</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </>
    )
}
