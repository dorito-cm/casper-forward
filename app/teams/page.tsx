import type { Metadata } from "next";
import { TeamsPage } from "@/components/TeamsPage";
export const metadata: Metadata = { title: "Teams" };
export default function Page() { return <TeamsPage styleKey="a" />; }
