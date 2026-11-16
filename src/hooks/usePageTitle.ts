import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (title: string) => {
    if (typeof title !== 'string') {
        throw new Error('Title must be a string');
    }
    const location = useLocation();

    useEffect(() => {
        if (title.length === 0) {
            document.title = import.meta.env.VITE_APP_NAME;
        } else {
            document.title = `${title} - ${import.meta.env.VITE_APP_NAME}`;
        }

        const canonicalUrl = new URL(location.pathname, window.location.origin).toString();
        let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.rel = 'canonical';
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.href = canonicalUrl;
    }, [location.pathname, title]);
};

export default usePageTitle;