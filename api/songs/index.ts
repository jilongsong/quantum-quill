import { ApiManager } from "../../utils/request"

const api = new ApiManager({
    baseURL: 'https://www.songjilong.xyz',
})


// 首页-发现
export const homePageBlock = async () =>  await api.get('/homepage/block/page');

// 歌单分类-热门
export const queryHotPlayList = async () => await api.get('/playlist/hot');

//获取歌单下所有歌曲
export const queryPlayListDetail = async () => await api.get(`/playlist/track/all?id=24381616&limit=10&offset=1`);

//获取音乐url
export const queryMusic = async (params:{id:string,level:string}) => await api.get('/song/url/v1', params);
//获取歌曲详情
export const queryMusicDetail = async (params:{ids:string}) => await api.get('/song/detail',params);

//获取每日推荐歌曲
export const queryRecommendSongs = async () => await api.get(`/personalized/newsong?limit=10&timestamp=${new Date().getTime()}`);
//获取最热歌手
export const queryHotArtists = async () => await api.get(`/top/artists?offset=0&limit=5`);