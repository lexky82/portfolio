import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="ABOUT ME" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    '처음 입사하고 수행했던 업무는 .NET Framework를 이용해서 전달받은 Serial 데이터를 사용자가 GUI로 제어하는 Form 개발 업무와 ASP.Net을 이용해 DB의 데이터를 웹에 보여주거나 DB를 유지보수 하는 업무를 맡았었습니다. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    '수행하던 업무들이 다소 오래되어 사장 되어가는 기술들 이여서 회의감을 느끼게 되었고 ASP.Net을 업무를 통해서 접하면서 웹의 흥미를 가지게 되는 계기가 되었습니다.'}
                </p>
                <p className="about-wrapper__info-text">{paragraphThree || '무언가를 배울 땐 기초가 가장 중요하다는 생각을 갖고 있습니다. 웹과 웹브라우저 HTML, CSS, JS를 코어개념과 원리를 중점으로 공부했으며 React를 사용하여 토이프로젝트 진행하며 프론트엔드 꿈을 키워가고 있습니다. '}</p>
                { resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      이력서 보기
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
