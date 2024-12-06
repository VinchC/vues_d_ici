import { JournalProps } from "@/app/types";
import React from "react";

export default function Download2(journal: JournalProps) {

  console.log(journal.id);

  const onButtonClick = () => {
    const pdfUrl = `/vues-dici-${journal.id}.pdf`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `/vues-dici-${journal.id}.pdf`;
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
