// Minimal inline icon set (stroke icons, 24px grid) — avoids an icon library download.
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };
const base = (size = 22): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
});

const make = (d: React.ReactNode) =>
  function Icon({ size, ...p }: P) {
    return (
      <svg {...base(size)} {...p}>
        {d}
      </svg>
    );
  };

export const IconHome = make(<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />);
export const IconChat = make(<path d="M4 5h16v11H8l-4 4z" />);
export const IconPlay = make(
  <>
    <rect x="3" y="7" width="18" height="11" rx="5" />
    <path d="M8 11v3M6.5 12.5h3M15 11.5h.01M17 13.5h.01" />
  </>,
);
export const IconMap = make(<path d="M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14" />);
export const IconMore = make(
  <>
    <circle cx="5" cy="12" r="1.2" />
    <circle cx="12" cy="12" r="1.2" />
    <circle cx="19" cy="12" r="1.2" />
  </>,
);
export const IconBook = make(<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M8 7h7" />);
export const IconSofa = make(<path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2zM5 18v2M19 18v2" />);
export const IconVault = make(<path d="M4 4h16v16H4zM12 9v6M9 12h6" />);
export const IconCalendar = make(<path d="M4 6h16v14H4zM4 10h16M9 3v4M15 3v4" />);
export const IconMusic = make(<path d="M9 18V5l11-2v13M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3zM20 16a3 3 0 1 1-3-3 3 3 0 0 1 3 3z" />);
export const IconClock = make(<path d="M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />);
export const IconSettings = make(
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-2-1.2L14 3h-4l-.6 2.6a7 7 0 0 0-2 1.2l-2.3-1-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 2 1.2L10 21h4l.6-2.6a7 7 0 0 0 2-1.2l2.3 1 2-3.4-2-1.5c.1-.4.1-.8.1-1.3z" />
  </>,
);
export const IconPhone = make(<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />);
export const IconVideo = make(<path d="M3 7h12v10H3zM15 11l6-4v10l-6-4" />);
export const IconMic = make(<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3" />);
export const IconMicOff = make(<path d="M3 3l18 18M9 9v3a3 3 0 0 0 5 2.2M15 10V6a3 3 0 0 0-5.7-1.3M5 11a7 7 0 0 0 11.5 5.4M19 11a7 7 0 0 1-.6 2.8M12 18v3" />);
export const IconCamOff = make(<path d="M3 3l18 18M15 11l6-4v10l-3-2M13 17H3V7h2M9 7h6v4" />);
export const IconFlip = make(<path d="M4 7h11l-3-3M20 17H9l3 3M20 7v4M4 17v-4" />);
export const IconImage = make(
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="9" cy="10" r="2" />
    <path d="M21 16l-5-5-8 9" />
  </>,
);
export const IconSend = make(<path d="M4 12l16-8-6 16-3-7z" />);
export const IconReply = make(<path d="M9 7L4 12l5 5M4 12h11a5 5 0 0 1 5 5v1" />);
export const IconGift = make(<path d="M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7c-2-4-6-3-5 0M12 7c2-4 6-3 5 0" />);
export const IconStar = make(<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />);
export const IconTrash = make(<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" />);
export const IconPlus = make(<path d="M12 5v14M5 12h14" />);
export const IconBack = make(<path d="M15 5l-7 7 7 7" />);
export const IconLock = make(<path d="M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3" />);
export const IconHeart = make(<path d="M12 20s-8-5-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6-8 11-8 11z" />);
export const IconPlayTri = make(<path d="M7 4l13 8-13 8z" fill="currentColor" />);
export const IconPause = make(<path d="M7 4h3v16H7zM14 4h3v16h-3z" fill="currentColor" />);
export const IconStop = make(<rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" />);
export const IconRetry = make(<path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5" />);
export const IconEdit = make(<path d="M4 20h4L19 9l-4-4L4 16zM14 6l4 4" />);
export const IconMinimize = make(<path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" />);
export const IconMaximize = make(<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />);
export const IconDownload = make(
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </>,
);


