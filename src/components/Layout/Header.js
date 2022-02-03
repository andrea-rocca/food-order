import React, { Fragment } from "react";
import banner from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <Fragment>
                <header className={styles.header}>
                    <h1>ReactMeals</h1>
                    <HeaderCartButton onClick={props.onShowCart} />
                </header>
                <div className={styles['main-image']}>
                    <img src={banner} alt="A table full of food." />
                </div>
            </Fragment>
};

export default Header;