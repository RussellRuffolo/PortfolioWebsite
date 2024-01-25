import utilStyles from '../../style/utils.module.css';
import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';

const title = "Crashtodon"
const tags = ['Ruby', 'Node.js', 'PostgreSQL', 'Redis']


export default function ProjectPage() {
    return (
      <Layout title={title}>
          <Head>
          <title>Russell Ruffolo - {title}</title>
          </Head>
          <div className={utilStyles.blog}>
            <div className={utilStyles.row}>            
              <div className={utilStyles.tags}>
                {tags.map((tag, i) => (
                  <span key={i} className={['badge', 'badge-pill', 'badge-primary', utilStyles.badge].join(' ')}>{tag}</span>
                ))}
              </div>
            </div>
            <h4><a target="_blank" href="https://crashtodon.net/">→ Website</a></h4>
            <br/>
            <p>Crashtodon is an instance of the open source social network Mastodon. I have been hosting Crashtodon on a Digital Ocean server since March of 2022, and it sees daily traffic from my friends and family. Mastodon's tech stack is Ruby, Node.js, PostreSQL and Redis. I built Crashtodon from source and succesfully federated it with the global Mastodon network.</p>
          </div>
          <div className={utilStyles.center} style={{width: '50%'}}>
                <Image alt="Mastodon Art" src="/mastodon.jpg" width={300} height={200} layout="responsive" objectFit="contain"/> 
            </div>
      </Layout>
    );
  }