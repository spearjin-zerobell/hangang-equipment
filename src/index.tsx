import { transJSXtoDOM } from './utils/babel';
import App from '@/App/App';

const $root = document.getElementById('root');

/** @jsx transJSXtoDOM */
$root.appendChild(<App />);
