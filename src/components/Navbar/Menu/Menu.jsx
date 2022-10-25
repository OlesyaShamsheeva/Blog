import {NavLink, useNavigate} from "react-router-dom";

import styles from "./Menu.module.css"

export const Menu = ({logOut, isHeader}) => {
    const links = [
        {
            id: 1,
            value: "All articles",
            path: "/all-articles"
        },
        {
            id: 2,
            value: "My articles",
            path: "/my-articles/"
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
        },
    ]

    return (
        <div className={styles.wrapper}>
            <nav>
                {links.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        className={(ref) => ref.isActive ? styles.active : ""}
                    >
                        {link.value}
                    </NavLink>
                ))}
            </nav>
            <button
                onClick={() => logOut()}
                className={(isHeader) ? styles.header_button : styles.footer_button}
            >
                Logout
            </button>
        </div>
    )
}