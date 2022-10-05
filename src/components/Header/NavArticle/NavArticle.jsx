import styles from "./NavArticle.module.css"
export const NavArticle=()=>{
    return (
        <div>
            <nav className={styles.navHeader}>
                <a href="">All articles</a>
                <a href="">My articles</a>
                <a href="">Add article</a>
                <a href=""> Profile</a>
                <button>Logout</button>
            </nav>
        </div>
    )
}