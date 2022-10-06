
import styles from "./Menu.module.css"
import {NavLink} from "react-router-dom";

export const Menu = ({logOut, isHeader, }) => {

    const links = [
        {
            id: 1,
            value: "All articles",
            path: "/all-articles"
        },
        {
            id: 2,
            value: "My articles",
            path: "/my-articles"
        },
        {
            id: 3,
            value: "Add article",
            path: "/add-article"
        },
        {
            id: 4,
            value: "Profile",
            path: "/profile"
        },]

    const Link = ({id, value, href}) => (
        <NavLink
            to={href}
            className={(link) => link.isActive ? styles.active : ""}
        >
            {value}
        </NavLink>
    )

    return (
        <div className={styles.wrapper}>
            <nav>
                {links.map((link) => {
                    return <Link key={link.id} value={link.value} href={link.path}/>
                })}
            </nav>
            <button onClick={() => logOut()}
                    className={(isHeader) ? styles.header_button : styles.footer_button}>Logout
            </button>
        </div>
    )
}