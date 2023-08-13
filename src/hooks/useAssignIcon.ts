import { IconType } from "react-icons";

import * as SiIcons from "react-icons/si";

export default function useAssignIcon(icons: IconType[], iconsNames: string[]) {
  return icons
    .filter((iconRef) => iconsNames.includes(iconRef.name!))
    .map((icon) => icon);
}
