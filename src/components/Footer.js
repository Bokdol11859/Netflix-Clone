import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterConatiner>
      <FooterContent>
        <FooterLinkContainer>
          {/* <FooterLinkTitle>넷플릭스 대한민국</FooterLinkTitle> */}
          <FooterLinkContent>
            <FooterLink href="https://help.netflix.com/ko/">
              자막 및 음성
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              화면 해설
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              고객 센터
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              기프트카드
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              미디어 센터
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              투자 정보(IR)
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              입사 정보
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              이용 약관
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              개인정보
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              법적 고지
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              쿠키 설정
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              회사 정보
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              문의하기
            </FooterLink>
          </FooterLinkContent>
          <FooterDescContainer>
            <FooterDescRights>
              넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
              제2018-서울종로-0426호 전화번호: 080-001-9587
            </FooterDescRights>
            <FooterDescRights>대표: 레지널드 숀 톰프슨</FooterDescRights>
            <FooterDescRights>이메일 주소: korea@netflix.com</FooterDescRights>
            <FooterDescRights>
              주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동
              20층 우편번호 03161
            </FooterDescRights>
            <FooterDescRights>사업자등록번호: 165-87-00119</FooterDescRights>
            <FooterDescRights>
              클라우드 호스팅: Amazon Web Services Inc.
            </FooterDescRights>
            <FooterDescRights>공정거래위원회 웹사이트</FooterDescRights>
          </FooterDescContainer>
        </FooterLinkContainer>
      </FooterContent>
    </FooterConatiner>
  );
};

const FooterConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 17px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.h2`
  color: gray;
  font-size: 10px;
  text-align: left;
`;

export default Footer;
