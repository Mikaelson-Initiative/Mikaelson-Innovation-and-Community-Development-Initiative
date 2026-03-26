import FocusAreaTemplate from "@/features/website/components/focus-areas/focus-area-template";
import {
  createFocusAreaMetadata,
  focusAreaContent,
} from "@/features/website/components/focus-areas/focus-area-data";

export const metadata = createFocusAreaMetadata("self-development");

const SelfDevelopmentPage = () => {
  return <FocusAreaTemplate content={focusAreaContent["self-development"]} />;
};

export default SelfDevelopmentPage;