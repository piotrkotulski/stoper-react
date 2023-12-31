import styles from "./Box.module.scss"

const Box = props => {

    return (<div className={styles.timerBox}>{props.children}</div> );
}

export default Box