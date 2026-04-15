import { listActiveMediaTypes } from "@/domains/media-type";
import { toMediaTypeLink } from "../../mappers";
import Link from "next/link";
import { Navbar } from "@/shared/components/ui";

export default async function MediaTypeNav() {
  const mediaTypes = await listActiveMediaTypes();
  const mediaLinks = mediaTypes.map(toMediaTypeLink);

  return <Navbar links={mediaLinks} />;
}
