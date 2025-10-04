import {
    IconAperture,
    IconCopy,
    IconLayoutDashboard,
    IconLogin,
    IconMoodHappy,
    IconTypography,
    IconUserPlus,
} from "@tabler/icons-react";

import {uniqueId} from "lodash";

const Menuitems = [
    {
        navlabel: true,
        subheader: "HOME",
    },

    {
        id: uniqueId(),
        title: "Dashboard",
        icon: IconLayoutDashboard,
        href: "/",
    },
    {
        navlabel: true,
        subheader: "TAG MANAGER",
    },
    {
        id: uniqueId(),
        title: "Tag",
        icon: IconTypography,
        href: "/tag",
    },
    {
        id: uniqueId(),
        title: "Shark visualizer",
        icon: IconCopy,
        href: "/model-viewer",
    },
    {
        navlabel: true,
        subheader: "IMAGES VIEWER",
    },
    {
        id: uniqueId(),
        title: "Images",
        icon: IconTypography,
        href: "/images",
    },
    {
        id: uniqueId(),
        title: "Live view",
        icon: IconMoodHappy,
        href: "/live-view",
    },
];

export default Menuitems;


