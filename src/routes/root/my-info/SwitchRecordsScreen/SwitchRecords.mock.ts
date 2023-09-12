import { Data as SwitchListData } from 'src/components/molecule/SwitchListItem';

interface RecordData extends SwitchListData {
  date: string;
}

const RecordMock: Array<RecordData> = [
  {
    myItem: {
      name: '이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1이브이1',
      src: 'https://cdn-gq.github.io/pokemon/133.webp',
    },
    selectedItem: {
      name: '꼬부기1',
      src: 'https://cdn-gq.github.io/pokemon/7.webp',
    },
    date: '2023.08.15',
  },
  {
    myItem: {
      name: '이브이2',
      src: 'https://cdn-gq.github.io/pokemon/133.webp',
    },
    selectedItem: {
      name: '꼬부기2',
      src: 'https://cdn-gq.github.io/pokemon/7.webp',
    },
    date: '2023.08.10',
  },
  {
    myItem: {
      name: '이브이3',
      src: 'https://cdn-gq.github.io/pokemon/133.webp',
    },
    selectedItem: {
      name: '꼬부기3',
      src: 'https://cdn-gq.github.io/pokemon/7.webp',
    },
    date: '2023.07.28',
  },
];

export { RecordMock };
export type { RecordData };
