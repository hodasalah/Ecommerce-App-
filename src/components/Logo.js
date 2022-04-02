import React from "react";
import styles from "../styles/Logo.module.css";
const Logo = () => {
	return (
		<div className={`${styles.app__logo} `}>
			<span className={styles.logo__span}>e</span>-shop
		</div>
	);
};

export default Logo;
