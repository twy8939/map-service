import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/header.module.scss';

interface HeaderProps {
  rightElements?: React.ReactNode;
}

export default function Header({ rightElements }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <Image src="/logo.png" width={110} height={30} alt="logo" />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
}
