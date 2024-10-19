import { ItemResponse } from '@team-moebius/api-typescript';
import { TagProps } from 'src/components/atom/Tag';

interface SwitchDetailData {
  title?: string;
  thumbnails: Array<string>;
  date?: Date;
  description?: string;
  hashtags: Array<TagProps>;
  location?: string;
  categories: Array<TagProps>;
  oppositeCategories: Array<TagProps>;
}

// interface SwitchDetailData {
//   name: string;
//   images: Array<string>;
//   description: string;
//   hashtags: Array<TagProps>;
//   category: Array<TagProps>;
//   preferredCategories: Array<TagProps>;
//   preferredLocations: Array<string>;
// }

interface RegisterDto {
  category: string;
  name: string;
  description: string;
  images: Array<string>;
  hashtags: Array<string>;
  preferredCategories: Array<string>;
  preferredLocations: Array<string>;
}

export { SwitchDetailData, RegisterDto };
