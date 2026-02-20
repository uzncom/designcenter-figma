## `tokens/source` 폴더에 디자인 토큰을 Json형태로 Push 해주시면 됩니다.

## 역할
디자인팀 : 
- Figma로 디자인 토큰 작업
- 작업된 디자인 토큰을 토큰 스튜디오로 `tokens/source` 폴더에 Push

퍼블리셔 : 
- designcenter-figma git 프로젝트 로컬에 설치
- 터미널로 npm start 실행 (tokens/source 폴더 감시)
- 토큰 업데이트
- tokens/source 폴더 내 파일 변경 시 자동으로 빌드
- build 폴더에 플랫폼 별 디자인 토큰 파일 활용