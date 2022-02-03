import React from "react";
import banner from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return <React.Fragment>
                <header className={styles.header}>
                    <h1>ReactMeals</h1>
                    <HeaderCartButton />
                </header>
                <div className={styles['main-image']}>
                    <img src={banner} alt="A table full of food." />
                </div>
            </React.Fragment>
};

export default Header;