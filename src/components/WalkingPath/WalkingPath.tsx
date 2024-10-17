import clsx from "clsx";
import styles from "./WalkingPath.module.scss";

export const WalkingPath = () => {

    return (
        <div className="h-screen w-screen absolute top-0 left-0 overflow-hidden  z-0">
            <img src="/src/images/droga.jpg"
                 alt="droga"
                 className={clsx("object-cover transition-all h-full", styles.WalkingPath)}
            />
        </div>
    )
}