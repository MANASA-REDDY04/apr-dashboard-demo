import { useEffect } from 'react';

export const useQueryError = (error: any) => {
    useEffect(() => {
        if (error) {
            console.error("Query Error:", error);
            // Could send to toast or Sentry here
        }
    }, [error]);
};
