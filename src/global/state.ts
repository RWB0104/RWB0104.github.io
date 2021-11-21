/**
 * 상태 모듈
 *
 * @author RWB
 * @since 2021.11.21 Sun 19:44:00
 */

import { atom } from 'recoil';

export const topAtom = atom({
	key: 'topState',
	default: window.scrollY === 0
});