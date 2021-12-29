import pipeProcess1 from './assets/img/process1.jpg';
import pipeProcess2 from './assets/img/process2.jpg';
import pipeProcess3 from './assets/img/process3.jpg';
import pipeProcess4 from './assets/img/process4.jpg';
import pipeProcess5 from './assets/img/process5.jpg';
import pipeProcess6 from './assets/img/process6.jpg';

import before1 from './assets/img/before1.jpg';
import after1 from './assets/img/after1.jpg';

export const mainInfo = {
  title: {
    name: '제공 서비스',
    iconClassName: 'fa-hammer',
  },
  content: [
    {
      name: '배관',
      kind: '기계실 배관, 가정 배관기계실 배관, 가정 배관기계실 배관, 가정 배관기계실 배관, 가정 배관기계실 배관, 가정 배관',
    },
    {
      name: '욕실',
      kind: '인테리어, 방수, 세면대&변기 설치',
    },
    {
      name: '용접',
      kind: '아크용접, 가스용접',
    },
  ],
};

export const pipeInfo = {
  title: {
    name: '배관설비',
    iconClassName: 'fa-faucet',
  },
  content: [
    {
      name: '현장',
      img: pipeProcess1,
    },
    {
      name: '준비',
      img: pipeProcess2,
    },
    {
      name: '철거',
      img: pipeProcess3,
    },
    {
      name: '배관교체',
      img: pipeProcess4,
    },
    {
      name: '미장',
      img: pipeProcess5,
    },
    {
      name: '완료',
      img: pipeProcess6,
    },
  ],
};

export const heatingInfo = {
  title: {
    name: '난방설비',
    iconClassName: 'fa-sun',
  },

  content: [
    {
      name: '현장2',
      img: pipeProcess1,
    },
    {
      name: '준비2',
      img: pipeProcess2,
    },
    {
      name: '철거2',
      img: pipeProcess3,
    },
    {
      name: '배관교체2',
      img: pipeProcess4,
    },
    {
      name: '미장2',
      img: pipeProcess5,
    },
    {
      name: '완료2',
      img: pipeProcess6,
    },
  ],
};

export const leakingInfo = {
  title: {
    name: '누수설비',
    iconClassName: 'fa-tint',
  },

  content: [
    {
      img: before1,
      work: '시공전',
      name: '배관동파수리',
      description: '한파로 배수관 배관이 얼어버리는 문제 발생 하여, 화장실, 씽크대 물이 안나오는 현상이 발생 하였다',
    },
    {
      img: after1,
      work: '시공후',
      name: '배관동파수리',
      description: '얼음을 녹이고 손상된 파이프 부위를 부품으로 새로 교체한 하였습니다',
    },
  ],
};

export const repairsInfo = {
  title: {
    name: '집수리',
    iconClassName: 'fa-tools',
  },

  content: [
    {
      img: before1,
      work: '시공전',
      name: '배관동파수리',
      description: '한파로 배수관 배관이 얼어버리는 문제 발생 하여, 화장실, 씽크대 물이 안나오는 현상이 발생 하였다',
    },
    {
      img: after1,
      work: '시공후',
      name: '배관동파수리',
      description: '얼음을 녹이고 손상된 파이프 부위를 부품으로 새로 교체한 하였습니다',
    },
  ],
};

export const questionInfo = {
  main: [
    {
      question: '배관설비과 무엇인가요?',
      answer: '가정 내 냉온수 공급, 실내 환기, 생활 하수 배출 따위에 필요한 급수 및 배수 설비 입니다. ',
    },
    {
      question: '배관설비과 무엇인가요?',
      answer: '가정 내 냉온수 공급, 실내 환기, 생활 하수 배출 따위에 필요한 급수 및 배수 설비 입니다. ',
    },
  ],
  pipe: [
    {
      question: '배관설비과 무엇인가요?',
      answer: '가정 내 냉온수 공급, 실내 환기, 생활 하수 배출 따위에 필요한 급수 및 배수 설비 입니다. ',
    },
    {
      question: '배관설비과 무엇인가요?',
      answer: '가정 내 냉온수 공급, 실내 환기, 생활 하수 배출 따위에 필요한 급수 및 배수 설비 입니다. ',
    },
  ],
  heating: [
    {
      question: '난방설비과 무엇인가요?',
      answer: '가정 내 냉온수 공급, 실내 환기, 생활 하수 배출 따위에 필요한 급수 및 배수 설비 입니다. ',
    },
    {
      question: '배관설비과 무엇인가요?',
      answer: '가정 내 냉온수 공급, 실내 환기, 생활 하수 배출 따위에 필요한 급수 및 배수 설비 입니다. ',
    },
  ],
  leaking: [
    {
      question: '난방설비과 무엇인가요?',
      answer: '가정 내 냉온수 공급, 실내 환기, 생활 하수 배출 따위에 필요한 급수 및 배수 설비 입니다. ',
    },
    {
      question: '배관설비과 무엇인가요?',
      answer: '가정 내 냉온수 공급, 실내 환기, 생활 하수 배출 따위에 필요한 급수 및 배수 설비 입니다. ',
    },
  ],
  repairs: [
    {
      question: '누수설비는 무엇인가요?',
      answer: '가정 내 냉온수 공급, 실내 환기, 생활 하수 배출 따위에 필요한 급수 및 배수 설비 입니다. ',
    },
    {
      question: '집수리는 어떤걸 하나요?',
      answer: '가정 내 냉온수 공급, 실내 환기, 생활 하수 배출 따위에 필요한 급수 및 배수 설비 입니다. ',
    },
  ],
};
