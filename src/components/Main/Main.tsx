import React, { useCallback, useEffect, useState } from "react";
import { useQueryParam, StringParam } from "use-query-params";

import { apiService } from "../../services";
import { DocumentDetails } from "../../types";
import DetailsPage from "./DetailsPage";
import UploadPage from "./UploadPage";

function Main() {
  const [validating, setValidating] = useState(false);
  const [validationDone, setValidationDone] = useState(false);
  const [valid, setValid] = useState(false);
  const [doc, setDoc] = useState<DocumentDetails>();
  // const [hash, setHash] = useState("");
  const [filename, setFilename] = useState("");
  const [queryHash, setQueryHash] = useQueryParam("hash", StringParam);

  const handleUploadDone = useCallback(
    async (_hash: string, _filename?: string) => {
      // setHash(_hash);
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
        setValid(false);
      } finally {
        setValidating(false);
        setValidationDone(true);
        setQueryHash(_hash);
      }
    },
    [setQueryHash]
  );

  useEffect(() => {
    if (queryHash) {
      handleUploadDone(queryHash);
    }
  }, [handleUploadDone, queryHash]);

  if (validationDone && !valid) {
    return <div>We could not verify the validity of this document.</div>;
  }

  if (validationDone && valid) {
    return <DetailsPage filename={filename} doc={doc as DocumentDetails} />;
  }

  return <UploadPage validating={validating} onUploadDone={handleUploadDone} />;
}

export default Main;
