import * as helper from './helper.js';
import './b.scss';

let f = (letter) => (helper.createButton(`Button on page ${letter}`));

helper.appendToBody(f('B'));
