export interface PrizeTier {
  position: string;
  prize: string;
  badge?: string;
  highlight?: boolean;
}

export interface Tournament {
  id: string;
  title: string;
  game: string;
  subtitle: string;
  posterUrl: string;
  description: string;
  date: string;
  time: string;
  entryFee: string;
  prizePool: string;
  prizeBreakdown: PrizeTier[];
  registrationDeadlineIso: string; // e.g. "2026-08-15T23:59:00"
  registrationDeadlineText: string;
  registrationFormUrl: string; // GOOGLE FORM LINK
  format: string; // e.g. "Single Elimination Knockout (BO3 Final)"
  platform: string; // e.g. "FC Mobile (iOS/Android) & eFootball (Mobile)"
  rules: string[];
  status: 'Upcoming' | 'Ongoing' | 'Completed';
}

export interface PlayerAward {
  name: string;
  gamerTag?: string;
  avatar: string;
  role: 'Champion' | 'Runner-up' | 'Golden Boot' | 'MVP' | string;
  team?: string;
  stat?: string;
  favoriteClub?: string;
}

export interface HallOfFameSeason {
  seasonId: string;
  seasonName: string; // e.g. "Season 3 - Summer Showdown"
  game: string; // e.g. "FC Mobile & eFootball 2026"
  dateCompleted: string;
  champion: PlayerAward;
  runnerUp: PlayerAward;
  goldenBoot: PlayerAward;
  mvp: PlayerAward;
}

export interface CommunityStats {
  tournamentsHosted: string | number;
  activeGamers: string;
  totalPrizeDistributed: string;
  seasonsCompleted?: number;
}

export interface SocialLink {
  platform: 'WhatsApp' | 'Discord' | 'Facebook' | 'YouTube' | 'Telegram' | 'Instagram' | string;
  url: string;
  label: string;
}

export interface CommunityData {
  communityName: string;
  tagline: string;
  welcomeMessage: string;
  heroImage: string;
  logoImage?: string;
  stats: CommunityStats;
  currentTournament: Tournament;
  hallOfFame: HallOfFameSeason[];
  socialLinks: SocialLink[];
  contactEmail: string;
}
