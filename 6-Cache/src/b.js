import * as helper from './helper.js';
import React from 'react';
import './h.css';
import './b.scss';

let f = (letter) => (helper.createButton(`Button on page ${letter} - ${React.version}`));

helper.appendToBody(f('B'));
