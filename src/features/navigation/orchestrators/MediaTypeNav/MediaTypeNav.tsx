import { mediaTypeToNavLink } from "../../mappers";
import { getMediaTypesAction } from "@/actions/media-type";
import { NavLink } from "@/shared/components/ui";

export default async function MediaTypeNav() {
  const mediaTypes = await getMediaTypesAction();
  const mediaLinks = mediaTypes.map(mediaTypeToNavLink);

  return (
    <nav>
      {mediaLinks.map((link) => (
        <NavLink key={link.id} {...link} />
      ))}
    </nav>
  );
}
