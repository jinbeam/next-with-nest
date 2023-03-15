<center><h2>NEXT WITH NEST</h2></center>

[1번 프로젝트](https://github.com/wlstn4115/next-with-nest/tree/main/1.nest) 에 이어 Prisma를 연결한 프로젝트입니다.

## Getting Started

### 1. git clone

```bash
git clone ttps://github.com/wlstn4115/next-with-nest.git
```

### 2. 라이브러리 설치

```bash
cd 2.prisma
npm install
```

### 3. 도커 컨테이너 실행

```bash
docker-compose up -d
```

### 4. prisma init

```bash
npx prisma init --datasource-provider mysql
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
