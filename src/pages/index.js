import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || '권혁진의 포트폴리오입니다.'}</title>
        <html lang={lang || 'ko'} />
        <meta name="description" content={description || 'HyeokJin Kwon'} />
      </Helmet>
      <App />
    </>
  );
};
