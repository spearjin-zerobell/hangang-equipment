import { dom } from './utils/babel';
import App from '@/App/App';

const $root = document.getElementById('root');

/** @jsx dom */
$root.appendChild(<App />);
