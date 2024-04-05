import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/header.module.scss';

interface HeaderProps {
  onClickLogo?: () => void;
  rightElements?: React.ReactNode;
}

export default function Header({ onClickLogo, rightElements }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link
          href="/"
          className={styles.box}
          onClick={onClickLogo}
          aria-label="홈으로 이동"
        >
          <Image src="/logo.webp" width={110} height={30} alt="logo" priority />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
}
