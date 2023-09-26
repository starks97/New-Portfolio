import { IconType } from "react-icons";

export default function useAssignIcon(icons: IconType[], iconsNames: string[]) {
  return icons
    .filter((iconRef) => iconsNames.includes(iconRef.name!))
    .map((icon) => icon);
}
