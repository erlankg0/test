import {Variants} from 'framer-motion';

export const fadeIn = (
    direction: 'left' | 'right' | 'up' | 'down',
    type: 'spring' | 'tween' | 'just' | 'inertia',
    delay: number,
    duration: number
): Variants => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};


// Example of textVariant function in frame.ts
export const textVariant = (delay: number) => ({
    hidden: {
        opacity: 0,
        y: 20,  // Adjust vertical position for entrance effect
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: delay / 1000,  // Convert milliseconds to seconds for delay
            duration: 0.8,
        },
    },
});

// Zoom In Animation
export const zoomIn = (delay: number, duration: number): Variants => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

// Slide In Animation
export const slideIn = (
    direction: 'left' | 'right' | 'up' | 'down',
    type: 'tween' | 'spring' | 'just' | 'inertia',
    delay: number,
    duration: number
): Variants => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

// Stagger Container Animation
export const staggerContainer = (
    staggerChildren: number,
    delayChildren?: number
): Variants => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};
