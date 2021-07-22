import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'ko', // e.g: en, es, fr, jp
  description: '안녕하세요! 신입 개발자 권혁진입니다.',
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
  resume: 'https://drive.google.com/file/d/1fu_4Q6WrTfsydRubweKvGjYcB6nFFDZ6/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'MyDiary.jpeg',
    title: 'MyDiary',
    info: '개발인원: 1인, 소요기간: 2021. 6.24 ~ 7.21 (4 주)',
    info2:
      '현재 트렌드한 언어와 라이브러리를 사용해서 개발한 웹앱 서비스입니다. SWR, Styled Components를 처음 사용해보았으며 첫 프로젝트인 Link-Developer에서 느낀 부족한 점들을 개선 하고자 프로젝트를 기획했습니다.' +
      '프로젝트 구조와 컴포넌트 작성방식을 고민하여 Link-Developer보다 좀 더 개선하여 프론트를 설계하였습니다',

    url: 'http://18.217.128.228:5000',
    repo: 'https://github.com/lexky82/mydiary', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'linkDeveloper.jpeg',
    title: 'Link-Developer',
    info: '개발인원: 1인, 소요기간: 2021. 4.3 ~ 6.2 (2 달)',
    info2:
      'React와 Express로 개발한 스터디 웹 서비스입니다. 실무에서는 백엔드와 협업이 필수적이기에 프론트엔드 개발자지만 조금이나마 백엔드 개발을 통해서 백엔드와의 협업 프로세스를 엿볼 수 있었고 ' +
      '기본적인 React 동작원리와 hook을 사용하는 방법 그리고 가장 중요한 상태관리를 어떻게 해야 할지를 파악하게 되었습니다.',
    url: 'http://linkdeveloper.net/',
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
