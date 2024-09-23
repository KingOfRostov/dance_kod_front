import styles from './agreements.module.scss';
import Link from 'next/link';

const files = [
  { name: 'Договор-Оферта', url: '/files/Оферта.pdf' },
  { name: 'Приложение 1. Прайс', url: '/files/Прайс.pdf' },
  { name: 'Приложение 2. Правила', url: '/files/Правила.pdf' },
  { name: 'Приложение 3. Анкета', url: '/files/Анкета.pdf' },
];

export const Agreements = () => (
  <div id="files-section" className={styles['files-section']}>
    <ul>
      {files.map((file, index) => (
        <li key={index}>
          <Link href={file.url} passHref target="_blank">
            <span className={styles.icon}></span>
            {file.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
