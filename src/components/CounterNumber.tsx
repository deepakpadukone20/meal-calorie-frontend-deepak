
import { useEffect, useState } from "react";
export function CounterNumber({ value, loading, className = '' }: { value: number |undefined, loading: boolean, className?: string }) {

    const [animatedCalories, setAnimatedCalories] = useState(0);


    useEffect(() => {
        if (value) {
            let start = 0;
            const end = value;
            const duration = 1000;
            const step = Math.ceil(end / 60);

            const interval = setInterval(() => {
                start += step;
                if (start >= end) {
                    clearInterval(interval);
                    setAnimatedCalories(end);
                } else {
                    setAnimatedCalories(start);
                }
            }, duration / (end / step));

            return () => clearInterval(interval);
        }
    }, [loading, value]);
    return (
        <span className={className}>{animatedCalories}</span>
    )
}