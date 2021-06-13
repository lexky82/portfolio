import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import { UserOutlined, CalendarOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined, EditOutlined } from '@ant-design/icons';
const Info = () => {

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
        <section id="info">
            <Container>
                <Title title="INFO" />
                <div className="AboutMe_basic-infos__36Rb0">
                    <div className="AboutMe_basic-info-wrapper__3E-0e">
                        <div className="AboutMe_basic-info__3sjma">
                            <div className="AboutMe_icon-img-wrapper__YKbSY">
                                <UserOutlined style={{ fontSize : '3rem' }} />
                            </div>
                            <div className="AboutMe_field__5L2Lm">
                                <div className="AboutMe_field-label__1B57s">이름</div>
                                <div className="AboutMe_field-value__qT3Li">권혁진</div>
                            </div>
                        </div>
                    </div>
                    <div className="AboutMe_basic-info-wrapper__3E-0e">
                        <div className="AboutMe_basic-info__3sjma">
                            <div className="AboutMe_icon-img-wrapper__YKbSY">
                                <CalendarOutlined style={{ fontSize : '3rem' }} />
                            </div>
                            <div className="AboutMe_field__5L2Lm">
                                <div className="AboutMe_field-label__1B57s">생년월일</div>
                                <div className="AboutMe_field-value__qT3Li">2001.05.14</div>
                            </div>
                        </div>
                    </div>
                    <div className="AboutMe_basic-info-wrapper__3E-0e">
                        <div className="AboutMe_basic-info__3sjma">
                            <div className="AboutMe_icon-img-wrapper__YKbSY">
                                <EnvironmentOutlined style={{ fontSize : '3rem' }} />
                            </div>
                            <div className="AboutMe_field__5L2Lm">
                                <div className="AboutMe_field-label__1B57s">주소지</div>
                                <div className="AboutMe_field-value__qT3Li">서울특별시 노원구</div>
                            </div>
                        </div>
                    </div>
                    <div className="AboutMe_basic-info-wrapper__3E-0e">
                        <div className="AboutMe_basic-info__3sjma">
                            <div className="AboutMe_icon-img-wrapper__YKbSY">
                                <PhoneOutlined style={{ fontSize : '3rem' }} />
                            </div>
                            <div className="AboutMe_field__5L2Lm">
                                <div className="AboutMe_field-label__1B57s">연락처</div>
                                <div className="AboutMe_field-value__qT3Li">010-9569-5253</div>
                            </div>
                        </div>
                    </div>
                    <div className="AboutMe_basic-info-wrapper__3E-0e">
                        <div className="AboutMe_basic-info__3sjma">
                            <div className="AboutMe_icon-img-wrapper__YKbSY">
                                <MailOutlined style={{ fontSize : '3rem' }} />
                            </div>
                            <div className="AboutMe_field__5L2Lm">
                                <div className="AboutMe_field-label__1B57s">이메일</div>
                                <div className="AboutMe_field-value__qT3Li">lexky82@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="AboutMe_basic-info-wrapper__3E-0e">
                        <div className="AboutMe_basic-info__3sjma">
                            <div className="AboutMe_icon-img-wrapper__YKbSY">
                                <EditOutlined style={{ fontSize : '3rem' }} />
                            </div>
                            <div className="AboutMe_field__5L2Lm">
                                <div className="AboutMe_field-label__1B57s">학력</div>
                                <div className="AboutMe_field-value__qT3Li">서울아이티고등학교 졸업(스마트전자통신)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Info;
