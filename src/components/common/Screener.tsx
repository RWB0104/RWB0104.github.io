/**
 * 스크리너 컴포넌트
 *
 * @author RWB
 * @since 2021.11.21 Sun 19:18:23
 */

import { ReactElement } from 'react';
import './Screener.scss';

export default function Screener(): ReactElement
{
	return (
		<div id="screener">
			<div className="screen">
				<video src="https://blog.itcode.dev/img/screener/celeb1.webm" autoPlay muted loop />
			</div>

			<div className="prompt">
				<h3>내용</h3>
				<p>dfas</p>
				<p>dfas</p>
				<p>dfas</p>
			</div>
		</div>
	);
}