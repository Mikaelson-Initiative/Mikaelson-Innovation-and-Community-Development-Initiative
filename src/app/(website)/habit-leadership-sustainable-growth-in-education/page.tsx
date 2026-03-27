import FocusAreaTemplate from "@/features/website/components/focus-areas/focus-area-template";
import {
  createFocusAreaMetadata,
  focusAreaContent,
} from "@/features/website/components/focus-areas/focus-area-data";

export const metadata = createFocusAreaMetadata(
  "habit-leadership-sustainable-growth-in-education"
);

const HabitLeadershipSustainableGrowthEducationPage = () => {
  return (
    <FocusAreaTemplate
      content={focusAreaContent["habit-leadership-sustainable-growth-in-education"]}
    />
  );
};

export default HabitLeadershipSustainableGrowthEducationPage;