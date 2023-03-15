<center><h2>NEXT WITH NEST</h2></center>

[1번 프로젝트](https://github.com/wlstn4115/next-with-nest/tree/main/1.nest) 에 이어 Prisma를 연결한 프로젝트입니다.

## Getting Started

### 1. 라이브러리 설치

```bash
npm install
```

### 2. 도커 컨테이너 실행

```bash
docker-compose up -d
```

### 3. .env.example 파일 .env 파일로 이름 변경

```javascript
DATABASE_URL = "mysql://root:rootpw@localhost:3306/my_db";
```

### 4. prisma migrate

```bash
npx prisma migrate dev --name init
```

### 5. Run application

```bash
npm run dev
```

## 기술스택

### Framework

- [NextJS](https://nextjs.org/) - React 기반의 SSR 프레임워크
- [NestJS](https://nestjs.com/) - nodejs 프레임워크

### ORM

- [Prisma](https://www.prisma.io/) - 새로운 타입의 ORM

### Code Quality

- [typescript](https://www.typescriptlang.org/) - javascript의 확장팩
- [eslint](https://eslint.org/) - 자바스크립트 문법에서 에러를 표시해주는 도구
