import React from "react";
import { useParams } from "react-router-dom";
import CaseStudyType1 from "./CaseStudyType1";
import CaseStudyType2 from "./CaseStudyType2";
import CaseStudyType3 from "./CaseStudyType3";

const CaseStudyRouter = () => {
  const { issueType } = useParams();
  
  const renderCaseStudy = () => {
    switch (issueType) {
      case "reliability-matrix":
        return <CaseStudyType1 />;
      case "launch-rescue":
        return <CaseStudyType2 />;
      case "crisis-tamed":
        return <CaseStudyType3 />;
      default:
        //Default to the first case study if no match
        return <CaseStudyType1 />;
    }
  };
  
  return renderCaseStudy();
};

export default CaseStudyRouter;