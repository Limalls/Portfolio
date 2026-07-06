import {useEffect, useState, useRef} from 'react';

export const useScrollSpy = (options = {}) => {
    const {
        threshold = 0.5,
        rootMargin = '0px',
    }

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );
