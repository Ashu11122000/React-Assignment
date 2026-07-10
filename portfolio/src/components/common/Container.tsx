import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Container Component
 * ==========================================================
 *
 * A reusable responsive wrapper used throughout the
 * portfolio to keep all sections aligned.
 *
 * Features
 * ----------
 * ✓ Responsive Width
 * ✓ Max Width
 * ✓ Horizontal Padding
 * ✓ Custom Class Support
 * ✓ TypeScript
 *
 * Example
 * ----------
 * <Container>
 *   <Hero />
 * </Container>
 *
 * <Container className="py-20">
 *   <AboutSection />
 * </Container>
 *
 * ==========================================================
 */

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10",
                className,
            )}
                {...props}
        >
            {children}
        </div>
    );
}

export default Container;
