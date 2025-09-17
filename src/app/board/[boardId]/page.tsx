import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { CanvasLoading } from "./_components/canvas-loading";

interface BoardPageProps {
  params: Promise<{
    boardId: string;
  }>;
}

export default async function BoardPage({ params }: BoardPageProps) {
  const { boardId } = await params;

  return (
    <Room roomId={boardId} fallback={<CanvasLoading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
}
