import utilStyles from '../../style/utils.module.css';
import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';

const title = "PA Bridges"
const tags = ['Node.js', 'SQLite', 'Nginx', 'Mapbox']


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
            <h4><a target="_blank" href="https://pabridges.net">→ Website</a></h4>
            <h4><a target="_blank" href="https://github.com/RussellRuffolo/pabridges">→ Code</a></h4>
            <br/>
            <p>PA Bridges is a geospatial visualization made using Federal Highway Administration bridge data. This project was a hackathon-style exercise in building a full-stack application in one day. To achieve this I first implemented a simple API using Node.js and SQLite. I then used combined this with Mapbox\'s public API for a web maps and markers to place the bridges on the map.</p>
          </div>
          <div className={utilStyles.center} style={{width: '50%'}}>
                <Image alt="PA Bridges screenshot" src="/pabridges.png" width={300} height={200} layout="responsive" objectFit="contain"/> 
            </div>
      </Layout>
    );
  }