import React, { useCallback, useState } from "react";
import { apiService } from "../../services";

import { DocumentDetails } from "../../types";
import DetailsPage from "./DetailsPage";
import UploadPage from "./UploadPage";

function Main() {
  const [validating, setValidating] = useState(false);
  const [validationDone, setValidationDone] = useState(false);
  const [valid, setValid] = useState(false);
  const [doc, setDoc] = useState<DocumentDetails>();
  const [hash, setHash] = useState("");
  const [filename, setFilename] = useState("");

  const handleUploadDone = useCallback(
    async (_hash: string, _filename?: string) => {
      setHash(_hash);
      setValidating(true);
      setFilename(_filename || "");
      try {
        const validatedDoc = await apiService.validate(_hash);
        setDoc(validatedDoc);
        setFilename(_filename || validatedDoc.title);
        setValid(true);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      } finally {
        setValidating(false);
        setValidationDone(true);
      }
    },
    []
  );

  return validationDone ? (
    <DetailsPage valid={valid} doc={doc as DocumentDetails} />
  ) : (
    <UploadPage onUploadDone={handleUploadDone} />
  );
}

export default Main;
