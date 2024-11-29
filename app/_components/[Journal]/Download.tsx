import React from "react";

export default function Download() {
  const onButtonClick = () => {
    // const pdfUrl = `vues-dici-${id.id}.pdf`;
    const pdfUrl = "bulletin.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "/bulletin.pdf";
    // link.download = `/vues-dici-${id.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <button onClick={onButtonClick} className="categoryLink">
        Télécharger le PDF
      </button>
    </>
  );
}