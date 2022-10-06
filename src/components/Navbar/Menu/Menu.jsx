import {useState} from "react";

import styles from "./Menu.module.css"

export const Menu = ({logOut,isHeader}) => {
    const [activeLink, setActiveLink] = useState(1)

    const links = [
        {
            id: 1,
            value: "All articles",
            link: "#"
        },
        {
            id: 2,
            value: "My articles",
            link: "#"
        },
        {
            id: 3,
            value: "Add article",
            link: "#"
        },
        {
            id: 4,
            value: "Profile",
            link: "#"
        },]

    const Link = ({id, value, link}) => (
        <a
            href={link}
            onClick={() => setActiveLink(id)}
            className={activeLink === id ? styles.active : ""}
        >
            {value}
        </a>
    )

    return (
        <div className={styles.wrapper}>
            <nav >
                {links.map((link) => {
                    return <Link key={link.id} value={link.value} id={link.id} href={link.link}/>
                })}
            </nav>
            <button onClick={() => logOut()} className={(isHeader)?styles.header_button:styles.footer_button}>Logout</button>
        </div>
    )
}