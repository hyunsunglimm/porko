'use client';

import FlexBox, { flexBoxVariants } from '../ui/FlexBox';
import Text from '../ui/Text';
import Icon from '../Icon';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

type HeaderProps = {
  title?: string;
  href: string;
};

export const IsBackHeader = ({ title, href }: HeaderProps) => {
  const { scrollY } = useScroll();

  const headerColor = useTransform(scrollY, [0, 1], ['transparent', 'white']);

  return (
    <motion.header
      style={{ backgroundColor: headerColor }}
      className={flexBoxVariants({
        justifyContent: 'between',
        alignItems: 'center',
        className: 'sticky top-0 z-10 h-[5.6rem] bg-transparent px-20'
      })}
    >
      <Link href={href} aria-label='뒤로 가기 링크'>
        <Icon aria-hidden size='24' alt='뒤로가기' src='/icons/system-icon/arrow/arrow-prev.svg' />
      </Link>
      <FlexBox justifyContent='center'>
        <Text variant='h6' sizes='16' weight='700'>
          {title}
        </Text>
      </FlexBox>
      <div className='w-[2.4rem]' aria-hidden></div>
    </motion.header>
  );
};
