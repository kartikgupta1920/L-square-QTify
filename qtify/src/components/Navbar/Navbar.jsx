import React from "react";
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({searchdata}) {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
             <Logo/>
            </Link>
        <Search
            placeholder="Search a song of your choice"
            searchdata={searchdata}
            />
        <Button>Give feedback</Button>
        </nav>
    );
}

export default Navbar;