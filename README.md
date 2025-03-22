# 새로운 중고 물물거래 플랫폼 'Switch'

# —— TEAM

🧩 **FE** 안동규, 
최준영(~23.08), 노은지(~24.02)

🦜 **BE** 김선우

# —— PERIOD

🗓️ **2022.09. ~ NOW**

# —— How to Run

## IOS 셋팅

![image](https://github.com/user-attachments/assets/f9f4e89d-e920-45d8-b0f2-dfd637b3c805)

1. Xcode 실행 후 왼쪽 상단 Xcode 클릭
2. Open Developer Tool 클릭
3. Simulator 클릭

## Android 셋팅

![image](https://github.com/user-attachments/assets/b35a96e2-c2f2-4c65-af42-f9af56ac7063)

1. Android Studio 실행
2. More Actions 클릭
3. Virtual Device Manager 클릭

## Mobile Device 셋팅

1. 앱스토어나 구글 플레이스토어에서 Expo 설치

## 어플리케이션 실행

셋팅이 끝나면 아래 명령어를 실행하면 됩니다.

```zsh
// 패키지 설치
yarn install
```

```zsh
// 어플리케이션 실행
yarn start
```

실행 후 터미널에 올라온 인터페이스 참고해서 실행하시면 됩니다.

# —— ARCHITECTURE

![추가 요망]()

# —— FEATURES

### **1. 메인 페이지**

그리드 형태, 리스트 형태로 게시물을 확인할 수 있습니다.

<img src="https://github.com/user-attachments/assets/f7e1e0b5-97c6-40d2-a382-a534331345ab" alt="grid" width="150" height="300">
<img src="https://github.com/user-attachments/assets/1ceb9b19-f6e7-4d78-becb-c68aad109499" alt="list" width="150" height="300">

게시물을 특정 기준에 따라 정렬할 수 있습니다.

<img src="https://github.com/user-attachments/assets/450ef761-e63a-4a69-bc32-096b9fcebfed" alt="sort" width="150" height="300">

### **2. 중고 물품 등록**

사진, 카테고리, 위치에 따라 물품을 등록할 수 있습니다.

<img src="https://github.com/user-attachments/assets/6b9ce327-812d-4d09-a117-e6416453b7e1" alt="register" width="150" height="300">

거래 가능한 주소를 세 군데 추가할 수 있습니다.

<img src="https://github.com/user-attachments/assets/c458f841-f03e-443b-b012-902755ee2757" alt="place" width="150" height="300">

### **3. 채팅**

스위치를 위해 채팅을 할 수 있습니다.

<img src="https://github.com/user-attachments/assets/c352dc83-67c0-4742-abc0-846e85310a37" alt="chat" width="150" height="300">

스위치 후에는 상대방과 교환 물품에 대한 별점을 매길 수 있습니다.

<img src="https://github.com/user-attachments/assets/8f614430-55c2-40e3-bdfc-c9ba68108b09" alt="point" width="150" height="300">

### **4. 앱 잠금**

스위치 앱에 비밀번호를 설정해서 보안을 강화할 수 있습니다.

<img src="https://github.com/user-attachments/assets/9e8611ba-eb11-4e23-804b-4172ff0bc4b8" alt="security" width="150" height="300">
<img src="https://github.com/user-attachments/assets/16970995-3e16-4328-a127-813d164d7dc1" alt="password" width="150" height="300">

비밀번호를 설정하면 생체 정보(지문, 안면인식 등)로 앱을 잠글 수 있습니다.

<img src="https://github.com/user-attachments/assets/5c16bc3a-63b4-4571-a93f-704f64a26e3f" alt="bio" width="150" height="300">

# —— DEVELOPMENT

### Atomic Design

컴포넌트 재사용과 개발 편의를 위해 atomic design을 도입했습니다.
