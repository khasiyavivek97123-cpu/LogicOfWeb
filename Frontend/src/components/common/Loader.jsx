import { motion } from "motion/react";

const Loader = ({
    text = "Loading...",
    subText = "Please wait while we prepare everything.",
    fullScreen = true,
}) => {

    return (
        <div
            className={`
                flex items-center justify-center
                ${fullScreen ? "min-h-screen" : "py-10"}
            `}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-4"
            >

                <l-quantum
                    size="60"
                    speed="1.75"
                    color="#3b82f6"
                ></l-quantum>

                <div className="text-center">

                    <h2 className="text-lg font-semibold">
                        {text}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {subText}
                    </p>

                </div>

            </motion.div>
        </div>
    );

};

export default Loader;