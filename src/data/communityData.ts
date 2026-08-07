import { CommunityData } from '../types';

// Import local generated images (you can replace these imports or change paths below!)
import heroImg from '../assets/images/ultimate_playhouse_hero_1785516387845.jpg';
import posterImg from '../assets/images/UCL POSTER.png';
import logoImg from '../assets/images/IMG_0493.webp';
import brazilImg from '../assets/images/Brazil.png';
import germanyImg from '../assets/images/Germany.png';
import qatarImg from '../assets/images/Qatar.png';
import uruguayImg from '../assets/images/Uruguay.png';
import brazilFlag from '../assets/Flag/Brazilflag.png';
import germanFlag from '../assets/Flag/Germanflag.png';
import qatarFlag from '../assets/Flag/Qatarflag.png';
import uruguayFlag from '../assets/Flag/Uruguayflag.png';
import efserbiaImg from '../assets/images/EfSerbia.png';
import efbrazilImg from '../assets/images/EfBrazil.png';
import efargentinaImg from '../assets/images/EfArgentina.png';

/**
 * =============================================================================
 * ULTIMATE PLAYHOUSE - COMMUNITY CONFIGURATION & CONTENT DATA
 * =============================================================================
 * Beginners Guide:
 * To edit any text, dates, prizes, links, or player names on the website,
 * simply change the values inside the quotes below!
 * 
 * To change the Register Now link:
 * Update 'registrationFormUrl' with your Google Form URL.
 * =============================================================================
 */

export const communityData: CommunityData = {
  // 1. COMMUNITY BASIC INFO
  communityName: "Ultimate Playhouse",
  tagline: "The Home of FC Mobile & eFootball Tournaments",
  welcomeMessage: "Welcome to Ultimate Playhouse — the premier competitive hub for FC Mobile and eFootball mobile esports. Join elite players, prove your skills in structured seasons, claim cash rewards, and earn your place in our Hall of Fame.",
  
  // Official Logo & Hero Background Image (Editable)
  logoImage: logoImg,
  heroImage: heroImg,

  // Community Statistics Counters
  stats: {
    tournamentsHosted: "7+",
    activeGamers: "200+",
    totalPrizeDistributed: "3000+ Taka"
  },

  // 2. CURRENT TOURNAMENT DETAILS (EDIT EVERYTHING FOR UPCOMING EVENTS HERE!)
  currentTournament: {
    id: "season-1-champions-league",
    title: "E-football UEFA Champions League",
    subtitle: "Season 1",
    game: "E-football 2026",
    
    // Poster image URL or imported image
    posterUrl: posterImg,
    
    description: "Get ready for Season 1! The ultimate mobile football tournament where the finest tactics, pace, and penalty precision collide. Battle through group stages into high-stakes knockouts to crown the supreme champion.",
    
    // Event Schedule & Fees
    date: "August 15, 2026",
    time: "11:00 PM (BD Time)",
    entryFee: "৳50 (BDT) per Player",
    prizePool: "৳1,250 (BDT)",
    
    // Registration Deadline for the Live Countdown Timer
    registrationDeadlineIso: "2026-08-14T23:59:00",
    registrationDeadlineText: "August 14, 2026 at 11:59 PM",
    
    // =========================================================================
    // EDIT YOUR GOOGLE FORM REGISTRATION LINK HERE:
    // =========================================================================
    registrationFormUrl: "https://forms.gle/cUdutYC16YnZiJXy8",
    
    format: "1v1 Head-to-Head | Home & Away Group & Knockout Matches (BO3 Finals)",
    platform: "FC Mobile (iOS/Android) & eFootball (Mobile)",
    
    // Prize Pool Distribution Breakdown
    prizeBreakdown: [
      { position: "1st Place (Champion)", prize: "৳400 + Certificate", badge: "🥇 Gold", highlight: true },
      { position: "2nd Place (Runner-up)", prize: "৳200 + Certificate", badge: "🥈 Silver" },
      { position: "3rd Place", prize: "৳125 + Certificate", badge: "🥉 Bronze" },
      { position: "4th Place", prize: "৳75", badge: "🏅 Steel" },
      { position: "Top Scorer", prize: "৳100", badge: "⚽ Golden Boot" },
      { position: "MvP", prize: "৳50", badge: "⭐ Most Goals in a Match" }
    ],

    // Official Tournament Rules List
    rules: [
      "All matches must be played on standard competitive match settings.",
      "Players must take screenshots of match result screens showing final scores and stats.",
      "Connection drops during matches will trigger a restart of remaining time with original goal differences kept.",
      "Unsportsmanlike behavior, toxicity, or cheating will result in immediate disqualification.",
      "Participants must submit their game ID and WhatsApp number during registration.",
      "Decisions made by Ultimate Playhouse tournament referees are final."
    ],

    status: 'Upcoming'
  },

  // 3. HALL OF FAME (PAST SEASONS & CHAMPIONS)
  hallOfFame: [
    {
      seasonId: "season-1",
      seasonName: "FC Mobile World Cup Season 1",
      game: "FC Mobile",
      dateCompleted: "July 2026",
      champion: {
        name: "Sk Mustakim",
        gamerTag: "Silent..killer",
        avatar: brazilImg,
        role: "Champion",
        team: "Brazil",
        stat: "Undefeated Season",
      },
      runnerUp: {
        name: "Nayeem Haque",
        gamerTag: "BD71xNaim",
        avatar: germanyImg,
        role: "Runner-up",
        team: "Germany",
        stat: "Runner-up (Normal Time 1-2)",
      },
      mvp: {
        name: "Abdus Sattar Miah Rafi",
        gamerTag: "RFxSiuuu07",
        avatar: qatarImg,
        role: "MVP",
        team: "Qatar",
        stat: "3rd Place (Penalty 3-1)",
      },
      goldenBoot: {
        name: "Ferdous Fahim",
        gamerTag: "Geostorm",
        avatar: uruguayImg,
        role: "Golden Boot",
        team: "Urugauy",
        stat: "21 Goals",
      }
    },
    {
    seasonId: "efootball-world-cup-season-1",
    seasonName: "eFootball World Cup Season 1",
    game: "eFootball",
    dateCompleted: "July 2026",

    champion: {
      name: "Raisul Islam",
      gamerTag: "You are finished",
      avatar: efserbiaImg,
      role: "Champion",
      team: "Serbia",
      stat: "Undefeated Champion",
    },

    runnerUp: {
      name: "Asif Qureshi",
      gamerTag: "Liverpool R",
      avatar: efbrazilImg,
      role: "Runner-up",
      team: "Brazil",
      stat: "The 2nd Best",
    },

    mvp: {
      name: "Hamim Minhaz",
      gamerTag: "Manchester United FC",
      avatar: efargentinaImg,
      role: "3rd Place",
      team: "Argentina",
      stat: "The 3rd Best",
    },

    goldenBoot: {
      name: "Raisul Islam",
      gamerTag: "You are finished",
      avatar: efserbiaImg,
      role: "Golden Boot",
      team: "Serbia",
      stat: "20 Goals",
    }
  }
],
  // 4. COMMUNITY SOCIAL LINKS (EDITABLE FOR YOUR GROUPS)
  socialLinks: [
    {
      platform: "Discord",
      url: "https://discord.gg/upgUWhjhh",
      label: "Discord Server"
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61592233096868",
      label: "Facebook Page"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/ultimateplayhousebd/",
      label: "Instagram"
    }
  ],

  contactEmail: "ultimateplayhousebd@gmail.com"
};
