/**
 * 방명록 페이지 컴포넌트
 *
 * @author RWB
 * @since 2021.11.19 Fri 01:03:36
 */

import { ReactElement } from 'react';
import Screener from '../components/common/Screener';
import { MENU } from '../global/variables';

const { title, subtitle } = MENU[2];

/**
 * 방명록 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function GuestBook(): ReactElement
{
	return (
		<section data-section={title.toLowerCase()}>
			<Screener menu={title} description={subtitle} />
		</section>
	);
}