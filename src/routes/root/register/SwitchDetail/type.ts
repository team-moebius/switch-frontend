import { TagProps } from 'src/components/atom/Tag';

interface SwitchDetailData {
  title?: string;
  thumbnails: Array<string>;
  date?: Date;
  description?: string;
  hashTags: Array<TagProps>;
  location?: string;
  categories: Array<TagProps>;
  oppositeCategories: Array<TagProps>;
}

export { SwitchDetailData };
