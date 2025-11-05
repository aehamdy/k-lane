import { IconName } from "@/components/common/Icon";

interface Social {
  id: number;
  title: string;
  url: string;
  iconName: IconName;
}

interface Office {
  title: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
}

interface SiteData {
  name: string;
  slogan: string;
  description: string;
  socials: Social[];
  office: Office;
}

const siteData: SiteData = {
  name: "K-Lane",
  slogan: "",
  description:
    "Discover K-Lane Coffee — your local destination for specialty brews, fresh pastries, and cozy vibes. Explore our menu, find nearby locations, and get in touch with our team.",
  socials: [
    { id: 1, title: "Facebook", url: "facebook.com", iconName: "facebook" },
    { id: 2, title: "Instagram", url: "instagram.com", iconName: "instagram" },
    { id: 3, title: "Twitter", url: "twitter.com", iconName: "twitter" },
    { id: 4, title: "Youtube", url: "youtube.com", iconName: "youtube" },
  ],
  office: {
    title: "Corporate office",
    address: "123 Coffee Lane, Brewtwon, USA",
    hours: "All week: 7:00 AM - 7:00 PM",
    phone: "(123) 456-7890",
    email: "info@brewhaven.com",
  },
};

export default siteData;
