import { notFound } from "next/navigation";
import { StoryReader } from "@/components/stories/reader";
import { getStory } from "@/content/stories";

export default async function StoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ read?: string }>;
}) {
  const { id } = await params;
  const sp = searchParams ? await searchParams : {};
  if (!getStory(id)) notFound();
  const initialMode = sp.read === "1" ? "reading" : "overview";
  return <StoryReader storyId={id} initialMode={initialMode} />;
}
