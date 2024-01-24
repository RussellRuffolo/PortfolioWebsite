import Head from 'next/head';
import Image from 'next/image';
import styles from '../style/layout.module.css';
import utilStyles from '../style/utils.module.css';
import Link from 'next/link';

const name = 'Russell Ruffolo';
export const siteTitle = 'Russell Ruffolo';

export default function Layout({ children, home, title }) {
  return (
    <div className={styles.container}>
      <Head>       
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Russell Ruffolo Portfolio"
        />
        <meta name="og:title" content={siteTitle} />
        
      </Head>
      <header className={styles.header}>
        {home ? (
        <div className={styles.col}>
            <div className={styles.row}>
                <h1 className={utilStyles.heading2Xl}>{name}</h1>

                <div className={styles.links}>
                    <div className={styles.row}>
                        <Link target='blank' href="mailto:ruffolorussell@gmail.com"> 
                            <Image alt="email" src="/envelope.svg" height={40} width={40}/> 
                        </Link>
                        <Link target='blank' href="http://github.com/RussellRuffolo"> 
                            <Image alt="Github" src="/github.svg" height={40} width={40}/> 
                        </Link>
                        <Link target='blank' href="https://crashtodon.net/@crash"> 
                            <Image alt="Mastodon" src="/mastodon.svg" height={40} width={40}/> 
                        </Link>
                    </div>
                </div>
            </div>         
        </div>
        
        
        ) : (
          <div className={styles.col}>
                <h1 className={utilStyles.heading2Xl}>{title}</h1>
            <div className={styles.backToHome}>
            <Link href="/#portfolio">← Back to home</Link>
          </div>
        </div>
        )}
      </header>
      <main className={home ? styles.home : ''}>{children}</main>
    </div>
  );
}