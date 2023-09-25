import React, { useState  , useEffect , useCallback} from 'react'
import ImgList from './components/ImgList'
import Loading from './components/Loading'
import { createGlobalStyle } from "styled-components";
import useScroll from './Hooks/useScroll';

export const GlobalStyle = createGlobalStyle`
  /* reset */
  body,
  ul,
  li,
  h1,
  h2,
  h3,
  p {
    padding: 0;
    margin: 0;
  }
  img {
    vertical-align: top;
  }
  h1,
  h2,
  h3 {
    font: inherit;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button:enabled {
    cursor: pointer;
  }

  
  
`;



export default function App2() {

  // 로딩중인 상태를 관리함 
  const [isLoading , setIsLoading] = useState(false);
  // 이미지 데이터를 관리함
  const [data , setData] = useState([]);
  // api에 전달할 페이지 값을 관리
  const [pageToFetch , setPageToFetch] = useState(1);

  console.log(isLoading);
  //스크롤이 바닥인지 확인
  const isBottom = useScroll();

  // 데이터를 가져오는 함수
  const fetchData = useCallback(async () => {
    try {

      setIsLoading(true);
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${pageToFetch}&limit=20`
      );

      if (!res.ok) {
        throw new Error('네트워크에 문제가 발생했습니다');
      }

      const result = await res.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }finally {
      setIsLoading(false);
    }
  }, [pageToFetch]);

// 하단으로 스트롤 할 때 다음 페이지 데이터 가져오기
const fetchMoreData = useCallback(() => {
  if (isLoading) return;
  setPageToFetch((prevPage) => prevPage + 1);
}, [isLoading]);
  
useEffect(() => {
  if (isBottom) {
    fetchMoreData();
  }
}, [isBottom, fetchMoreData]);


  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then((res) => {
        setData((prevRes) => [...prevRes, ...res]);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pageToFetch, fetchData]);


  return (
    <>
      <GlobalStyle/>
      <ImgList data = {data}/>
      {/* isLoading가 true면  isLoading를 보여준다.*/}
      {isLoading && <Loading/>}
    </>
  )
}
