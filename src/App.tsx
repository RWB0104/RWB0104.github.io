/**
 * 애플리케이션 컴포넌트
 *
 * @author RWB
 * @since 2021.11.19 Fri 00:52:29
 */

import React, { ReactElement } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

/**
 * 애플리케이션 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function App(): ReactElement
{
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
