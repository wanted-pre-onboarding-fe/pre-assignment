import React from 'react';
import styled from 'styled-components';

const PreAssignmentGuide = () => {
  return (
    <Container>
      <Section>
        <Title>
          Wanted | Pre-Onboarding FrontEnd Course Pre-Assignment 안내 사항
        </Title>
      </Section>
      <Section>
        <OrderedList>
          <GuideList>
            vscode의&nbsp;
            <PointColorText textColor="coral">ESLint</PointColorText>
            &nbsp;extension을 설치하세요.
          </GuideList>
          <GuideList>
            vscode의&nbsp;
            <PointColorText textColor="coral">Prettier</PointColorText>
            &nbsp;extension을 설치하세요.
          </GuideList>
          <GuideList>
            vscode settings.json은 <PointColorText>workspace</PointColorText>
            용을 사용해 주세요. vscode에서 단축키 [
            <PointColorText textColor="coral">command + ,</PointColorText>] 를
            누르면 설정 창이 나옵니다.
          </GuideList>
          <GuideList>
            styled-components는 자동완성 기능을 제공하지 않습니다.&nbsp;
            <PointColorText textColor="coral">
              vscode-styled-components&nbsp;
            </PointColorText>
            extension을 설치해서 사용하세요.
          </GuideList>
          <GuideList>
            <PointColorText textColor="coral">
              Github Repository Issue
            </PointColorText>
            에 있는&nbsp;
            <PointColorText textColor="coral">
              5가지의 Assignment
            </PointColorText>
            를 해결 해주세요.
          </GuideList>
          <GuideList>
            해당 페이지 파일은 삭제하지 마시고 App.js에&nbsp;
            <PointColorText textColor="coral">
              import 문과 컴포넌트
            </PointColorText>
            는 제거 해주세요.
          </GuideList>
        </OrderedList>
      </Section>
    </Container>
  );
};

export default PreAssignmentGuide;

const Container = styled.div`
  min-height: 100vh;
  background-color: lightGray;
  display: flex;
  justify-content: center;
  align-items: cneter;
  flex-direction: column;
`;
const Section = styled.section`
  padding-top: 20px;
`;
const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  line-height: 90px;
`;
const OrderedList = styled.ol`
  list-style-position: inside;
  list-style-type: decimal;
  text-align: center;
  font-size: 28px;
`;
const GuideList = styled.li`
  line-height: 70px;
`;
const PointColorText = styled.p`
  color: ${(props) => props.textColor};
  display: inline;
`;
