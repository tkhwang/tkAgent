import axios from "axios";

import { NaverBookResponse, NaverBookSearchParams } from "@/types/book/naver-book";

const NAVER_API_URL = "https://openapi.naver.com/v1/search/book.json";

// 네이버 API 클라이언트 인스턴스 생성
const naverApiClient = axios.create({
  baseURL: NAVER_API_URL,
  headers: {
    "X-Naver-Client-Id": process.env.EXPO_PUBLIC_NAVER_CLIENT_ID!,
    "X-Naver-Client-Secret": process.env.EXPO_PUBLIC_NAVER_CLIENT_SECRET!,
  },
});

export async function searchNaverBooks(params: NaverBookSearchParams): Promise<NaverBookResponse> {
  const { data } = await naverApiClient.get("", {
    params: {
      ...params,
      display: params.display || 10,
      start: params.start || 1,
    },
  });
  // console.log(`[+][searchNaverBooks] response: ${JSON.stringify(data)}`);
  return data;
}
