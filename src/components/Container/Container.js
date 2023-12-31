import styles from "./Container.module.scss";


const Container = props => {

    return (<div className={styles.containerBox}>{props.children}</div> );
}

export default Container;