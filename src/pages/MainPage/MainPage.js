import React from "react";
import requests from "../../api/requests";
import Banner from "../../components/Banner";
import Row from "../../components/Row";

const MainPage = () => {
  return (
    <>
      <Banner />
      <Row
        title="오직 넷플릭스에서"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="지금 뜨는 콘텐츠" id="TN" fetchUrl={requests.fetchTrending} />
      <Row
        title="오늘 대한민국의 TOP 20 영화"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      />
      <Row title="액션 영화" id="TR" fetchUrl={requests.fetchActionMovies} />
      <Row title="코미디 영화" id="CM" fetchUrl={requests.fetchComedyMovies} />
    </>
  );
};

export default MainPage;
