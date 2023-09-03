type UserInfoData = {
  userName: string;
  verified: boolean;
  switchCount: number;
  userRate: number;
  introduce: string;
};

const USERINFO_MOCK: UserInfoData = {
  userName: '집오리',
  verified: true,
  switchCount: 4,
  userRate: 0.8,
  introduce: '제 꿈은 클립으로 집까지 바꾸는거에요:)',
};

export { UserInfoData, USERINFO_MOCK };
