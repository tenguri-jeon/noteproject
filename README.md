# NOTEPROJECT

react redux node.js를 사용하여 noteproject를 제작하였습니다

## 개발 기간

- 2024-09-02 ~ -2024-09-13 (이후 server를 추가로 작업하였습니다.)

## 개발 환경
- node v20.11.1
- react-redux v 18.3.1
- sass v1.80.4
- vite v5.4.9
- framer-motion v12.0.0-alpha.0
- axios v1.7.7
 
## github주소
- server : https://github.com/tenguri-jeon/TestServer

## 어려웠던 점

1. **database 배포**
   - MySQL로 데이터를 관리하기 위한 준비를 마친 후, Node.js와 연결하는 과정까지 마쳤으나, db 배포하는데 어려움을 겪어, 공부를 통해 해결하기로 결정했습니다. 아쉬운 대로 Node.js로 서버를 구축하고 배포하여 포트폴리오를 완성했습니다.
  
 2. **cors에러**
    - has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
      
    이런 오류가 떠서 처음에는 cors 오류인줄 알고 많이 헤맸으나, useEffect에 작성한 data가 변하면 재랜더링하게 작성한 코드가 원인으로 밝혀졌습니다. 값들이 바뀔 때마다 fetchNotes 액션을 재실행하게 되고, 의존성 배열로 인해 CORS 오류가 발생하고,  요청이 반복적으로 일어나거나 서버에서 일정 시간 동안 처리할 수 없을 때 발생하는 것으로 알게되었습니다.


##  기능 소개
<details><summary>Main
</summary>
- mainpage

![image](https://github.com/user-attachments/assets/51e2547c-2359-4f43-8b37-068d6caf9dc8)
- 왼쪽 위쪽 버튼 클릭 시 toggle 되어 모드 변경

![image](https://github.com/user-attachments/assets/03c6854b-f554-4757-a33c-293b65b47b4d)
- serach창 및 정렬창 설정 (data 유효성 검사 기능 설정)

</details>

<details><summary>새노트 입력
</summary>
 
![image](https://github.com/user-attachments/assets/5a21e7d6-b0d0-4a34-9c3f-a6356dae2521)
- 새 노트 입력 , 제목과 내용 둘 중 하나라도 빌 경우 alert() 

</details>

<details><summary>노트 수정 및 삭제
</summary>

 ![image](https://github.com/user-attachments/assets/93e2ddc6-e6e7-43a1-a993-a3d71b1e0cb6)
 
 - main 에 있는 노트 클릭 시, 저장되어 있는 노트내용 출력, 내용 수정 및 삭제 가능
</details>

