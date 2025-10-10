interface Socials {
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
}

interface SiteData {
  name: string;
  slogan: string;
  description: string;
  socials: Socials;
}

const siteData: SiteData = {
  name: "Koffee Lane",
  slogan: "",
  description: "",
  socials: { facebook: "", twitter: "", instagram: "", youtube: "" },
};

export default siteData;
