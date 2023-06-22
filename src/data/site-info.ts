
export type SocialLink = {
  platform: string
  href: string
  me?: string
  text: string
  icon: string
  footerOnly?: boolean
}

export type SiteInfo = {
  name: string
  title: string
  description: string
  // image: {
  //   src: string
  //   alt: string
  // }
  socialLinks: SocialLink[]
}

const siteInfo: SiteInfo = {
  name: "SeverlessDays SP",
  title: "ServerlessDays SP 2023",
  description: "Uma longa descrição",
  socialLinks: [
    {
      platform: "linkedin",
      href: "linkedin.com/in/jeanlucaslima",
      text: "Visite nosso LinkedIn",
      icon: "social/linkedin"
    }
  ]
}

export default siteInfo;
