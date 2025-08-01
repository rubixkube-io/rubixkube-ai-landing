import React from "react";
import { useParams } from "react-router-dom";
import CaseStudyType1 from "./CaseStudyType1";
import CaseStudyType2 from "./CaseStudyType2";
import CaseStudyType3 from "./CaseStudyType3";

const CaseStudyRouter = () => {
  const { issueType } = useParams();

  const renderCaseStudy = () => {
    switch (issueType) {
      case "issue-type-1":
        return <CaseStudyType1 />;
      case "issue-type-2":
        return <CaseStudyType2 />;
      case "issue-type-3":
        return <CaseStudyType3 />;
      default:
        return <CaseStudyType1 />;
    }
  };

  return renderCaseStudy();
};

export default CaseStudyRouter;
