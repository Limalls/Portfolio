import react from 'react'

const FadeIn = ({children, duration = 500, delay = 0, threshold = 0.1}) => {
    const [isVisible, setIsVisible] = react.useState(false);
    const ref = react.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (ref.current ) {
            observer.observe(ref.current); 
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    } , [threshold, isVisible]);

    return (
        <div
            ref={ref}
            className={isVisible ? 'animate-fadeIn' : 'opacity-0'}
            style={{
                animationDuration: `${duration}ms`,
                animationDelay: isVisible ? `${delay}ms` : '0ms',
                animationFillMode: 'both',
            }}
        >
            {children}
        </div>
    );
}

export default FadeIn