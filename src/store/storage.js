// import { setBarearToken } from '../services/api'

export const getLocalToken = () => localStorage.getItem('goscore-token-user');
export const setLocalToken = token => localStorage.setItem('goscore-token-user', token);
export const deleteLocalToken = () => localStorage.removeItem('goscore-token-user');