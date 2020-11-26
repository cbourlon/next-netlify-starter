// import "./Navigation.scss"
import Link from 'next/link'
import styles from '../Navigation/Navigation.module.scss'
import Image from 'next/image'
import cx from 'classnames';
import { attributes } from '../../content/menu/index.md';

export default function Navigation() {
    let { menuLinks } = attributes;
    return (
        <>
            <div className={styles.navigation}>
                <div className={styles.navigation_container}>
                    <Link href="/">
                        <a aria-label="architecture végétale" className={styles.logo}>
                            <img className={styles.image} alt="Logo Architecture végétale"
                                src="/img/logo-bandeau-menu.svg"
                            />
                        </a>
                    </Link>

                    {/* map over the links coming from content */}
                    {/* useRouter?? */}
                    <div className={styles.main_menu}>
                        <ul className={styles.main_menu_list}>
                            {
                                menuLinks.length !== 0 &&
                                menuLinks.map(item => {
                                    console.log('item', item)
                                    return (
                                        <li className={styles.main_menu_list_item} key={item.slug}>
                                            <Link href={`/${item.slug}`}>
                                                <a className={styles.link} aria-label={item.menuLink}>
                                                    <span>{item.menuLink}</span>
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
