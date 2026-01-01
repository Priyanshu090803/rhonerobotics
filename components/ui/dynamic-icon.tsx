"use client";

import React from "react";

export const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = React.useMemo(() => {
        // Note: This dynamic require approach is specific to how the project was set up.
        // Ensure lucide-react is installed.
        try {
            return require(`lucide-react`)[name.charAt(0).toUpperCase() + name.slice(1) + "Icon"];
        } catch (e) {
            console.error(`Error loading icon: ${name}`, e);
            return null;
        }
    }, [name]);

    if (!IconComponent) return null;
    return <IconComponent className={className} />;
};

export default DynamicIcon;
