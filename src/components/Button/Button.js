import styles from './Button.module.scss';

const Button = (props) => {
    return (
        <button className={styles.button} type="button" onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;