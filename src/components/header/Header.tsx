/**
 * 헤더 컴포넌트
 *
 * @author RWB
 * @since 2021.11.19 Fri 00:40:06
 */

import { mdiInformation, mdiMicrosoftVisualStudioCode } from '@mdi/js';
import Icon from '@mdi/react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

/**
 * 헤더 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Header(): ReactElement
{
	return (
		<header>
			<div className="info">
				<img alt="logo" src="/logo.png" />
				<h1>𝝅번째 알파카의 와장창창 개발 연구소</h1>
			</div>

			<div className="menu">
				<Link to="/">
					<button className="icon-button">
						<Icon path={mdiInformation} /> <p>About</p>
					</button>
				</Link>

				<Link to="/projects/">
					<button className="icon-button">
						<Icon path={mdiMicrosoftVisualStudioCode} /> <p>Projects</p>
					</button>
				</Link>
			</div>
		</header>
	);
}