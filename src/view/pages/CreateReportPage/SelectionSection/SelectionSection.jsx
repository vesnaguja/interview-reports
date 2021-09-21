import React from "react";
const SelectionSection = ({ wizardStep, newReport }) => {
  const buttonVariantWizardStep = (stepName) =>
    wizardStep === stepName ? "text-primary fw-bold" : "";
  return (
    <div>
      <div className="d-grid gap-2 pb-3 border-bottom">
        <p className={buttonVariantWizardStep(1)}>Select Candidate</p>
        <p className={buttonVariantWizardStep(2)}>Select Company</p>
        <p className={buttonVariantWizardStep(3)}>Fill Report Details</p>
      </div>
      {wizardStep > 1 && (
        <div className="pt-3">
          <small className="text-muted">Candidate:</small>
          <p>{newReport.candidateName}</p>
        </div>
      )}
      {wizardStep > 2 && (
        <div className="pt-1">
          <small className="text-muted">Company:</small>
          <p>{newReport.companyName}</p>
        </div>
      )}
    </div>
  );
};
export default SelectionSection;
