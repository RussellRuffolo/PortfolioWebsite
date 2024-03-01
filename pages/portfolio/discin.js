import utilStyles from '../../style/utils.module.css';
import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';

const title = "DISCIN"
const tags = ['Unity', 'C#', 'VR']


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
            <h4><a target="_blank" href="https://discinvr.com/">→ Website</a></h4>
            <br/>
            <p>DISCIN is a virtual reality disc golf game developed with Unity fand OpenXR. To build a complete VR game from the ground up, I took on many projects. I built/implemented a custom physically simulated disc flight model using existing scientific literature and a differential equation solver library. I also built our UI/UX and gameplay loop. Graphical peformance is an important bottleneck in VR, so I implemented my own foliage shader and billboarding system for our trees. This project has been an amazing learning experience, and I am very excited to finally release DISCIN. It is currently available as a Playtest on <a href="https://store.steampowered.com/app/2816270/DISCIN/">Steam</a>.</p>
          </div>
          <div className={utilStyles.center} style={{width: '50%'}}>
                <Image alt="DISCIN Cover Art" src="/discin.png" width={300} height={200} layout="responsive" objectFit="contain"/> 
            </div>
      </Layout>
    );
  }