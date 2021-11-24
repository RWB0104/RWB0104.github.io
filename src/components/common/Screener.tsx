/**
 * 스크리너 컴포넌트
 *
 * @author RWB
 * @since 2021.11.21 Sun 19:18:23
 */

import { ReactElement } from 'react';
import { DESCRIPTION } from '../../global/variables';
import './Screener.scss';

interface Props {
	menu?: string,
	description?: string
}

/**
 * 스크리너 컴포넌트 ReactElement 반환 메서드
 *
 * @param {Props} props: 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Screener({ menu, description }: Props): ReactElement
{
	return (
		<div id="screener">
			<div className="screen">
				<video src="https://blog.itcode.dev/img/screener/celeb1.web" autoPlay muted loop />
			</div>

			<div className="prompt">
				<div>
					<h3>{DESCRIPTION}</h3>

					{menu && <p><span>{menu}</span></p>}
					{description && <p>{description}</p>}
				</div>
			</div>
		</div>
	);
}