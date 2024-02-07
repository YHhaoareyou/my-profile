'use client';

import clsx from 'clsx';
import React from 'react';

type Color = (typeof colorList)[number];

export default function PublicationsPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [color, setColor] = React.useState<Color>('sky');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <main>
      <section
        className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-white', color)}
      >
        <ul>
          <div>
            <h4>国際会議のConference Paper （査読あり）</h4>
            <ul>
              <li>
                Yong-Hao Hu, Yuji Hatada, and Takuji Narumi. Beyond Mirrors:
                Exploring Behavioral Changes through Comparative Avatar Design
                in VR Taiko Drumming. In Proceedings of the 29th ACM Symposium
                on Virtual Reality Software and Technology (VRST '23).
                Association for Computing Machinery, New York, NY, USA, Article
                31, pp. 1–11, October 2023.{' '}
              </li>
            </ul>
          </div>

          <div>
            <h4>国際会議における研究発表（口頭発表、査読あり）</h4>
            <ul>
              <li>
                Yong-Hao Hu, Yuji Hatada, and Takuji Narumi. Beyond Mirrors:
                Exploring Behavioral Changes through Comparative Avatar Design
                in VR Taiko Drumming, ACM Symposium on Virtual Reality Software
                and Technology (VRST) 2023. Christchurch, New Zealand, October
                2023.{' '}
              </li>
              <li>
                Yong-Hao Hu, Kenichiro Ito and Ayumi Igarashi. Improving
                Real-time Communication for Educational Metaverse by Alternative
                WebRTC SFU and Delegating Transmission of Avatar Transform, 2023
                IEEE International Conference on Consumer Electronics - Taiwan
                (ICCE-TW), PingTung, Taiwan, July 2023.
              </li>
              <li>
                Yong-Hao Hu, Kenichiro Ito and Ayumi Igarashi. Improving
                Real-time Communication for Educational Metaverse by Alternative
                WebRTC SFU and Delegating Transmission of Avatar Transform, 2023
                IEEE International Conference on Consumer Electronics - Taiwan
                (ICCE-TW), PingTung, Taiwan, July 2023. Yong-Hao Hu, Kenichiro
                Ito and Ayumi Igarashi. Synchronizing Full-Body Avatar
                Transforms with WebRTC DataChannel on Educational Metaverse,
                2024 IEEE International Conference on Consumer Electronics
                (ICCE), Las Vegas, NV, USA, January 2024. (Best Session
                Presentation)
              </li>
            </ul>
          </div>

          <div>
            <h4>国内学会における研究発表（口頭発表、査読なし）</h4>
            <ul>
              <li>
                Yong-Hao Hu, 畑田裕二, 鳴海拓志:
                ユーザの主体的行為と連動したアバタの外見変化がプロテウス効果にもたらす影響.
                第27回日本バーチャルリアリティ学会大会, 1C5-5, 札幌, 2022 年 9
                月.
              </li>
              <li>
                Yong-Hao HU, 畑田 裕二, 鳴海
                拓志．自己と他者アバタの外見的差異がプロテウス効果に与える影響．第28回日本バーチャルリアリティ学会大会,
                1B1-11, 東京, 2023年 9 月.
              </li>
              <li>
                福田 晴紀, Yong-Hao Hu, 于 松平, 野口 新之助, 畑田裕二,
                鳴海拓志:
                協力型マルチプレイゲームにおける自己と他者アバタの特性の相補性がプロテウス効果に与える影響．第28回日本バーチャルリアリティ学会大会,
                3C2-07, 東京, 2023年 9 月.
              </li>
            </ul>
          </div>

          <div>
            <h4>受賞歴</h4>
            <ul>
              <li>
                Best Session Presentation Award, The 2024 International
                Conference on Consumer Electronics (ICCE), Las Vegas, NV, USA,
                January 2024.
              </li>
            </ul>
          </div>
        </ul>
      </section>
    </main>
  );
}
