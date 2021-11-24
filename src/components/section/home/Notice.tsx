/**
 * 주의사항 컴포넌트
 *
 * @author RWB
 * @since 2021.11.23 Tue 01:09:07
 */

import { mdiAlertBox, mdiCameraOff, mdiSocialDistance2Meters, mdiVolumeOff } from '@mdi/js';
import Icon from '@mdi/react';
import { ReactElement } from 'react';
import './Notice.scss';

/**
 * 주의사항 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Notice(): ReactElement
{
	return (
		<article data-article="notice">
			<div data-notice="wrapper">
				<div data-notice="title">
					<Icon path={mdiAlertBox} />

					<p>N O T I C E</p>

					<p>관람 시 반드시 아래 항목을 준수하여 주세요!</p>
				</div>

				<div data-notice="category">
					<div className="item">
						<div>
							<Icon path={mdiSocialDistance2Meters} />
							<p>사회적 거리두기 준수</p>
						</div>

						<div>
							<p>본 연구소는 COVID - 19 확산 방지를 위한 정부 지침을 준수하고 있습니다.</p>
							<p>관람객의 건강을 위해, 반드시 모니터와 50cm 이상의 거리를 유지하여 주십시오.</p>
							<p>모니터와의 밀접한 접촉은 관람객의 건강을 해칠 위험이 있습니다.</p>
						</div>
					</div>

					<div className="item">
						<div>
							<Icon path={mdiCameraOff} />
							<p>사진촬영 금지</p>
						</div>

						<div>
							<p>원활한 관람을 위하여, 가급적 사진촬영은 지양하고 있습니다.</p>
							<p>전시된 프로젝트가 매우 민감하여, 플래시에 노출 시 코드 손상 및 500에러를 야기할 수 있습니다.</p>
							<p>간직하고 싶은 프로젝트가 있다면, 가급적 Repository에서 직접 소스를 다운로드 받기를 권장합니다.</p>
							<p>단, 플래시가 발생하지 않는 화면 캡쳐는 사용 가능합니다.</p>
						</div>
					</div>

					<div className="item">
						<div>
							<Icon path={mdiVolumeOff} />
							<p>어?? 금지</p>
						</div>

						<div>
							<p>프로젝트의 안정성을 위해 "어?" 혹은 비슷한 어조의 단어를 사용하는 것을 금지합니다.</p>
							<p>"어?"를 듣는 프로젝트가 그렇지 않은 프로젝트보다 이상 증상 발현 확률이 약 97.48% 높다는 연구 결과 보고가 있습니다.</p>
							<p>절대로 프로젝트 앞에서 "어?"를 말하지 마십시오.</p>
							<p>이러한 행동이 접수될 경우 경고없이 IP밴 조치될 수 있습니다.</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}