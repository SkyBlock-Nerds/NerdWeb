import { useEffect } from 'react';

const usePageTitle = (title: string) => {
    if (typeof title !== 'string') {
        throw new Error('Title must be a string');
    }
    useEffect(() => {
        if (title.length === 0) {
            document.title = import.meta.env.VITE_APP_NAME;
        } else {
            document.title = `${title} - ${import.meta.env.VITE_APP_NAME}`;
        }
    }, [title]);
};

export default usePageTitle;