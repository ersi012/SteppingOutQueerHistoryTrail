import Image from 'next/image';
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import SiteSection from '../components/SiteSection'
import About from '../components/About'
import Donate from '../components/Donate'

const FirstParishChurch = () => {
  return (
    <main >
    <Navbar />
    <div className="relative bg-white">
      <div className="relative h-screen overflow-hidden">
        <Image
          src="/images/sites/FirstParishChurchImg/FirstParish1.webp"
          alt="First Parish Church"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="z-0"
          
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center text-white p-6">
        <div className="bg-white bg-opacity-75 p-4 rounded">
          <h2 className="text-6xl font-bold mb-8 text-[#1C5C2D]">First Parish Church</h2>
          <p className="text-lg text-[#1C5C2D] font-bold">425 Congress St.</p>
        </div>
        </div>
      </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <audio controls>
            <source src="./audio/FirstParishChurchFixed_mixdown.wav" type="audio/mpeg" />
        </audio>
        <p className="text-lg text-gray-800">
          The First Parish Church in Portland was established in 1674. Its current building at 425 Congress Street dates to 1825 making it the oldest church structure in the city.
          <br/><br/>
          Unitarian Universalist churches like First Parish have a long tradition of preaching love, community, and compassion including for LGBTQ+ people. The Unitarian Universalist Church was one of the first religious groups in the US to formally support the rights of homosexuals. In 1970, the Church&quot;s international General Assembly passed a resolution opposing “intolerance against homosexuals and bisexuals."
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
          <Image
            src="/images/sites/FirstParishChurchImg/FirstParish1.webp"
            width={300}
            height={300}
            objectPosition='center'
          />
         <div style={{ width: '300px', fontSize: '10px' }}>
          <p>Front of the First Parish Church, located at 425 Congress Street in Portland, Maine, United States. Built in 1825, it is listed on the National Register of Historic Places. Allen L. Hubbard, 27 April 27, 1936. Library of Congress, Prints and Photograph Division HABS: ME,3-PORT,3-7 Public domain, via Wikimedia Commons</p>
        </div>
        </div>
        <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
          <Image
            src="/images/sites/FirstParishChurchImg/2.UUC1970Gen.Assemblymintesp170&171HarvardSquareLibrary_11zon.webp"
            width={250}
            height={300}
            objectPosition='center'
          />
         <div style={{ width: '300px', fontSize: '10px' }}>
          <p>Discrimination against homosexuals and bisexuals" in Summary of Actions taken at the Ninth Annual UUA General Assembly, June 29-July 4, 1970 Seattle, Washington. Pg 170-171. Harvard Square Library. https://www.harvardsquarelibrary.org/general-assembly-minutes/
</p>
        </div>
        </div>
      </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#E2D6AF]">Charlie Howard Memorial and March </h2>
        <p className="text-lg text-gray-800">
          The local church played a role in the response to a brutal hate crime in Maine in the 1980s, when a 23-year-old gay man, Charlie Howard, was murdered two hours north of Portland in a homophobic attack.  On the night of July 7th, 1984, Howard and his boyfriend Roy Ogden were out at night in the city of Bangor where they lived.
          <br/><br/>
          Charlie was a vibrant, out-gay man, at a time and in a place where that was not only rare, but dangerous. Charlie and Roy were confronted by three teenage boys who shouted homophobic slurs and assaulted them. They eventually threw Charlie over the State Street Bridge - which the boys referred to as the "Chuckahomo Bridge" - ignoring his frantic pleas that he couldn&quot;t swim. Charlie drowned.<br/><br/>
          Memorial services and gatherings were immediately organized by the gay community in the cities of Bangor, Portland, and Lewiston. In Portland, 450 people came together here at the First Parish Church. The evening&quot;s memorial began with a reading of a Bangor police department affidavit with details of the murder. Then, following a brief service by the UU&quot;s Rev. Richard Hasty, four prominent members of the queer community spoke. In the face of victim-blaming news stories about the murder with headlines like “Homosexuality Called Motive" [for attack], one of the speakers, Dale McCormick reminded the crowd “Homosexuality is not a motive. Hatred and bigotry is."<br/><br/>
          As those gathered in the church prepared to exit, they were informed that a group of Bible-wielding hecklers were gathered outside, including a man who explained &quot;I&quot;m trying to tell these people, it&quot;s wrong to be a fag."&quot;
          <br/><br/>
          As if in response, those assembled began marching down Congress Street, followed by the bigots, who, in turn, were tailed by the Portland Police Department. One participant, Fred Berger, reported that “as we realized our numbers, we became bolder, cheering, shouting, and singing." For many, that march represented Portland&quot;s first Pride.
          <br/><br/>
          The murder of Charlie Howard galvanized Maine&quot;s queer communities and would lead to the creation of some of the first state-wide gay and lesbian organizations. Portland&quot;s  First Parish Church continued to serve as a critical ally.
          <br/><br/>
          During the 1980s, as AIDS became a central concern, the Portland church provided meeting space for the Gay Health Action Committee and the AIDS Hotline. It also hosted facilitated support groups, gay and lesbian focused AA meetings, and benefit events for AIDS organizations and groups like the Maine Gay Men&quot;s Chorus.
        </p>
        <h2 className="text-4xl font-bold text-center mb-10 mt-10 text-[#E2D6AF]">Photos</h2>

        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/FirstParishChurchImg/3. Charlie howard memorial Our Paper Aug 1984 p1.webp"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Charlie Howard memorial, Our Paper, August 1984, pg 1. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/111/">https://digitalcommons.usm.maine.edu/our_paper_sac/111/</a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/FirstParishChurchImg/4. Dale McCormick speaking at CH memorial in 1st Parish Our Paper Aug 1984 p4.webp"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Dale McCormick speaks at Charlie Howard&quot;s memorial service, Our Paper, August 1984, pg 4. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/111/">https://digitalcommons.usm.maine.edu/our_paper_sac/111/</a></p>
            </div>
          </div>
          <div style={{ textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/FirstParishChurchImg/5. AIDS & the responsible pulpit a sermon by rev richard hasty Our Paper Aug 1987 p7.webp"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>AIDS & the Responsible Pulpit: A Sermon by Rev. Richard Hasty, Our Paper, August 1987, pg 7. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/49/
              ">https://digitalcommons.usm.maine.edu/our_paper_sac/49/
              </a></p>
            </div>
          </div>
          <div style={{marginRight: '40px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/FirstParishChurchImg/6. Gay mens support group Our Paper Sept 1985 p4.webp"
              width={300}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Gay male support group advertisement, Our Paper, September 1985, pg 4. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.  
              <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/73/ ">https://digitalcommons.usm.maine.edu/our_paper_sac/73/ </a></p>
            </div>
          </div>
          <div style={{marginRight: '40px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/FirstParishChurchImg/7. first parish al anon meeting Our Paper Oct 1983 pg 12.webp"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Advertisement for Alcoholics Anonymous, Our Paper, October 1983, pg 12. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.
              <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/93/">https://digitalcommons.usm.maine.edu/our_paper_sac/93/</a></p>
            </div>
          </div>
          <div style={{marginRight: '40px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/FirstParishChurchImg/8. Romanovski & Phillips to appear in Porland & Bangor Our Paper Dec 1983 p1.webp"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Romanovski and Phillips advertisement, Our Paper, December 1983, pg 1. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
              <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/91/">https://digitalcommons.usm.maine.edu/our_paper_sac/91/</a></p>
            </div>
          </div>
          </div>
          <h2 className="text-4xl font-bold text-center mb-10 mt-20 text-[#E2D6AF]">The church and civil rights struggles of the 1990s: </h2>
          <p className="text-lg  text-gray-800">
          During the 1990s, the church continued to publicly support Maine&quot;s LGBTQ community at a time when civil rights laws were being challenged by religious conservatives organized as the Maine Christian Civic League. Just days before a 1998 referendum on whether to repeal basic civil rights for the gay community, the Rev. Frances Buckmaster of First Parish gave a sermon, “One Love," on the opportunity to “vote against hate and discrimination and for loving all our neighbors as ourselves."  Yet despite such outspoken allies, Maine voters, in the words of the New York Times, “chose to make their state the first in the nation to repeal its law protecting gay men and lesbians from discrimination." Another 7 years of struggle were then required to reclaim those rights in 2005.
          </p>
          <h2 className="text-4xl font-bold text-center mb-10 mt-20 text-[#E2D6AF]">Sources </h2>
          <p className="text-lg  text-gray-800">
          LG MS 038 Barry Peabody Papers, Series 1.5, Box 6, F192, Sermon First Parish, 1998. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <br/><br/>

          Berger, F. (1984, August).  Community reacts to Bangor murder.  Our Paper, pp. 1, 8.  LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.  <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/111/">https://digitalcommons.usm.maine.edu/our_paper_sac/111/</a> <br/><br/>

          Goldberg, C. (1998, February 12).  Maine voters repeal a law on gay rights.  New York Times, p. 1. <a href="https://www.nytimes.com/1998/02/12/us/maine-voters-repeal-a-law-on-gay-rights.html ">https://www.nytimes.com/1998/02/12/us/maine-voters-repeal-a-law-on-gay-rights.html </a><br/><br/>

          Keyes, B. (1984, July 14). Participants in gay rally ask equality.  Portland Press Herald, p. 13. <br/><br/>

          Smith, T.  Portland Pride Day, June 6, 1987 (1987, July).  Our Paper, p. 4.  LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/50/  ">https://digitalcommons.usm.maine.edu/our_paper_sac/50/  </a><br/><br/>

          Article: Unitarian Universalists affirm gay/lesbian unions [Article].  (1984, August).  Our Paper,    p. 9.  LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href=" https://digitalcommons.usm.maine.edu/our_paper_sac/111/"> https://digitalcommons.usm.maine.edu/our_paper_sac/111/  </a>
          </p>
        </div>
        </div>
        
        
</main>
  );
};

export default FirstParishChurch;