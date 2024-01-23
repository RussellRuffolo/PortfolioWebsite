import styles from '../style/experience.module.css';

export default function ExperienceCard({ content: experience }) {
  return (
    <div className="card" >
        <div className="card-body">
                {<a  target='_blank' href={experience.link}><h5 className="card-title">{experience.dates}</h5></a>}
            <div className={styles.row}>
                <h6 className="card-subtitle mb-2 text-muted">{experience.role}</h6>            
            </div>
            <p className="card-text">{experience.description}</p>
            {experience.tags.map((tag, i) => (
                <span key={i} className={['badge', 'badge-pill', 'badge-primary', styles.badge].join(' ')}>{tag}</span>
            ))}
        </div>
    </div>

  );
}