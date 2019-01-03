import { ROOT_FONTSIZE } from './Typography';
import { 
    SCREEN_SIZE_MIN_XS, 
    SCREEN_SIZE_MIN_SM, 
    SCREEN_SIZE_MIN_MD, 
    SCREEN_SIZE_MIN_LG, 
    SCREEN_SIZE_MIN_XL
} from './ScreenSize';

const SCREEN_XS = SCREEN_SIZE_MIN_XS / ROOT_FONTSIZE;

// Extra small screen / phone
export const SCREEN_MIN_XS = `${SCREEN_XS}em`;;

const SCREEN_SM = SCREEN_SIZE_MIN_SM / ROOT_FONTSIZE;
export const SCREEN_MIN_SM = `${SCREEN_SM}em`;

const SCREEN_MD = SCREEN_SIZE_MIN_MD / ROOT_FONTSIZE;
export const SCREEN_MIN_MD = `${SCREEN_MD}em`;

const SCREEN_LG = SCREEN_SIZE_MIN_LG / ROOT_FONTSIZE;
export const SCREEN_MIN_LG = `${SCREEN_LG}em`;

const SCREEN_XL = SCREEN_SIZE_MIN_XL / ROOT_FONTSIZE;
export const SCREEN_MIN_XL = `${SCREEN_XL}em`;

export const SCREEN_MAX_XS = `${SCREEN_SM - (1 / ROOT_FONTSIZE)}em`;
export const SCREEN_MAX_SM = `${SCREEN_MD - (1 / ROOT_FONTSIZE)}em`;
export const SCREEN_MAX_MD = `${SCREEN_LG - (1 / ROOT_FONTSIZE)}em`;
export const SCREEN_MAX_LG = `${SCREEN_XL - (1 / ROOT_FONTSIZE)}em`;

// Pixel 
// MIN
export const SCREEN_MIN_SM_PX = `${SCREEN_SIZE_MIN_SM}px`;
export const SCREEN_MIN_MD_PX = `${SCREEN_SIZE_MIN_MD}px`;
export const SCREEN_MIN_LG_PX = `${SCREEN_SIZE_MIN_LG}px`;
export const SCREEN_MIN_XL_PX = `${SCREEN_SIZE_MIN_XL}px`;
// MAX
export const SCREEN_MAX_XS_PX = `${SCREEN_SIZE_MIN_SM - 1}px`;
export const SCREEN_MAX_SM_PX = `${SCREEN_SIZE_MIN_MD - 1}px`;
export const SCREEN_MAX_MD_PX = `${SCREEN_SIZE_MIN_LG - 1}px`;
export const SCREEN_MAX_LG_PX = `${SCREEN_SIZE_MIN_XL - 1}px`;