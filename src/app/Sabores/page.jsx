import styles from './sabores.module.css';
import Image from 'next/image';
import saborOreo from '../../../public/sabor-oreo.png';
import saborPistache from '../../../public/sabor-pistache.png';
import saborCookiesAvela from '../../../public/sabor-cookies-avela.png';
import saborKiwi from '../../../public/sorbet-kiwi.png';
import saborMorango from '../../../public/sorbet-morango.png';
import saborLimao from '../../../public/sorbet-limao.png';

export default function Sabores() {
    return (
        <main>
            <section className={styles.sabores_banner}>
                <div className={styles.texto_banner}>
                    <h1>NOSSOS SABORES</h1>
                </div>
            </section>

            <section className={styles.sabores_content}>
                <h2>SABORES DE SORVETE</h2>
                <div className={styles.sabores_cards}>
                    <div>
                        <Image src={saborOreo} alt='sorvete de oreo'></Image>
                    </div>
                    <div>
                        <Image src={saborPistache} alt='sorvete de pistache'></Image>
                    </div>
                    <div>
                        <Image src={saborCookiesAvela} alt='sorvete de cookies com avelã'></Image>
                    </div>
                </div>
                <div className={styles.sabores_cards}>
                    <div>
                        <Image src={saborKiwi} alt='sorvete de kiwi'></Image>
                    </div>
                    <div>
                        <Image src={saborMorango} alt='sorvete de morango'></Image>
                    </div>
                    <div>
                        <Image src={saborLimao} alt='sorvete de limão'></Image>
                    </div>
                </div>
            </section>
        </main>
    )
}