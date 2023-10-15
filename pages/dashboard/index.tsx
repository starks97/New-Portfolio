import { getAccessToken, getDataUser } from "@/store";
import { DashLayout } from "../../src/components/dashboard";

export default function DashBoard() {
  const getAccess = getAccessToken();

  return <DashLayout />;
}
