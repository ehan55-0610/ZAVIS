import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex h-screen bg-zinc-50 text-zinc-900">
      {/* 좌측 사이드바: 소스 (문서 / 이메일) 목록 */}
      <aside className="flex w-80 flex-col border-r border-zinc-200 bg-white">
        <div className="flex items-center justify-between px-5 py-4">
          <h1 className="text-lg font-semibold tracking-tight">ZAVIS</h1>
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500">
            Knowledge Base
          </span>
        </div>
        <Separator />

        <div className="px-5 py-4">
          <Button className="w-full rounded-xl shadow-sm">+ 소스 추가</Button>
          <Button variant="outline" className="mt-2 w-full rounded-xl">
            이메일 가져오기
          </Button>
        </div>
        <Separator />

        <div className="px-5 py-3 text-xs font-medium uppercase tracking-wide text-zinc-400">
          소스 목록
        </div>
        <ScrollArea className="flex-1 px-3">
          <p className="px-2 py-6 text-center text-sm text-zinc-400">
            아직 추가된 소스가 없습니다.
            <br />
            문서를 업로드하거나 이메일을 가져오세요.
          </p>
        </ScrollArea>
      </aside>

      {/* 우측 메인: AI 채팅 영역 */}
      <main className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-8 py-4">
          <div>
            <h2 className="text-base font-semibold">AI 채팅</h2>
            <p className="text-sm text-zinc-500">
              문서와 이메일을 기반으로 질문해 보세요.
            </p>
          </div>
        </header>

        <ScrollArea className="flex-1 px-8 py-6">
          <div className="mx-auto flex max-w-2xl flex-col items-center justify-center py-24 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-xl text-white shadow">
              Z
            </div>
            <h3 className="text-xl font-semibold">무엇이든 물어보세요</h3>
            <p className="mt-2 max-w-sm text-sm text-zinc-500">
              업로드한 문서와 연동된 이메일에서 관련 내용을 찾아 요약하고 출처와
              함께 답변해 드립니다.
            </p>
          </div>
        </ScrollArea>

        {/* 입력창 */}
        <div className="border-t border-zinc-200 bg-white px-8 py-4">
          <Card className="mx-auto flex max-w-2xl flex-row items-center gap-2 rounded-2xl p-2 shadow-sm">
            <Input
              placeholder="질문을 입력하세요..."
              className="border-0 shadow-none focus-visible:ring-0"
            />
            <Button className="rounded-xl">보내기</Button>
          </Card>
        </div>
      </main>
    </div>
  );
}
