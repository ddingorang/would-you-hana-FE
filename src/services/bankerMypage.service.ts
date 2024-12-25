import { config } from "../config/config";
import { request } from "../hoc/request";
import { BankerInfoResponeDTO } from "../types/dto/mypage.dto";

const BASE_URL = config.apiUrl;

export const bankerMypageService = {
    // 질문 스크랩
    getBankerMyPageInfo: (bankerId: number) => {
        return request<BankerInfoResponeDTO>({
            method: 'GET',
            url: `${BASE_URL}/my/bankers/edit/info`,
            params: {
                bankerId: bankerId.toString()
            }
        });
    },
   
}