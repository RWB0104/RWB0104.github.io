/**
 * 홈 페이지 컴포넌트
 *
 * @author RWB
 * @since 2021.11.19 Fri 01:00:00
 */

import { ReactElement } from 'react';
import Screener from '../components/common/Screener';

/**
 * 홈 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Home(): ReactElement
{
	return (
		<section data-section="home">
			<Screener />
		</section>
	);
}