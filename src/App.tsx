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
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { topAtom } from './global/state';

/**
 * 애플리케이션 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function App(): ReactElement
{
	const [topState, setTopState] = useRecoilState(topAtom);

	useEffect(() =>
	{
		if (document)
		{
			document.addEventListener('scroll', () =>
			{
				const header = document.querySelector('header');

				if (header)
				{
					const isTop = header.getAttribute('data-top');

					if (window.scrollY === 0 && isTop === 'false')
					{
						console.dir(`1111111111111111111111111111111 : ${window.scrollY !== 0 && topState}`);
						setTopState(true);
					}

					else if (window.scrollY !== 0 && isTop === 'true')
					{
						console.dir(`22222222222222222222222222222 : ${window.scrollY > 0 && isTop}`);
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
				<Route path="/projects" element={<Projects />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}
