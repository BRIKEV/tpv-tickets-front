import Cookies from 'js-cookie';
import {
  cookieOptions,
  COOKIE_SESSION_TOKEN,
  COOKIE_USERID,
  NOT_VALID_VALUES,
} from '../constants';

const validStorageValue = (value, cb) => {
  if (NOT_VALID_VALUES.includes(value)) return;
  cb();
};

const lStorage = {
  setItem: (key, value) => {
    validStorageValue(value, () => {
      localStorage.setItem(key, value);
    });
  },
  getItem: key => localStorage.getItem(key) || '',
  removeItem: key => localStorage.removeItem(key),
};

const options = cookieOptions();

const cookieStorage = {
  setItem: (key, value) => {
    validStorageValue(value, () => {
      Cookies.set(key, value, options);
    });
  },
  getItem: key => Cookies.get(key, options) || '',
  getToken: () => {
    const id = COOKIE_SESSION_TOKEN;
    return Cookies.get(id, options) || '';
  },
  removeItem: key => Cookies.remove(key, options),
  getUserId: () => {
    const id = COOKIE_USERID;
    return Cookies.get(id, options) || '';
  },
};

const storage = (type = 'lStorage') => {
  const types = {
    lStorage,
    cookieStorage,
  };
  if (typeof (Storage) !== 'undefined') {
    return types[type];
  }
  return type.cookieStorage;
};

export default storage;
