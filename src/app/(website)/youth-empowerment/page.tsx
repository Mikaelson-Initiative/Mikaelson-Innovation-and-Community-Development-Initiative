import FocusAreaTemplate from "@/features/website/components/focus-areas/focus-area-template";
import {
  createFocusAreaMetadata,
  focusAreaContent,
} from "@/features/website/components/focus-areas/focus-area-data";

export const metadata = createFocusAreaMetadata("youth-empowerment");

const YouthEmpowermentPage = () => {
  return <FocusAreaTemplate content={focusAreaContent["youth-empowerment"]} />;
};

export default YouthEmpowermentPage;