require('dotenv').config();
import { getConfig } from './Env/environment';
import { polly } from './polly';

polly.start(getConfig());