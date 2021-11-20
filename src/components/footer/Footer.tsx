/**
 * 푸터 컴포넌트
 *
 * @author RWB
 * @since 2021.11.19 Fri 00:56:30
 */

import { ReactElement } from 'react';
import { Icon } from '@mdi/react';
import { mdiGithub, mdiGmail, mdiReact } from '@mdi/js';
import './Footer.scss';

/**
 * 푸터 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Footer(): ReactElement
{
	return (
		<footer>
			<div data-footer="active">
				<button title="github" data-active="github" onClick={() => open('https://github.com/RWB0104')}>
					<Icon path={mdiGithub} />
				</button>

				<button title="mail" data-active="mail" onClick={() => open('mailto:psj2716@gmail.com')}>
					<Icon path={mdiGmail} />
				</button>

				<button title="blog" data-active="blog" onClick={() => open('https://blog.itcode.dev')}>
					<Icon path={mdiReact} />
				</button>
			</div>

			<div data-footer="info">
				<p>💻 Developed by RWB 2021. 11.</p>
			</div>
		</footer>
	);
}