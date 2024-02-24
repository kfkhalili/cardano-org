import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import SiteHero from "@site/src/components/Layout/SiteHero";
import FollowCardano from "@site/src/components/Layout/FollowCardano";
import Divider from "@site/src/components/Layout/Divider";
import WelcomeHero from "@site/src/components/Layout/WelcomeHero";
import FeaturedTitleWithText from "@site/src/components/Layout/FeaturedTitleWithText";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>

      <Divider text="WelcomeHero Component" />
      <WelcomeHero
        title={["Making the world", <br key="line1" />, "Work Better For All"]} /* FIXME: too hacky */
        description="Cardano is a blockchain platform for changemakers, innovators, and visionaries, 
        with the tools and technologies required to create possibility for the many, as well as the few, 
        and bring about positive global change."
      />
      <Divider text="SiteHero Component Examples" />
      <SiteHero
        title={["SiteHero Component"]}
        description="bannerType: ada"
        bannerType="ada"
      />
      <hr />
      <SiteHero
        title={["SiteHero Component"]}
        description="bannerType: dots"
        bannerType="dots"
      />
      <hr />
      <SiteHero
        title={["SiteHero Component"]}
        description="bannerType: fluid"
        bannerType="fluid"
      />
      <hr />
      <SiteHero
        title={["SiteHero Component"]}
        description="bannerType: overlap"
        bannerType="overlap"
      />
      <hr />
      <SiteHero
        title={["SiteHero Component"]}
        description="bannerType: zoomRedWhite"
        bannerType="zoomRedWhite"
      />
      <hr />
      <SiteHero
        title={["SiteHero Component"]}
        description="bannerType: zoomRedWhiteDark"
        bannerType="zoomRedWhiteDark"
      />
      <hr />
      <SiteHero
        title={["SiteHero Component"]}
        description="bannerType: zoom (default)"
        bannerType="default"
      />
      <hr />
      <SiteHero
        title={["SiteHero Component"]}
        description="bannerType: waves"
        bannerType="waves"
      />

      </main>
    </Layout>
  );
}