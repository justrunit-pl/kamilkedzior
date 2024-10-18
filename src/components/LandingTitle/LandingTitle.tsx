import { useTrail, a } from "react-spring";
import styles from "./LandingTitle.module.scss";
import React, {type ReactNode} from "react";
import clsx from "clsx";

const Trail = ({ open, children, className }: { open: boolean, children: ReactNode, className?: string}) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        from: { opacity: 0, x: 20 },
    })
    return (
        <div className={className}>
            {trail.map(({ ...style }, index) => (
                <a.div key={index} className={clsx(styles.trailsText, "")} style={style}>
                    <a.div>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}


export const LandingTitle = () => {
    return (
        <div className="flex flex-col gap-0.5">
            <Trail open={true} className="text-4xl !text-white font-primary">
                <span className="text-2xl md:text-3xl">Kamil Kędzior</span>
                <span className="text-xl md:text-xl font-light">Psychoterapia Gestalt</span>
            </Trail>
        </div>
    )
}