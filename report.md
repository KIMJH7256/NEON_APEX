NEON APEX — 개발 진행도 보고서

작성 기준일: 2026-09-12
현재 단계: Vite 최소 전환 → Vercel 최초 배포 준비

1. 프로젝트 개요

NEON APEX는 Vanilla JavaScript 기반의 레이싱 게임 프로토타입이다.

현재 구조는 별도의 프레임워크 없이 ES Module 방식으로 컴포넌트를 분리하여 화면을 구성하고 있다.

향후 목표는 다음과 같다.

기존 Vanilla JS
      ↓
Vite 최소 전환
      ↓
Vercel 배포
      ↓
Supabase 연결
      ↓
게임 데이터 영속화

2. 현재 프로젝트 구조

현재 확인된 구조:

neon-apex/
├── index.html
├── style.css
├── vite.config.js
│
└── js/
    ├── app.js
    │
    ├── components/
    │   ├── Background.js
    │   ├── TopBar.js
    │   ├── MainMenu.js
    │   ├── Garage.js
    │   ├── Gacha.js
    │   ├── Collection.js
    │   └── Race.js
    │
    ├── data/
    │   └── cars.js
    │
    └── utils/
        ├── navigation.js
        └── currency.js

3. 확인 완료 파일
index.html — 완료

현재 Vite에서도 사용할 수 있는 ES Module 구조이다.

<div id="app"></div>

<script type="module" src="./js/app.js"></script>


현재 단계에서는 수정하지 않는다.

js/app.js — 확인 완료

현재 컴포넌트를 생성하고 HTML을 조립한 후 초기화하는 구조이다.

app.js
 ├── Background
 ├── MainMenu
 ├── Garage
 ├── Gacha
 ├── Collection
 └── Race


Vite 전환에 큰 수정이 필요하지 않다.

js/data/cars.js — 확인 완료

현재 6개 차량의 정적 마스터 데이터를 보유한다.

APEX
ECLIPSE
HYPERION
VOLT
INFERNO
PHANTOM


차량의 이름, 희귀도, 타입, 스탯, 능력 등의 기본 정보가 들어 있다.

현재 단계에서는 Supabase로 이전하지 않는다.

Garage.js — 확인 완료

현재 APEX 차량 정보를 하드코딩하여 표시한다.

현재 기능:

차량 정보 표시
스탯 표시
능력 표시
SELECT CAR 버튼
선택 시 console 출력

현재는 실제 플레이어 데이터를 저장하지 않는다.

향후 Supabase에서 selected_car_id를 관리할 예정이다.

Gacha.js — 확인 완료

현재 테스트용 가챠 로직이 구현되어 있다.

현재 상태:

초기 Crystal = 320
1회 소환 = 100 Crystal


현재는 클라이언트에서 직접:

this.crystal -= 100;


처리한다.

가챠 결과 역시 현재:

LEGENDARY
ZERO-G


로 하드코딩되어 있다.

향후 Supabase 연동 시 다음 데이터가 서버 측으로 이전될 예정이다.

플레이어 Crystal
가챠 비용
가챠 결과
차량 획득 기록

실서비스에서는 클라이언트에서 직접 재화를 차감하거나 결과를 결정하지 않는 구조로 변경해야 한다.

Collection.js — 확인 완료

현재 cars.js의 모든 차량을 기반으로 컬렉션을 표시한다.

현재는 실제 보유 여부와 관계없이 차량 마스터 전체를 표시한다.

향후:

cars.js
   ↓
차량 마스터 정보

Supabase
   ↓
player_cars
   ↓
Collection


구조로 변경한다.

보유 차량은 활성 카드로 표시하고 미보유 차량은 LOCKED로 표시할 예정이다.

Race.js — 확인 완료

현재는 레이싱 화면의 UI 프로토타입이다.

현재 테스트 기능:

Speed = 187 KM/H

E 입력
  ↓
Nitro Burst
  ↓
Speed + 30


현재 실제 레이스 시뮬레이션이나 결과 저장은 구현되어 있지 않다.

향후 Supabase에서 레이스 결과 및 보상 데이터를 저장할 수 있다.

4. 현재 개발 단계
완료
 기존 프로젝트 구조 확인
 index.html 확인
 app.js 확인
 차량 데이터 확인
 Garage 확인
 Gacha 확인
 Collection 확인
 Race 확인
 Vite 최소 전환 방향 결정
 vite.config.js 생성
진행 중
 package.json 생성
 GitHub push
 Vercel 프로젝트 생성
 Vercel 최초 배포
 Build 오류 확인
 실제 배포 화면 확인
예정
 Supabase client 추가
 Vercel Environment Variables 설정
 Supabase DB 설계
 플레이어 데이터 연결
 Crystal 영속화
 Collection 보유 차량 연결
 Garage 선택 차량 연결
 Gacha 실제 데이터 연결
 Race 결과 저장
5. Vite 전환 전략

현재 프로젝트를 React 등의 다른 프레임워크로 재작성하지 않는다.

기존 구조를 최대한 유지한다.

목표 구조:

neon-apex/
├── index.html
├── style.css
├── package.json
├── vite.config.js
├── .gitignore
├── .env.example
│
└── js/
    ├── app.js
    ├── components/
    ├── data/
    ├── utils/
    └── lib/
        └── supabase.js


js/를 당장 src/로 이동하지 않는 것이 현재 전략이다.

6. Vite 설정 예정

package.json에는 최소한 다음 빌드 명령이 필요하다.

{
  "scripts": {
    "build": "vite"
  }
}


Vercel에서는:

Framework Preset: Vite
Build Command: npm run build
Output Directory: dist


를 기준으로 배포한다.

7. 개발환경 제약

현재 로컬 개발환경에서는 Vite 설치 및 실행이 어려운 상태이다.

따라서 현재 전략은:

로컬 npm install / npm run dev
          ↓
       생략 가능
          ↓
GitHub
          ↓
Vercel Build
          ↓
배포 테스트


방식으로 진행한다.

Vercel Build Log를 이용해 빌드 오류를 확인한다.

8. Supabase 연결 예정 구조

Supabase client는 향후 다음 위치에 추가한다.

js/
└── lib/
    └── supabase.js


환경변수:

VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=


실제 값은 GitHub에 저장하지 않고 Vercel Environment Variables에 등록한다.

service_role key는 브라우저 코드에 노출하지 않는다.

9. 향후 Supabase 데이터 구조

초기 예상 구조:

players
├── id
├── crystal
└── selected_car_id

player_cars
├── player_id
├── car_id
└── acquired_at

race_results
├── player_id
├── position
├── reward
└── created_at


실제 테이블 구조는 나머지 navigation.js, currency.js와 현재 게임 상태 처리 방식을 확인한 뒤 확정한다.

10. 권장 개발 순서
Phase 1 — 배포 기반
package.json
     ↓
Vite Build
     ↓
GitHub
     ↓
Vercel
     ↓
게임 화면 출력 확인

Phase 2 — Supabase 연결
Supabase Project
     ↓
supabase.js
     ↓
Vercel Environment Variables
     ↓
연결 테스트

Phase 3 — 플레이어 데이터
Player
 ├── Crystal
 ├── Selected Car
 └── Owned Cars

Phase 4 — 게임 기능 연동
Gacha
  ↓
Crystal 차감
  ↓
Vehicle 획득
  ↓
Collection 반영
  ↓
Garage 선택

Phase 5 — 레이스
Race
  ↓
결과
  ↓
보상
  ↓
Supabase 저장

11. 현재 다음 액션

현재 가장 먼저 해야 할 작업은 Vercel 최초 배포이다.

필요하면 루트에 다음 파일을 추가한다.

package.json


그 후:

GitHub push
   ↓
Vercel Import
   ↓
Deploy


한다.

성공 시

배포 URL을 확인하고 다음 단계로 Supabase 연결을 진행한다.

실패 시

Vercel의 Build Logs 마지막 오류 부분을 확보하여 수정한다.

현재 진행도
프로젝트 구조 파악       ████████████████████ 100%
Vite 전환 설계            ████████████████████ 100%
vite.config.js            ████████████████████ 100%

package.json              ░░░░░░░░░░░░░░░░░░░░   0%
Vercel 배포               ░░░░░░░░░░░░░░░░░░░░   0%
Supabase 연결             ░░░░░░░░░░░░░░░░░░░░   0%
DB 설계                   ░░░░░░░░░░░░░░░░░░░░   0%
게임 데이터 영속화        ░░░░░░░░░░░░░░░░░░░░   0%


현재 핵심 단계: Vercel 최초 배포 테스트
