import Image from 'next/image';
import Navbar from '../components/Navbar'

const FirstParishChurch = () => {
  return (
    <main >
    <Navbar />
    <div className="relative bg-white">
      {/* Image Section */}
      <div className="relative h-screen overflow-hidden">
        <Image
          src="/images/sites/FirstParishChurchImg/FirstParish1.jpg"
          alt="First Parish Church"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="z-0"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center text-white p-6">
          <h2 className="text-6xl font-bold mb-8 text-[#1C5C2D]">First Parish Church</h2>
          <p className="text-lg text-[#1C5C2D] font-bold">425 Congress St.</p>
        </div>
      </div>

      {/* Additional website information */}
      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <p className="text-lg text-gray-800">
          The First Parish Church in Portland was established in 1674. Its current building at 425 Congress Street dates to 1826 making it the oldest church structure in the city.
          <br/><br/>
          Unitarian Universalist churches like First Parish have a long tradition of preaching love, community, and compassion including for LGBTQ+ people. The Unitarian Universalist Church was one of the first religious groups in the US to formally support the rights of homosexuals. In 1970, the Church’s international General Assembly passed a resolution opposing “intolerance against homosexuals and bisexuals.”
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
          <Image
            src="/images/sites/FirstParishChurchImg/FirstParish1.jpg"
            width={300}
            height={300}
            objectPosition='center'
          />
         <div style={{ width: '300px', fontSize: '8px' }}>
          <p>Front of the First Parish Church, located at 425 Congress Street in Portland, Maine, United States. Built in 1825, it is listed on the National Register of Historic Places. Allen L. Hubbard, 27 April 27, 1936. Library of Congress, Prints and Photograph Division HABS: ME,3-PORT,3-7 Public domain, via Wikimedia Commons</p>
        </div>
        </div>
        <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
          <Image
            src="/images/sites/FirstParishChurchImg/2.UUC1970Gen.Assemblymintesp170&171HarvardSquareLibrary.png"
            width={250}
            height={300}
            objectPosition='center'
          />
         <div style={{ width: '300px', fontSize: '8px' }}>
          <p>Discrimination against homosexuals and bisexuals” in Summary of Actions taken at the Ninth Annual UUA General Assembly, June 29-July 4, 1970 Seattle, Washington. Pg 170-171. Harvard Square Library. https://www.harvardsquarelibrary.org/general-assembly-minutes/
</p>
        </div>
        </div>
      </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#E2D6AF]">Charlie Howard Memorial and March </h2>
        <p className="text-lg text-gray-800">
          The local church played a role in the response to a brutal hate crime in Maine in the 1980s, when a 23-year-old gay man, Charlie Howard, was murdered two hours north of Portland in a homophobic attack.  On the night of July 7th, 1984, Howard and his boyfriend Roy Ogden were out at night in the city of Bangor where they lived.
          <br/><br/>
          Charlie was a vibrant, out-gay man, at a time and in a place where that was not only rare, but dangerous. Charlie and Roy were confronted by three teenage boys who shouted homophobic slurs and assaulted them. They eventually threw Charlie over the State Street Bridge - which the boys referred to as the "Chuckahomo Bridge" - ignoring his frantic pleas that he couldn’t swim. Charlie drowned.<br/><br/>
          Memorial services and gatherings were immediately organized by the gay community in the cities of Bangor, Portland, and Lewiston. In Portland, 450 people came together here at the First Parish Church. The evening’s memorial began with a reading of a Bangor police department affidavit with details of the murder. Then, following a brief service by the UU’s Rev. Richard Hasty, four prominent members of the queer community spoke. In the face of victim-blaming news stories about the murder with headlines like “Homosexuality Called Motive” [for attack], one of the speakers, Dale McCormick reminded the crowd “Homosexuality is not a motive. Hatred and bigotry is.”<br/><br/>
          As those gathered in the church prepared to exit, they were informed that a group of Bible-wielding hecklers were gathered outside, including a man who explained ‘I’m trying to tell these people, it’s wrong to be a fag.’”
          <br/><br/>
          As if in response, those assembled began marching down Congress Street, followed by the bigots, who, in turn, were tailed by the Portland Police Department. One participant, Fred Berger, reported that “as we realized our numbers, we became bolder, cheering, shouting, and singing.” For many, that march represented Portland’s first Pride.
          <br/><br/>
          The murder of Charlie Howard galvanized Maine's queer communities and would lead to the creation of some of the first state-wide gay and lesbian organizations. Portland's  First Parish Church continued to serve as a critical ally.
          <br/><br/>
          During the 1980s, as AIDS became a central concern, the Portland church provided meeting space for the Gay Health Action Committee and the AIDS Hotline. It also hosted facilitated support groups, gay and lesbian focused AA meetings, and benefit events for AIDS organizations and groups like the Maine Gay Men’s Chorus.
        </p>
        <h2 className="text-4xl font-bold text-center mb-10 text-[#E2D6AF]">Photos</h2>

        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/FirstParishChurchImg/3. Charlie howard memorial Our Paper Aug 1984 p1.PNG"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '8px' }}>
              <p>Charlie Howard memorial, Our Paper, August 1984, pg 1. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/111/">https://digitalcommons.usm.maine.edu/our_paper_sac/111/</a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/FirstParishChurchImg/4. Dale McCormick speaking at CH memorial in 1st Parish Our Paper Aug 1984 p4.PNG"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '8px' }}>
              <p>Dale McCormick speaks at Charlie Howard's memorial service, Our Paper, August 1984, pg 4. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/111/">https://digitalcommons.usm.maine.edu/our_paper_sac/111/</a></p>
            </div>
          </div>
          <div style={{ textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/FirstParishChurchImg/5. AIDS & the responsible pulpit a sermon by rev richard hasty Our Paper Aug 1987 p7.PNG"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '8px' }}>
              <p>AIDS & the Responsible Pulpit: A Sermon by Rev. Richard Hasty, Our Paper, August 1987, pg 7. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/49/
">https://digitalcommons.usm.maine.edu/our_paper_sac/49/
</a></p>
            </div>
          </div>
        </div>
        </div>
        </div>
</main>
  );
};

export default FirstParishChurch;