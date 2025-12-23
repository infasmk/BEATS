
import { Feature, AppScreenshot, NavLink } from './types';

export const PRIMARY_COLOR = '#1ED760';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Explore', href: '#preview' },
  { label: 'Features', href: '#features' },
  { label: 'Install', href: '#download' },
  { label: 'AWT', href: '#about' },
];

export const FEATURES: Feature[] = [
  {
    id: 'streaming',
    title: 'Lossless Audio',
    description: 'High-end FLAC and WAV support for pure sound quality.',
    icon: 'music',
  },
  {
    id: 'offline',
    title: 'Smart Cache',
    description: 'Automatic background downloading for offline listening.',
    icon: 'download-cloud',
  },
  {
    id: 'liked',
    title: 'Favorites',
    description: 'Deeply integrated favorites library that learns your taste.',
    icon: 'heart',
  },
  {
    id: 'search',
    title: 'Unified Search',
    description: 'Search across Spotify, YouTube Music, and JioSaavn.',
    icon: 'search',
  },
  {
    id: 'stats',
    title: 'Analytics',
    description: 'Track your listening habits with precise visual data.',
    icon: 'bar-chart-3',
  },
  {
    id: 'ui',
    title: 'AMOLED Black',
    description: 'Optimized for mobile displays to extend battery life.',
    icon: 'moon',
  },
  {
    id: 'fast',
    title: 'Lightning Fast',
    description: 'Zero bloatware. Instant startup. Zero latency.',
    icon: 'zap',
  },
  {
    id: 'notifications',
    title: 'Cross-Sync',
    description: 'Keep your playlists in sync across all your devices.',
    icon: 'refresh-ccw',
  },
];

// Replaced with reliable Unsplash placeholders that match the specific categories of your screenshots
export const SCREENSHOTS: AppScreenshot[] = [
  { id: 'player', title: 'Minnalvala Player', imageUrl: 'https://images.unsplash.com/photo-1514525253361-bee8a18744ad?auto=format&fit=crop&q=80&w=800&h=1600' },
  { id: 'home', title: 'Trending Hub', imageUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800&h=1600' },
  { id: 'search', title: 'Global Search', imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800&h=1600' },
  { id: 'library', title: 'Your Library', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800&h=1600' },
  { id: 'stats', title: 'Listening Stats', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=1600' },
  { id: 'downloads', title: 'Offline Collection', imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800&h=1600' },
];
