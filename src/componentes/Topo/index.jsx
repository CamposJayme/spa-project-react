import Image from 'next/image';
import Link from 'next/link';
import logoSite from '../../../public/logo.png';
import styles from './Topo.module.css';

export default function Topo() {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.header_image}>
                    <Image src={logoSite} alt="Logo da gelateria" />
                </div>
                <nav>
                    <ul className={styles.header_nav}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/sabores">Sabores</Link></li>
                        <li><Link href="/sobre">Sobre</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}