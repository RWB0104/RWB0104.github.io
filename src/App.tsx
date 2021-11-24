/**
 * 애플리케이션 컴포넌트
 *
 * @author RWB
 * @since 2021.11.19 Fri 00:52:29
 */

import React, { ReactElement, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import GuestBook from './pages/GuestBook';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useSetRecoilState } from 'recoil';
import { topAtom } from './global/state';

/**
 * 애플리케이션 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function App(): ReactElement
{
	const setTopState = useSetRecoilState(topAtom);

	useEffect(() =>
	{
		// 문서가 유효할 경우
		if (document)
		{
			document.addEventListener('scroll', () =>
			{
				const header = document.querySelector('header');

				// 헤더가 유효할 경우
				if (header)
				{
					const isTop = header.getAttribute('data-top') === 'true';

					// 스크롤이 맨 위고, isTop이 false일 경우
					if (window.scrollY === 0 && !isTop)
					{
						setTopState(true);
					}

					// 스크롤이 맨 위고, isTop이 true일 경우
					else if (window.scrollY !== 0 && isTop)
					{
						setTopState(false);
					}
				}

			});
		}
	});

	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects/" element={<Projects />} />
				<Route path="/guestbook/" element={<GuestBook />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}
