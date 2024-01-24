import styles from '../style/experience.module.css';

export default function ExperienceCard({ content: experience }) {
  return (
    <div className="card" >
        <div className="card-body">
          <div className="experience-header">
                {<a  target='_blank' href={experience.link}><h5 className="card-title">{experience.companyName}</h5></a>}
                <h5>{experience.dates}</h5>
                </div>
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