import styles from './styles.module.scss'
import Image from 'next/image'

export function Footer() {

    return (
        
<footer className={styles.footer}>
	<div className={styles.content}>
		<div className={styles.top}>
			<div className={styles.logodetails}>
               
			</div>
		</div>
		<div className={styles.linkboxes}>
			<ul className="box">
            <Image width={100} height={60} src="/images/logo_1.png" alt=""/>
			
			</ul>
			<ul className={styles.box}>
				<li className={styles.link_name}>Desenvolvedores</li>
				<li><a href="https://www.linkedin.com/in/mesquini/">Victor Mesquini</a></li>
				<li><a href="https://www.linkedin.com/in/victorrodrigues99/">Vitor Rodrigues</a></li>
				<li><a href="https://www.linkedin.com/in/thiago-melo-b45344187/">Thiago Melo</a></li>
				<li><a href="https://www.linkedin.com/in/joao-assumps/">João Assumpção</a></li>
			
			</ul>
	<ul className={styles.box}>
				<li className="link_name">Serviços EcologYou</li>
				<li><a href="#">Em Breve</a></li>
				<li><a href="#">Em Breve</a></li>
				<li><a href="#">Em Breve</a></li>
				<li><a href="#">Em Breve</a></li>
			
			</ul>
			<ul className={styles.box}>
				<li className="link_name">Contato</li>
				<li><a href="https://unip.br/">Unip.br</a></li>
				<li><a href="#">+55 19 99180-7437</a></li>
				<li><a href="#">ecologyou@mail.com</a></li>
				
			
			</ul>
			
	
	
	
		</div>
	</div>
	    <div className={styles.bottomdetails}>
      <div className={styles.bottomtext}>
        <span className={styles.copyright_text}>Copyright © 2021 <a href="#">EcologYou.</a></span>
        <span className={styles.policy_terms}>
          <a href="#">Politica de Privacidade</a>
          
        </span>
      </div>
    </div>
</footer>
        
    )

}