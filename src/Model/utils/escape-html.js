import { ESCAPES_CHARS, ESCAPES_REG_EXP } from '../constants';

const escapeHtml = text =>
  text.toString().replace(ESCAPES_REG_EXP, char => ESCAPES_CHARS[char]);

export default escapeHtml;
