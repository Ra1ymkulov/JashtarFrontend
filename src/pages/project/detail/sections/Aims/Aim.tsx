import styles from './Aim.module.scss';

interface GoalItem {
  id: number;
  text: string; 
}

interface AimProps {
  title?: string;
  goals?: GoalItem[];
}

export const Aim = ({ title, goals = [] }: AimProps) => {
  const mid = Math.ceil(goals.length / 2);
  const columns = [goals.slice(0, mid), goals.slice(mid)];

  return (
    <section className={styles.goalsBlock}>
      {title && (
        <header className={styles.goalsHeader}>
          <h2>{title}</h2>
        </header>
      )}

      <div className={styles.goalsContent}>
        {columns.map((column, i) => (
          <ul key={i}>
            {column.map(({ id, text }) => (
              <li key={id}>{text}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};