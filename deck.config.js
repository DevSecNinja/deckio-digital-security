import CoverSlide from "./src/slides/CoverSlide.jsx";
import AgendaSlide from "./src/slides/AgendaSlide.jsx";
import LandscapeSlide from "./src/slides/LandscapeSlide.jsx";
import NonprofitRiskSlide from "./src/slides/NonprofitRiskSlide.jsx";
import WorkflowRisksSlide from "./src/slides/WorkflowRisksSlide.jsx";
import IdentitySlide from "./src/slides/IdentitySlide.jsx";
import DataGovernanceSlide from "./src/slides/DataGovernanceSlide.jsx";
import BaselineSlide from "./src/slides/BaselineSlide.jsx";
import CultureSlide from "./src/slides/CultureSlide.jsx";
import NextStepsSlide from "./src/slides/NextStepsSlide.jsx";
import SourcesSlide from "./src/slides/SourcesSlide.jsx";
import ThankYouSlide from "./src/slides/ThankYouSlide.jsx";

export default {
  id: "deckio-digital-security",
  title: "Digital Security for Nonprofit Leaders",
  subtitle:
    "Jean-Paul van Ravensberg, Security Advisor & Architect · Microsoft Elevate",
  description:
    "A strategic, non-technical session on digital security for nonprofit leaders and decision makers.",
  icon: "🔐",
  accent: "#6366f1",
  theme: "dark",
  appearance: "dark",
  order: 1,
  slides: [
    CoverSlide,
    AgendaSlide,
    LandscapeSlide,
    NonprofitRiskSlide,
    WorkflowRisksSlide,
    IdentitySlide,
    DataGovernanceSlide,
    BaselineSlide,
    CultureSlide,
    NextStepsSlide,
    SourcesSlide,
    ThankYouSlide,
  ],
};
