/**
 * 홈 페이지 컴포넌트
 *
 * @author RWB
 * @since 2021.11.19 Fri 01:00:00
 */

import { ReactElement } from 'react';
import Introduce from '../components/section/home/Introduce';
import Welcome from '../components/section/home/Welcome';
import Notice from '../components/section/home/Notice';
import Screener from '../components/common/Screener';
import { MENU } from '../global/variables';

const { title, subtitle } = MENU[0];

/**
 * 홈 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Home(): ReactElement
{
	return (
		<section data-section={title.toLowerCase()}>
			<Screener menu={title} description={subtitle} />

			<Introduce />
			<Welcome />
			<Notice />
		</section>
	);
}