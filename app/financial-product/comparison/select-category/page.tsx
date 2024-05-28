'use client';

import { IsBackHeader } from '@/components/header';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import BottomButton from '../_components/BottomButton';
import CategoryCard from './_components/CategoryCard';

const categories = [
  { title: '대중교통', iconPath: '/icons/product/product-traffic.svg' },
  { title: '쇼핑', iconPath: '/icons/product/product-shopping.svg' },
  { title: '카페', iconPath: '/icons/product/product-cafe.svg' },
  { title: '편의점', iconPath: '/icons/product/product-cvs.svg' },
  { title: '마트', iconPath: '/icons/product/product-mart.svg' },
  { title: '문화', iconPath: '/icons/product/product-culture.svg' },
  { title: '백화점', iconPath: '/icons/product/product-stores.svg' },
  { title: '통신비', iconPath: '/icons/product/product-communication.svg' },
  { title: '주유', iconPath: '/icons/product/product-oiling.svg' },
  { title: '여행', iconPath: '/icons/product/product-travel.svg' },
  { title: '온라인', iconPath: '/icons/product/product-online.svg' },
  { title: '구독', iconPath: '/icons/product/product-subscribe.svg' }
];

const QUERY_KEY = 'category';

const SelectCategoryPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategories = searchParams.getAll(QUERY_KEY);

  const params = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);

  useEffect(() => {
    if (selectedCategories.length > 2) {
      params.delete(QUERY_KEY, selectedCategories[0]);
      router.push(pathname + '?' + params.toString(), { scroll: false });
    }
  }, [selectedCategories, pathname, router, params]);

  const onSelect = (title: string) => {
    if (selectedCategories.includes(title)) {
      params.delete(QUERY_KEY, title);
    } else {
      params.append(QUERY_KEY, title);
    }

    router.push(pathname + '?' + params.toString(), {
      scroll: false
    });
  };

  return (
    <>
      <IsBackHeader href={`./?${searchParams.toString()}`} defaultColor='#f2f4f6' />
      <main className='bg-gray-50 px-20 pb-[13.2rem]'>
        <FlexBox flexDirection='col' className='gap-8'>
          <Text sizes='24' weight='500'>
            어떤 항목을 기준으로 <br /> 비교하고 싶으세요?
          </Text>
          <Text sizes='16' weight='500'>
            최대 2개까지만 선택할 수 있어요!
          </Text>
        </FlexBox>
        <ul className='mt-28 grid grid-cols-3 gap-12'>
          {categories.map(({ title, iconPath }) => {
            const isSelected = selectedCategories.some((c) => c === title);

            return (
              <li key={title}>
                <CategoryCard
                  title={title}
                  iconPath={iconPath}
                  isSelected={isSelected}
                  onSelect={onSelect}
                />
              </li>
            );
          })}
        </ul>
        {selectedCategories.length >= 2 && (
          <BottomButton
            title='결과보기'
            path='/financial-product/comparison/select-category/result'
          />
        )}
      </main>
    </>
  );
};

export default SelectCategoryPage;
