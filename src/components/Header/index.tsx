import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import Image from 'next/image'

export function Header() {

    return (
        <>
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image width={100} height={60} src="/images/logo_1.png" alt=""/>
                <nav>
                    <a className={styles.active}>Home</a>

                </nav>

                <SignInButton/>
            </div>
        </header>
        </>
    )

}