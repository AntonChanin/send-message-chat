import React from 'react';

import styles from './Title.module.css';

function Title() {
    return <div className={styles.title}>
        <h1 className={styles.primary}>Bot Chat</h1>
        <p className={styles.secondary}>AI-based service</p>
    </ div>
}

export default Title;