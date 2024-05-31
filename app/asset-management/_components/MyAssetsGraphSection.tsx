import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Image from 'next/image';
import Icon from '@/components/Icon';
import SwiperWrapper from '@/components/SwiperWrapper';
import AssetGraphCard from './AssetGraphCard';

const MyAssetsGraphSection = () => {
  return (
    <>
      <SectionTitle>내 자산은 어떻게</SectionTitle>
      <SwiperWrapper dots>
        <CardList />
        <CardListTop />
        <AssetGraphCard />
      </SwiperWrapper>
    </>
  );
};
export default MyAssetsGraphSection;

const CardList = () => {
  return (
    <Card className='h-[23rem] w-full shrink-0'>
      <CardContent flexDirection='col' className='gap-y-16 p-24'>
        <FlexBox flexDirection='col'>
          <Text weight='500' sizes='16' className='text-gray-500'>
            지난달 보다 자산이 증가했어요
          </Text>
          <FlexBox alignItems='center' className='gap-x-1'>
            <Text weight='700' sizes='18'>
              300,000원
            </Text>
            <Icon
              src='/icons/system-icon/arrow/bxs-up-arrow.svg'
              alt='자산 증가 화살표'
              size='16'
            />
          </FlexBox>
        </FlexBox>
        <div className='h-[11.4rem] w-full bg-orange-500 px-[0.8rem]'>graph</div>
      </CardContent>
    </Card>
  );
};

const CardListTop = () => {
  return (
    <Card className='relative h-[23rem] w-full shrink-0 overflow-hidden'>
      <CardContent flexDirection='col' className='gap-y-16 p-24'>
        <FlexBox flexDirection='col' className='text-gray-500'>
          <Text weight='500' sizes='16'>
            20대 남성 중
          </Text>
          <FlexBox alignItems='center' className='gap-x-1'>
            <Text weight='500' sizes='16'>
              상위{' '}
              <Text className='text-black' weight='700' sizes='16'>
                30%
              </Text>
              에 해당해요
            </Text>
          </FlexBox>
        </FlexBox>
        <FlexBox className='h-[11.4rem]'>
          <div className="relative inline-block rounded-full bg-gray-800 p-10 text-center text-white before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:border-b-0 before:border-l-8 before:border-r-8 before:border-t-8 before:border-solid before:border-transparent before:border-t-gray-800 before:content-['']">
            <Text weight='500'>입출금 통장에 비율이 높아요</Text>
          </div>
          <div className='absolute -bottom-8 right-[2.4rem] h-[19.7rem] w-[10rem]'>
            <Image
              src='/images/asset-page/male.svg'
              alt='남성 이미지'
              fill
              sizes='auto'
              className='pointer-events-none object-top'
            />
          </div>
        </FlexBox>
      </CardContent>
    </Card>
  );
};
