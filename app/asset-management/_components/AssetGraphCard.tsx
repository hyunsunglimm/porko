'use client';
import React from 'react';
import { Plugin } from 'chart.js';
import { Card, CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import DoughnutChart from '@/components/DoughnutChart';
import {
  generateDoughnutChartData,
  myAssetsOptions,
  DoughnutChartDataset
} from '@/utils/graph-config';

const AssetGraphCard = () => {
  const labels = ['입출금 65%', '예적금 25%', '투자 10%', '보험', '부동산'];
  const dataSets: DoughnutChartDataset[] = [
    {
      data: [65, 25, 10, 0, 0],
      backgroundColor: ['#bad9ff', '#c3f3c7', '#d3c2ff', '#ddd', '#ddd', '#ddd'],
      borderWidth: 0
    }
  ];

  const legendMargin: Plugin<'doughnut'> = {
    id: 'legendMargin'
    // beforeLayout: (chart) => {
    //   if (chart.legend) {
    //     chart.legend.options.labels.boxPadding = 320; // Increase the padding between legend items and chart
    //   }
    // }
  };
  return (
    <Card className='h-[23rem] w-full shrink-0'>
      <CardContent flexDirection='col' className='gap-y-16 p-24'>
        <FlexBox flexDirection='col' className='text-gray-500'>
          <Text weight='500' sizes='16'>
            가지고 있는 자산 중에
          </Text>
          <FlexBox alignItems='center' className='gap-x-1'>
            <Text weight='500' sizes='16'>
              <Text className='text-black' weight='700' sizes='16'>
                입출금
              </Text>
              이 가장 많아요
            </Text>
          </FlexBox>
        </FlexBox>
        <div className='relative h-[11.8rem] w-full px-[0.8rem]'>
          <div className='absolute -top-5 left-0 right-0 mx-auto h-[13.8rem] w-full'>
            <DoughnutChart
              dataConfig={generateDoughnutChartData(labels, dataSets)}
              options={myAssetsOptions}
              plugins={legendMargin}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetGraphCard;
