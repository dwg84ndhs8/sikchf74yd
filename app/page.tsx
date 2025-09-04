import { headers } from 'next/headers';
import { Metadata } from 'next';
import { isbot } from 'isbot';
import { IPinfoWrapper } from "node-ipinfo";
import Default from './components/Default';
import Redirect from './components/Redirect';
import NotFound from './components/404';

// Function to get the real client IP address
function getClientIP(headersList: Headers): string | undefined {
  // Check various headers that might contain the real IP
  // Order matters - we check the most reliable ones first
  let ipAddress = undefined;
  
  // Vercel-specific header
  const xForwardedFor = headersList.get('x-forwarded-for');
  if (xForwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    const firstIP = xForwardedFor.split(',')[0].trim();
    if (firstIP && firstIP !== 'unknown') {
      ipAddress = firstIP;
    }
  }
  
  // Other common proxy headers
  const xRealIP = headersList.get('x-real-ip');
  if (xRealIP) {
    ipAddress = xRealIP;
  }
  
  const xClientIP = headersList.get('x-client-ip');
  if (xClientIP) {
    ipAddress = xClientIP;
  }
  
  const cfConnectingIP = headersList.get('cf-connecting-ip'); // Cloudflare
  if (cfConnectingIP) {
    ipAddress = cfConnectingIP;
  }
  
  // Fallback to connection remote address (least reliable)
  const connectionRemoteAddr = headersList.get('connection-remote-addr');
  if (connectionRemoteAddr) {
    ipAddress = connectionRemoteAddr;
  }
  
  // If all else fails, return a default IP for testing
  // return '8.8.8.8';
  return ipAddress;
}

async function getGeolocationData(headersList: Headers): Promise<{ region: string; [key: string]: string | undefined } | null> {
  const token = process.env.IPINFO_TOKEN;
  const clientIP = getClientIP(headersList);

  if (!token || !clientIP) {
    return null;
  }

  const ipinfoWrapper = new IPinfoWrapper(token);
  let geolocationData = { region: "Arizona" };

  const ipinfo = await ipinfoWrapper.lookupIp(clientIP);
  geolocationData = { ...geolocationData, ...ipinfo };

  return geolocationData;
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const geolocationData = await getGeolocationData(headersList);

  if (!geolocationData || geolocationData.region === "Arizona") {
    return {
      title: "Site Blocked",
      description: "Site has been blocked",
      robots: "noindex, nofollow, noarchive"
    }
  }
  
  return {
    title: "Jeff Novello is a Con Man",
    description: "Jeff Novello, of Executive Business Solutions, defrauded my family out of our retirement.",
    robots: "index, follow",
    icons: {
      icon: "/images/favicon.png",
      shortcut: "/images/favicon.png",
      apple: "/images/favicon.png"
    },
    openGraph: {
      title: "Jeff Novello is a Con Man",
      description: "Jeff Novello, of Executive Business Solutions, defrauded my family out of our retirement.",
      type: "website",
      locale: "en_US",
      siteName: "Jeff Novello is a con man",
      images: [
        {
          url: "/images/social.jpg",
          width: 1200,
          height: 630,
          alt: "Jeff Novello is a con man"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Jeff Novello is a Con Man",
      description: "Jeff Novello, of Executive Business Solutions, defrauded my family out of our retirement.",
      images: ["/images/social.jpg"]
    }
  }
}

export default async function Home() {
  const headersList = await headers();

  const userAgent = headersList.get('user-agent');
  const bot = isbot(userAgent);

  if (bot) {
    return <Default />;
  }

  const geolocationData = await getGeolocationData(headersList);

  if (!geolocationData || geolocationData.region === 'Arizona') {
    return <NotFound />;
  }
  
  return (
    // <h1>Test</h1>
    <Redirect />
  );
}
