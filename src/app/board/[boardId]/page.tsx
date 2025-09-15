import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { CanvasLoading } from "./_components/canvas-loading";

interface BoardPageProps {
  params: {
    boardId: string;
  };
}

export default function BoardPage({ params }: BoardPageProps) {
  return (
    <Room roomId={params.boardId} fallback={<CanvasLoading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
}
