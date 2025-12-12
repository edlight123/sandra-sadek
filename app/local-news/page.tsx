import { redirect } from "next/navigation";

export default function LocalNewsPage() {
  redirect("/work?region=US_LOCAL");
}
