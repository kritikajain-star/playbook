import { useState, useEffect } from 'react';

export type Phase1Data = {
    i1: string; // Country
    i2: string; // Zone
    i3: string; // Product Line
    i4: string; // Order Intake
    i5: string; // Job Volume
    i6: string; // Scale
    i7: string; // Phasing
    i8: string; // Capability
    i9: string; // Operating Model
    i10: string; // Timeline
};

export const usePhase1Data = () => {
    const [data, setData] = useState<Phase1Data | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem('phase1-logic-map');
        if (saved) {
            setData(JSON.parse(saved));
        }
    }, []);

    return data;
};
