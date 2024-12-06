import React from "react";

export default function Membership() {
  const onButtonClick = () => {
    const pdfUrl = "bulletin.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "/bulletin.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <button
        onClick={onButtonClick}
        className="categoryLink"
      >
        Télécharger le bulletin d&apos;adhésion
      </button>
    </>
  );
}
