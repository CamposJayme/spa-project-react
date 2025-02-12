import Image from 'next/image';
import logoSite from '../../../public/logo.png';
import styles from './Topo.module.css';

export default function Topo() {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.header_image}>
                    <Image src={logoSite} alt="Logo da sorveteria" />
                </div>
                <nav>
                    <ul className={styles.header_nav}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Sabores</a></li>
                        <li><a href="/">Sobre</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}