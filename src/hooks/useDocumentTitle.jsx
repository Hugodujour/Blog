import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    const originalTitle = document.title;
    return () => (document.title = originalTitle);
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
}
