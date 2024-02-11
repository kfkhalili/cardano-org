import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SiteHero from "@site/src/components/SiteHero";
import TitleWithText from "@site/src/components/TitleWithText";
import FeaturedTitleWithText from "@site/src/components/FeaturedTitleWithText";

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <SiteHero
        title={[
          'Making the world',
          <br key='line1'/>,
          'Work Better For All',
        ]}
        description='Cardano is a blockchain platform for changemakers, innovators, and visionaries, 
        with the tools and technologies required to create possibility for the many, as well as the few, 
        and bring about positive global change.'
        bannerType ='default'
      />
      <main>
        
        <FeaturedTitleWithText
          title='Our World Is Changing. Together, We Can Change It For The Better.'
          description={[
            'Cardano is a proof-of-stake blockchain platform: the first to be founded on peer-reviewed \
            research and developed through evidence-based methods. It combines pioneering technologies \
            to provide unparalleled security and sustainability to decentralized applications, systems, \
            and societies.',
            <br key='line1'/>,
            <br key='line2'/>,
            'With a leading team of engineers, Cardano exists to redistribute power from unaccountable \
            structures to the margins – to individuals – and be an enabling force for positive change and progress.',
            ]}
          quote={[
            'A History Of Impossible,',
            <br key='line1'/>,
            'Made Possible'
            ]}
          buttonLabel='Use Cases'
          buttonLink='/enterprise'
        />

      
        
      </main>
    </Layout>
  );
}