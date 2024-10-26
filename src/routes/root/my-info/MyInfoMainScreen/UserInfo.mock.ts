import { UserInfoResponse } from '@team-moebius/api-typescript';

const USERINFO_MOCK: UserInfoResponse = {
  id: 30,
  phone: '01012345678',
  email: 'example@ex.com',
  nickname: '집닭',
  introduction: '제 꿈은 집 닭으로 날개를 펴는 거에요!',
  switchCount: 2,
  switchAbortCount: 5,
  score: 3.2,
};

export { USERINFO_MOCK };
