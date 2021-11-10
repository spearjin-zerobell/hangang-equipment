import pipeProcess1 from './assets/img/process1.jpeg';
import pipeProcess2 from './assets/img/process2.jpeg';
import pipeProcess3 from './assets/img/process3.jpeg';
import pipeProcess4 from './assets/img/process4.jpeg';
import pipeProcess5 from './assets/img/process5.jpeg';
import pipeProcess6 from './assets/img/process6.jpeg';

import icon1 from './assets/icon/service1.svg';
import icon2 from './assets/icon/service2.svg';
import icon3 from './assets/icon/service3.svg';
import icon4 from './assets/icon/service4.svg';

import before1 from './assets/img/before1.jpeg';
import after1 from './assets/img/after1.jpeg';

export const pipeInfo = {
  title: {
    name: '배관설비',
    iconClassName: 'fa-faucet',
  },

  content: [
    {
      name: '0.1 현장',
      img: pipeProcess1,
    },
    {
      name: '02. 준비',
      img: pipeProcess2,
    },
    {
      name: '03. 철거',
      img: pipeProcess3,
    },
    {
      name: '04. 배관교체',
      img: pipeProcess4,
    },
    {
      name: '05. 미장',
      img: pipeProcess5,
    },
    {
      name: '06. 완료',
      img: pipeProcess6,
    },
  ],
};

export const heatingInfo = {
  title: {
    name: '난방설비',
    icon: icon2,
  },

  content: [
    {
      name: '0.1 현장2',
      img: pipeProcess1,
    },
    {
      name: '02. 준비2',
      img: pipeProcess2,
    },
    {
      name: '03. 철거2',
      img: pipeProcess3,
    },
    {
      name: '04. 배관교체2',
      img: pipeProcess4,
    },
    {
      name: '05. 미장2',
      img: pipeProcess5,
    },
    {
      name: '06. 완료2',
      img: pipeProcess6,
    },
  ],
};

export const leakingInfo = {
  title: {
    name: '누수설비',
    icon: icon3,
  },
  content: [
    {
      name: '시공전',
      img: before1,
    },
    {
      name: '시공후',
      img: after1,
    },
  ],
};

export const repairsInfo = {
  title: {
    name: '집수리',
    icon: icon4,
  },
  content: [
    {
      name: '시공전',
      img: before1,
    },
    {
      name: '시공후',
      img: after1,
    },
  ],
};

export const questionInfo = {
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

// {
//   question: '비용은 어떻게 되나요?',
//   answer: '방문후 정확한 견적이 가능합니다.',
// },
