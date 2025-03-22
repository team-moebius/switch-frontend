const USERINFO_MOCK = {
  id: 30,
  phone: '01012345678',
  email: 'example@ex.com',
  nickname: '집닭',
  introduction: '제 꿈은 집 닭으로 날개를 펴는 거에요!',
  switchCount: 2,
  switchAbortCount: 5,
  score: 3.2,
};

const USERSUMMARY_MOCK = {
  score: USERINFO_MOCK.score,
  verified: true,
  switchCount: USERINFO_MOCK.switchCount,
  nickname: USERINFO_MOCK.nickname,
  introduction: USERINFO_MOCK.introduction,
};

export { USERINFO_MOCK, USERSUMMARY_MOCK };
