import Head from 'next/head'
import styles from './home.module.scss';
import Image from 'next/image'

export default function Home() {
  return (    
    <>
    
      <Head>
        <title>Home | EcologYou</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>✌ Ola, Seja Bem Vindo</span>
          <h1>Assine nossos serviços sobre <span>Ecologia Ambiental </span>e mude o mundo.</h1>
          <p>
            Tenha acesso as publicações <br/>
            <span>por R$9.90 ao mês</span>
          </p>
        </section>

        <Image width={450} height={450} src="/images/eco.svg" alt="Girl Dreamer Ecology"/>
      </main>
      <main className={styles.contentBeneficios}>
        <section className={styles.beneficios}>
          <h1>Beneficios</h1>
        </section>

      <section>
        <div className={styles.card}>
          <h2>Solidifique Seu Conhecimento</h2><br/>
          <p>Com os posts da EcologYou voce terá o mais alto nivel de informações sobre ecologia e meio ambiente de todo mundo.</p>
        </div>

        <div className={styles.card}>
          <h2>Garanta Creditos de Carbono</h2><br/>
          <p>Com a EcologYou voce garante seus créditos de carbono que serão utilizados no futuro</p>
        </div>

        <div className={styles.card}>
          <h2>Explore um Novo Mundo</h2><br/>
          <p>Devido a EcologYou ter um renomado número de profissionais na area todos com abrangente conhecimento saberemos utilizar para coisas novas</p>
        </div>
      </section>
      
      </main>

    </>
  )
}
