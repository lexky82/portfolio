import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'ko', // e.g: en, es, fr, jp
  description: '안녕하세요! 신입개발자 권혁진입니다.',
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'faceimage.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'linkDeveloper.jpeg',
    title: 'Link-Developer',
    info: '개발인원: 1인, 소요기간: 2달',
    info2:
      'React와 Express로 개발한 스터디 웹 서비스입니다. 백엔드와 협업이 필수적이기에 프론트엔드 개발자지만 조금이나마 백엔드 개발을 통해서 백엔드와의 협업 프로세스를 알 수 있게 되었고 ' +
      '기본적인 React 동작원리와 hook을 사용하는 방법과 가장 중요한 상태관리를 어떻게 해야할지를 파악하게 되었습니다.',
    url: 'http://3.16.138.36:5000/',
    repo: 'https://github.com/lexky82/link-developer', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '010-9569-5253',
  btn: '메일 보내기',
  email: 'lexky82@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lexky82',
      resume: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
