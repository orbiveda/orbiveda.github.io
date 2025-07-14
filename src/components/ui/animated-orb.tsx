/*
 * © 2025 Orbiveda™. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

"use client";

import { useEffect, useRef } from 'react';
import styles from './animated-orb.module.css';

export default function AnimatedOrb() {
    const orbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (orbRef.current) {
                const { clientX, clientY } = event;
                const { innerWidth, innerHeight } = window;
                
                const xPos = (clientX / innerWidth - 0.5) * 60; 
                const yPos = (clientY / innerHeight - 0.5) * 60;

                orbRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center w-full h-full perspective-800">
            <div ref={orbRef} className={styles.orb} />
        </div>
    );
}
