"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent, CardActions, IconButton, Tooltip, Typography, Box } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";

type PhotoItem = {
    src: string;
    alt?: string;
    takenAt: string | Date; // ISO string or Date
};

type ImageCarouselCardProps = {
    items: PhotoItem[];
    startIndex?: number;
    width?: number;
    height?: number;
};

export default function ImageCarouselCard({
                                              items,
                                              startIndex = 0,
                                              width = 450,
                                              height = 300,
                                          }: ImageCarouselCardProps) {
    const [idx, setIdx] = useState(startIndex % items.length);
    const curr = items[idx];

    const next = useCallback(() => setIdx((i) => (i + 1) % items.length), [items.length]);
    const prev = useCallback(
        () => setIdx((i) => (i - 1 + items.length) % items.length),
        [items.length]
    );

    // Optional: keyboard nav with ← →
    const cardRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (!cardRef.current) return;
            // Only navigate if focus is inside the card
            if (cardRef.current.contains(document.activeElement)) {
                if (e.key === "ArrowLeft") prev();
                if (e.key === "ArrowRight") next();
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [next, prev]);

    const formattedTime = useMemo(
        () => format(new Date(curr.takenAt), "PPpp"),
        [curr.takenAt]
    );

    return (
        <Card
            ref={cardRef}
            tabIndex={0}
            sx={{
                boxShadow: 3,
                borderRadius: 3,
                overflow: "hidden",
                height: "100%",
                outline: "none",
            }}
        >
            <CardContent
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 0,
                }}
            >
                {/* Image */}
                <Image
                    width={width}
                    height={height}
                    src={curr.src}
                    alt={curr.alt ?? "photo"}
                    style={{ borderRadius: 12, objectFit: "cover" }}
                    priority={idx === 0} // small perf win
                />

                {/* Left Chevron */}
                <Box
                    sx={{
                        position: "absolute",
                        left: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(0,0,0,0.35)",
                        borderRadius: "9999px",
                    }}
                >
                    <Tooltip title="Previous (←)">
                        <IconButton
                            aria-label="previous image"
                            onClick={prev}
                            size="small"
                            sx={{ color: "white" }}
                        >
                            <ChevronLeft />
                        </IconButton>
                    </Tooltip>
                </Box>

                {/* Right Chevron */}
                <Box
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(0,0,0,0.35)",
                        borderRadius: "9999px",
                    }}
                >
                    <Tooltip title="Next (→)">
                        <IconButton
                            aria-label="next image"
                            onClick={next}
                            size="small"
                            sx={{ color: "white" }}
                        >
                            <ChevronRight />
                        </IconButton>
                    </Tooltip>
                </Box>

                {/* Index badge (optional) */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 8,
                        right: 12,
                        px: 1,
                        py: 0.25,
                        borderRadius: 1,
                        bgcolor: "rgba(0,0,0,0.45)",
                        color: "white",
                        fontSize: 12,
                    }}
                >
                    {idx + 1} / {items.length}
                </Box>
            </CardContent>

            {/* Time + caption */}
            <CardActions
                sx={{
                    px: 2,
                    py: 1.5,
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography variant="body2" color="text.secondary" noWrap>
                    Taken: {formattedTime}
                </Typography>
                {curr.alt && (
                    <Typography variant="body2" color="text.secondary" noWrap>
                        {curr.alt}
                    </Typography>
                )}
            </CardActions>
        </Card>
    );
}