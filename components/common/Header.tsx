import Image from 'next/image';
import Link from 'next/link';
import React, { ComponentPropsWithRef, ForwardedRef } from 'react';
import styles from '@/styles/header.module.scss';

interface HeaderProps {
  onClickLogo?: () => void;
  rightElements?: React.ReactNode;
}

const CustomAnchor = React.forwardRef(function CustomAnchor(
  props: ComponentPropsWithRef<'a'>,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  return (
    <a ref={ref} {...props}>
      <Image src="/logo.webp" width={110} height={30} alt="logo" priority />
    </a>
  );
});

export default function Header({ onClickLogo, rightElements }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" legacyBehavior passHref>
          <CustomAnchor
            className={styles.box}
            onClick={onClickLogo}
            aria-label="홈으로 이동"
          />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
}
