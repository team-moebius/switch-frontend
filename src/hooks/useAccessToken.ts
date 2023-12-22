import { useEffect, useState } from 'react';
import { expoSecureStore } from 'src/common/secureStore';

// secureStore에 저장된 데이터를 가지고 오는 훅
const useAccessToken = (key: string) => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await expoSecureStore.getToken(key);
      if (result) setData(result);
    };
    getData();
  }, []);

  return data;
};

export { useAccessToken };
