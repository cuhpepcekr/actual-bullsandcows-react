

## 초기 환경 설정
### 설치 및 설정, 실행

1. Node.js 설치  
https://nodejs.org/ko/  
2. Yarn 설치  
npm install -g yarn  
3 .Visual Studio Code 설치  
https://code.visualstudio.com/  
4. Git clone  
경로 : C:\Users\Manager\project-react  
git clone https://github.com/cuhpepcekr/actual-bullsandcows-react.git  

### 확인된 오류 및 해결 방안
* yarn start 명령어로 실행 시 아래 오류 출력.  
```'react-scripts'은(는) 내부 또는 외부 명령, 실행 할 수 있는 프로그램, 또는 배치 파일이 아닙니다.  ```  
아래 명령어 실행.  
```npm update  ```  
yarn start 명령어로 정상 실행 가능.  
