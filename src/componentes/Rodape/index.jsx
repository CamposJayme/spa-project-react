import styles from './Rodape.module.css';
import Image from 'next/image';
import logoSite from '../../../public/logo.png';

export default function Rodape() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <Image src={logoSite}/>
                <div className={styles.footer_card}>
                    <h3>Endereço</h3>
                    <p>Av. Bernardino de Campos, 98
                    <br/>    
                    São Paulo, SP 12345-678</p>
                </div>           
                <div className={styles.footer_card}>
                    <h3>Contato</h3>
                    <p>info@meusite.com 
                    <br/>
                    Tel: (11) 3456-7890 </p>
                </div>           
                <div className={styles.footer_card}>
                    <h3>Horários</h3>
                    <p>ABERTO TODOS OS DIAS 10:00 - 22:00</p>
                </div>           
            </div>
            <p className={styles.footer_dev}>Gelateria. Orgulhosamente desenvolvido por Jayme Campos</p>
        </footer>
    )
}