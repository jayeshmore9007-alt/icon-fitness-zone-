export type MediaItem = { src: string; alt: string };

export const FEATURE_IMAGES: Record<"face" | "voice" | "overview", MediaItem> = {
  face: {
    src: "assets/generated/glowing-orange-face-scan-outline-dark-background-4x3-1jno8f.webp",
    alt: "Leuchtende orange Gesichtskontur mit Scanlinien auf dunklem Hintergrund",
  },
  voice: {
    src: "assets/photos/glowing-orange-sound-waves-dark-backgrou-36481094.jpg",
    alt: "Orange leuchtende Schallwellen als Symbol für den Sprachassistenten",
  },
  overview: {
    src: "assets/photos/glowing-orange-bar-charts-dashboard-dark-38933571.jpg",
    alt: "Abstrakte orange leuchtende Diagramme als Symbol für die Verwaltung",
  },
};

export const GALLERY: MediaItem[] = [
  {
    src: "assets/photos/personal-trainer-coaching-gym-6455906.jpg",
    alt: "Trainer betreut ein Mitglied beim Krafttraining",
  },
  {
    src: "assets/photos/dumbbell-rack-weights-gym-19025674.jpg",
    alt: "Hantelständer mit Kurzhanteln im Fitnessstudio",
  },
  {
    src: "assets/photos/woman-running-treadmill-gym-6285195.jpg",
    alt: "Frau trainiert auf dem Laufband",
  },
];
