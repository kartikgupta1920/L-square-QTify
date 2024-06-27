import React from "react";
import styles from "./Hero,module.css";

function Hero(text, image){
    return (
        <div className={styles.hero}>
            <div>
                <h1>{text}</h1>
            </div>
            <div>
                <img
                    src={image}
                    width={212}
                    alt="headphones"
                    />
            </div>
        </div>
    )
}

export default Hero;