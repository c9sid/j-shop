"use client"
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

    const images = [
        "https://images.pexels.com/photos/7203892/pexels-photo-7203892.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=2",
        "https://images.pexels.com/photos/8074593/pexels-photo-8074593.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=2",
        "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=2",
        "https://images.pexels.com/photos/6616675/pexels-photo-6616675.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=2"
    ];

    const SLIDE_DURATION = 4000; // 4s per slide
    const TICK = 50; // update progress every 50ms

    // Handle auto progress
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev + (TICK / SLIDE_DURATION) * 100 >= 100) {
                    // when progress reaches 100, go to next slide
                    setCurrentIndex((c) =>
                        c + 1 === images.length ? 0 : c + 1
                    );
                    return 0; // reset progress
                }
                return prev + (TICK / SLIDE_DURATION) * 100;
            });
        }, TICK);

        return () => clearInterval(interval);
    }, [isPlaying, images.length]);

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev + 1 === images.length ? 0 : prev + 1
        );
        setProgress(0);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? images.length - 1 : prev - 1
        );
        setProgress(0);
    };

    return (
        <div className="relative carousel container mx-auto group transition duration-900 ease-in-out">
            {/* Slide */}
            <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden">
                <Image
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    fill
                    priority
                    className="object-cover rounded-2xl"
                />
            </div>

            {/* Arrows */}
            <div
                className="absolute bg-white/50 z-10 p-2 cursor-pointer left-3 top-1/2 -translate-y-1/2 rounded-full shadow-md"
                onClick={handlePrev}
            >
                <ArrowLeft />
            </div>
            <div
                className="absolute bg-white/50 z-10 p-2 cursor-pointer right-3 top-1/2 -translate-y-1/2 rounded-full shadow-md"
                onClick={handleNext}
            >
                <ArrowRight />
            </div>

            {/* Progress Bar + Play/Pause */}
            <div className="absolute bottom-3 left-0 w-full px-6 flex items-center space-x-2">
                {/* Progress Bar */}
                <div className="flex-1 h-1 bg-gray-200/50 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-white transition-all"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Play/Pause Button */}
                <button
                    className="absolute right-3 bottom-3 bg-white shadow-md rounded-full p-2 hidden group-hover:flex"
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    {isPlaying ? <Pause /> : <Play />}
                </button>
            </div>
        </div>
    );
};

export default Slider;
