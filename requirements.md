# Project: Personal AI Knowledge Base (NotebookLM Clone)

## 1. 프로젝트 개요
사용자가 업로드한 파일(PDF, TXT 등)과 Microsoft Outlook 이메일 데이터를 연동하여, 자신만의 개인 지식 베이스를 구축하고 AI와 채팅하며 원하는 정보를 검색/요약/종합할 수 있는 웹 애플리케이션입니다.

## 2. 기술 스택 (Tech Stack)
* **Frontend:** Next.js (App Router), React, TypeScript
* **Styling & UI:** Tailwind CSS, Shadcn UI (깔끔하고 모던한 디자인 구현)
* **Backend / API:** Next.js API Routes
* **AI / RAG:** LangChain (또는 LlamaIndex), OpenAI API (문서 임베딩 및 텍스트 생성)
* **Database / Vector Store:** Supabase (PostgreSQL + pgvector)
* **3rd Party API:** Microsoft Graph API (Outlook 이메일 연동), NextAuth.js (Microsoft 로그인 지원)

## 3. 핵심 기능 요구사항 (Core Features)

### A. 인증 및 연동 (Authentication & Integration)
* Microsoft 계정 로그인을 통한 인증 (NextAuth 사용).
* 권한 동의를 통해 사용자의 Outlook 이메일 읽기 접근 권한 획득.

### B. 데이터 수집 (Data Ingestion)
* **파일 업로드:** 사용자가 로컬 기기에서 파일(PDF, DOCX, TXT)을 업로드할 수 있는 Drag & Drop UI 제공.
* **이메일 동기화:** "이메일 가져오기" 버튼 클릭 시, 최근 N일간의 Outlook 이메일 제목, 본문, 발신자 등을 가져와 텍스트로 변환.

### C. 데이터 처리 및 저장 (Processing & Storage)
* 수집한 파일과 이메일 텍스트를 적절한 크기(Chunk)로 분할.
* OpenAI Embedding 모델을 사용해 텍스트를 벡터(Vector)로 변환 후 Vector DB(Supabase)에 저장.

### D. AI 검색 및 채팅 (Chat & Retrieval-Augmented Generation)
* 사용자가 질문(Query)을 입력하면, Vector DB에서 관련성이 높은 문서/이메일 조각을 검색.
* 검색된 컨텍스트(Context)를 바탕으로 LLM(OpenAI)이 정확하고 자연스러운 답변 생성.
* 답변 하단에 어떤 파일이나 이메일을 참고했는지 출처(Source) 표시.

## 4. UI/UX 디자인 가이드라인 (Design Guidelines)
* **테마:** 밝고 심플한 미니멀 디자인 (White/Light Gray 톤 바탕).
* **레이아웃:**
  * 좌측 사이드바: 업로드된 문서 및 연동된 이메일 목록 관리 (소스 관리).
  * 우측 메인 영역: 넓고 쾌적한 AI 채팅 창 및 결과 출력 화면.
* **컴포넌트:** 부드러운 애니메이션, 둥근 모서리(Rounded corners), 옅은 그림자(Drop shadow) 효과를 사용하여 세련된 느낌 강조.
* **사용자 경험:** 파일 업로드 시 진행률(Progress bar) 표시, AI가 답변 생성하는 동안 스켈레톤(Skeleton) 로딩 UI 제공.
