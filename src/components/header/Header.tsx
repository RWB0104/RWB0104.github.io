/**
 * 헤더 컴포넌트
 *
 * @author RWB
 * @since 2021.11.19 Fri 00:40:06
 */

import { mdiInformation, mdiMicrosoftVisualStudioCode, mdiNotebookEdit } from '@mdi/js';
import Icon from '@mdi/react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { topAtom } from '../../global/state';
import { MENU, TITLE } from '../../global/variables';
import './Header.scss';

/**
 * 헤더 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Header(): ReactElement
{
	const [ topState, setTopState ] = useRecoilState(topAtom);

	return (
		<header data-top={topState} onLoad={() => setTopState(window.scrollY === 0)}>
			<div className="info">
				<img alt="logo" src="/logo.png" />
				<h1>{TITLE}</h1>
			</div>

			<div className="menu">
				<Link to="/">
					<button className="icon-button">
						<Icon path={mdiInformation} />
						<p>{MENU[0].title}</p>
					</button>
				</Link>

				<Link to="/projects/">
					<button className="icon-button">
						<Icon path={mdiMicrosoftVisualStudioCode} />
						<p>{MENU[1].title}</p>
					</button>
				</Link>

				<Link to="/guestbook/">
					<button className="icon-button">
						<Icon path={mdiNotebookEdit} />
						<p>{MENU[2].title}</p>
					</button>
				</Link>
			</div>
		</header>
	);
}