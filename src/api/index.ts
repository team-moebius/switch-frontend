import * as API from '@team-moebius/api-typescript';

const BookMarkApi = new API.BookmarkAPIApi();
const ItemApi = new API.ItemAPIApi();
const ReportAPI = new API.UserAPIApi();
const SwitchAPI = new API.SwitchAPIApi();
const UserApi = new API.UserAPIApi();

export { BookMarkApi, ItemApi, ReportAPI, SwitchAPI, UserApi };