/**
 * 소개 컴포넌트
 *
 * @author RWB
 * @since 2021.11.22 Mon 19:47:35
 */

import { ReactElement } from 'react';
import './Introduce.scss';

/**
 * 소개 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Introduce(): ReactElement
{
	const date = new Date();

	return (
		<article data-article="introduce">
			<div data-introduce="wrapper">
				<div data-introduce="picture">
					<img alt="profile" title="profile" src="/images/introduce.jpg" />

					<h3>제 𝝅대 연구소장</h3>
					<h2>R W B</h2>
					<p>2019. 03. ~ {date.getFullYear()}. {date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}</p>
				</div>

				<hr />

				<div data-introduce="letters">
					<p><i>If you write English in white letters on a black background, most people think it's really <span>DOPE</span>.</i></p>

					<p><i><small>Just like you before <span>translating this</span>. (It's even hard to copy this!)</small></i></p>

					<p><i>- Hermes .W Burberry -</i></p>
				</div>
			</div>
		</article>
	);
}