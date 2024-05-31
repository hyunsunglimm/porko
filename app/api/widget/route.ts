import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = [
    {
      showWidget: [
        { id: 'a', title: '이번달 남은 예산' },
        { id: 'b', title: '다가오는 지출' },
        { id: 'c', title: '저번달에 쓴 돈' },
        { id: 'd', title: '?월 현재 소비' },
        { id: 'e', title: '이번달 카드실적' },
        { id: 'f', title: '나의 챌린지' }
      ],
      hideWidget: [
        { id: 'g', title: '나의 신용점수' },
        { id: 'h', title: '매월 나가는 돈' }
      ]
    }
  ];
  await new Promise((res) => setTimeout(res, 3000));
  return NextResponse.json(data);
};
