import FocusAreaTemplate from "@/features/website/components/focus-areas/focus-area-template";
import {
  createFocusAreaMetadata,
  focusAreaContent,
} from "@/features/website/components/focus-areas/focus-area-data";

export const metadata = createFocusAreaMetadata("community");

const CommunityPage = () => {
  return <FocusAreaTemplate content={focusAreaContent.community} />;
};

export default CommunityPage;