import utilStyles from '../../style/utils.module.css';
import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';

const title = "Crashblox"
const tags = ['Unity', 'C#', 'WebGL', 'WebRTC']


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
            <h4><a target="_blank" href="https://github.com/Russell/Ruffolo/VoxelZombiesWebGL/">→ Code</a></h4>
            <br/>
            <p>Crashblox is a multiplayer browser-based game built with Unity. To achieve high performance for a 3D game in the browser, I implemented my own voxel engine. For the multiplayer networking, I wrote my own networking library using WebRTC as the transport layer. This is because the WebRTC allows you to send fast, unordered UDP-like messages in the browser, which is perfect for continuous state updates. I am very proud of Crashblox's netcode, which includes client prediction and rollback.</p>
          </div>
          <div className={utilStyles.center} style={{width: '50%'}}>
                <Image alt="Crashblox screenshot" src="/crashblox.png" width={300} height={200} layout="responsive" objectFit="contain"/> 
            </div>
      </Layout>
    );
  }