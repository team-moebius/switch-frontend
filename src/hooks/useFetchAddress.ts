import { useState } from 'react';

const useFetchAddress = () => {
  const [province, setProvince] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [dong, setDong] = useState<string>('');

  const fetchAddress = async (postCord: string) => {
    try {
      const response = await fetch(
        `https://business.juso.go.kr/addrlink/addrLinkApi.do?currentPage=1&countPerPage=10&keyword=${postCord}&confmKey=${process.env.EXPO_PUBLIC_ADDRESS_API_CONFIRM_KEY}&resultType=json`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const responseBody = await response.text();
      const jsonStr = JSON.parse(responseBody);

      if (jsonStr.results && jsonStr.results.common) {
        const errCode = jsonStr.results.common.errorCode;
        const errDesc = jsonStr.results.common.errorMessage;
        if (errCode !== '0') {
          alert(errCode + '=' + errDesc);
        } else {
          setProvince(jsonStr.results.juso[0].siNm);
          setCity(jsonStr.results.juso[0].sggNm);
          setDong(jsonStr.results.juso[0].emdNm);
        }
      } else {
        console.error('예상하지 못한 응답 형식입니다.');
      }
    } catch (error: any) {
      console.error('에러발생: ' + error.message);
    }
  };

  return { province, city, dong, fetchAddress };
};

export default useFetchAddress;
