/**
 * 환영 인사 컴포넌트
 *
 * @author RWB
 * @since 2021.11.22 Mon 19:47:35
 */

import { ReactElement } from 'react';
import { TITLE } from '../../../global/variables';
import './Welcome.scss';

/**
 * 환영 인사 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Welcome(): ReactElement
{
	return (
		<article data-article="welcome">
			<div data-welcome="wrapper">
				<div data-welcome="title">
					<h3><span>{TITLE}</span>를 방문하신 여러분들을 진심으로 환영합니다!</h3>
				</div>

				<div>
					<p>반갑습니다.</p>
					<p>저는 이 연구소의 총 책임을 맡고있는 제 𝝅대 연구소장 RWB입니다.</p>
				</div>

				<div>
					<p>이 곳에서 저희 연구소가 직접 개발한 다양한 프로젝트를 관람하고, 체험하실 수 있습니다.</p>
					<p>다양한 프로젝트를 확인하고, 직접 다뤄보세요. 앞으로도 다양한 프로젝트들이 지속적으로 추가될 예정입니다.</p>
				</div>

				<div>
					<p>저희 프로젝트 중 일부는 GitHub Repository를 제공합니다. 관람 도중 마음에 드시는 프로젝트가 있으실 경우, 제공되는 Repository를 참조하시기 바랍니다.</p>
					<p>이러한 프로젝트의 경우, 관람객 여러분들이 직접 해당 프로젝트를 여러분 입맛에 맞게 수정하거나, 개인적으로 사용하실 수 있습니다.</p>
					<p>해당 Repository에서 제공하는 소스와 프로그램 완성본은 모두 비용을 받고있지 않으니, 관람에 참고해주시기 바랍니다.</p>
				</div>

				<div>
					<p>문의 사항이 있다면 주저하지 마시고 저희를 찾아주십시오. 가능한 한 최선의 답변을 드리고자 노력하겠습니다.</p>
					<p>연락처는 맨 아래 항목을 참조해주세요.</p>
				</div>

				<div>
					<p>다시 한 번, 여러분의 방문을 환영합니다. 머무르시는 동안 즐거운 시간 되시길 바랍니다.</p>
				</div>

				<div data-welcome="meta">
					<img src="/images/signature.png" />

					<p>제 𝝅대 연구소장</p>
					<h3><span>R W B</span> 드림</h3>
				</div>
			</div>
		</article>
	);
}