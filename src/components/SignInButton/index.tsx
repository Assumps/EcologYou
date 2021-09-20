import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fI'
import styles from './styles.module.scss'

export function SignInButton () {

    const isUserLoggedIn = false

    return isUserLoggedIn ? (
        <button type="button"
        className={styles.signInButton}>
            <FaGithub color="#04d361"/>
            Assumps
            <FiX color="#737380" className={styles.closeIcon}/>
            </button>
    ) : (
        <button type="button"
        className={styles.signInButton}>
            <FaGithub color="#eba417"/>
            Sign in with Github</button>
    )
    

}