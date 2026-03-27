import FocusAreaTemplate from "@/features/website/components/focus-areas/focus-area-template";
import {
  createFocusAreaMetadata,
  focusAreaContent,
} from "@/features/website/components/focus-areas/focus-area-data";

export const metadata = createFocusAreaMetadata(
  "technology-infrastructure-for-discipline"
);

const TechnologyInfrastructureDisciplinePage = () => {
  return (
    <FocusAreaTemplate
      content={focusAreaContent["technology-infrastructure-for-discipline"]}
    />
  );
};

export default TechnologyInfrastructureDisciplinePage;