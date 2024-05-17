import Image from 'next/image';
import Navbar from '../components/Navbar'

const FirstParishChurch = () => {
  return (
    <main >
    <Navbar />
    <div className="relative bg-white">
      <div className="relative h-screen overflow-hidden">
        <Image
          src="/images/sites/State/2 ACT UP portland May 1993 A Dragon.png"
          alt="First Parish Church"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="z-0"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center text-white p-6">
          <h2 className="text-6xl font-bold mb-8 text-[#1C5C2D]">State Theatre Building</h2>
          <p className="text-lg text-[#1C5C2D] font-bold">142 High Street.</p>
        </div>
      </div>
     
      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#E2D6AF]">The State Theatre </h2>
        <p className="text-lg text-gray-800">
          The State Theatre is one of Portland's most iconic landmarks. While the bold marquee and eye-catching event posters are certainly striking, the building itself is full of stories. It also has a much deeper connection to the city's LGBTQ+ community than one might glimpse from the outside.
          <br/><br/>
        The State Theatre first opened its doors in November 1929. theater-goers were delighted by the ornate gold carvings, sumptuous velvet drapery, and murals that adorned the lobby and auditorium of the Herbert W. Rhodes-designed building. In the beginning, the State Theatre was a multi-function venue that hosted movies, music, and theatrical performances. For the first few decades of the 20th century, the State Theatre welcomed folks of all ages. Sadly, The State Theatre saw a sharp decline in popularity throughout the 1960's due largely to the growing popularity of television.
        <br/><br/>
        A decade later, following a change of ownership, and in an attempt to prevent the theater from being demolished, the building was leased to a chain of adult theaters called the American Theater Company. It served as a theater for both gay and straight porn during a period in which adult cinemas were becoming more common in cities all over the US.
        <br/><br/>
        In 1990, after the building fell into disrepair, the State was purchased by Nick and Lola Kampf who made extensive renovations and re-opened the Theatre as a performance venue in 1993. Bowery Presents now operates the State Theatre and features a year-round calendar of often sold-out events including live music, touring drag shows, comedy, and local film festivals. 
        <br/><br/>
        This big office building above the State Theatre holds a lot of LGBTQ+ history. The upper floors of 142 High Street have been home to queer-related administrative offices, mental health practitioners, businesses, and studios important to the LGBTQ+ community. Here we will highlight the work done by one of the two AIDS organizations active in the late 1980s and early 1990s: ACT UP Portland.

        </p>

        <h2 className="text-4xl font-bold text-center mb-10 mt-10 text-[#E2D6AF]">Photos</h2>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/State/1 State theater Feb 1979 Portland Maine History 1786 to present FB post may 16 2012.jpg"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Marquee of the State Theater from February 1979 after it had become a porn theater. Portland Maine History 1786 to Present (May 16, 2012). State Theatre, February 1979. I hadn't realized it was modified into two screens...did they enclose the balcony to make. Facebook.   <a href="https://www.facebook.com/photo?fbid=2645966392134437&set=a.358731687524597"> https://www.facebook.com/photo?fbid=2645966392134437&set=a.358731687524597</a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/State/6 theater of State Theater bld ca 1930 from Maine Hist Society 12902.jpg"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p> The inside of the State Theater building in the 1930s. Maine Historical Society. Hallway, State Theater, Portland, ca. 1930 [Photographic print]. (Item 12904). Maine Historical Society, Portland, Maine.</p>
            </div>
          </div>
          <div style={{  marginRight: '20px',textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/State/7 Hallway of State theater blg ca 1930 from Maine Hist Society.jpg"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>The stage inside the State Theater building in the 1930s. Maine Historical Society. State Theater, Portland, ca. 1930 [Photographic print]. (Item 12902). Maine Historical Society, Portland, Maine.</p>
            </div>
          </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-10 mt-20 text-[#E2D6AF]">ACT UP Portland</h2>
          <p className="text-lg  text-gray-800">
          The AIDS Coalition to Unleash Power or ACT UP was first formed in New York City in 1987;  soon chapters of the militant action group spread across the country. This included Maine ACT UP, which formed in 1988. In the mid-1990s, a Portland branch of the AIDS education and direct-action group opened a small office on the second floor of the State Theatre Building.  
          </p>

          
        <h2 className="text-4xl font-bold text-center mb-10 mt-10 text-[#E2D6AF]">Photos</h2>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/State/2 ACT UP portland May 1993 A Dragon.png"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>ACT UP Portland members march in a pre-Pride rally culminating with a die-in on the steps of Portland’s City Hall, May 1993. By Annette Dragon, "Act Up Fight Back Take Pictures: Ten Years of Queer Activism in Maine" Annette Dragon Photographs. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href="https://digitalcommons.usm.maine.edu/annette_dragon/60/ "> https://digitalcommons.usm.maine.edu/annette_dragon/60/ </a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/State/3 ACT UP Protest Univ healthcare June 1993 A Dragon (1).png"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>ACT UP protest demanding universal health care coverage. Protesters holding signs of fists that say "Health Care Now Bill," and "Single Payer- NOW" June 1993. By Annette Dragon, "Act Up Fight Back Take Pictures: Ten Years of Queer Activism in Maine" Annette Dragon Photographs. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href="https://digitalcommons.usm.maine.edu/annette_dragon/66/ "> https://digitalcommons.usm.maine.edu/annette_dragon/66/ </a></p>
            </div>
          </div>
          <div style={{  marginRight: '20px',textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/State/4 Protesters and signs May 6 1993 ADragon.png"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Protesters hold a sign that reads: "We're queer. Don't Fuck with us. Rights Now! ACT UP" on the Capitol steps at a rally in Augusta to protest Governor McKernan’s veto of the state queer-inclusive non-discrimination bill. Signs in the background read: "We shall be free" and "McKernan does discriminate" May 6, 1993. By Annette Dragon, "Act Up Fight Back Take Pictures: Ten Years of Queer Activism in Maine" Annette Dragon Photographs. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href="https://digitalcommons.usm.maine.edu/annette_dragon/55/ "> https://digitalcommons.usm.maine.edu/annette_dragon/55/ </a>
</p>
            </div>
          </div>
          </div>
        
          <p className="text-lg  text-gray-800 mt-10">
          According to an oral history with local activist Erica Rand, “When I moved to Maine in the fall of 1990, I was surprised to discover that ACT UP was big enough that there had already been a political split. So there was ACT UP Maine and then ACT-UP Portland, and I was in ACT UP Portland. And within ACT UP Portland there was The Pissed Off Dyke Cell.  A few years later, we got a grant from the Haymarket Foundation so we could afford to rent a small office space in the State Theatre building which was kind of amazing. It was a good place to meet and do a lot of the creative stuff like making zines and posters. We were all about being visible at a time when there was a lot of closetedness and fear of being out. We didn't take shit that some other groups were willing to accept; like there was this idea that the way to get change was to be quiet and polite and say we're just like everybody else. We were not quiet. The Pissed Off Dyke Cell also joined to do some radical health care activism with some separatist dykes who did not want to be ACT UP members. So we became the Pissed Off Dyke Cell/Women's Health Action Crew (pronounced POD Cell/WHAC). We did a lot of wheatpasting and experimented, unsuccessfully, with trying to produce some safer-sex porn. A lot of us were cultural creators, including photographers like Annette Dragon and Ana R. Kissed. A lot of the people doing work for ACT UP were dykes.” <br/><br/>

        ACT UP hosted several youth-oriented groups with Portland students including FATE: Fight AIDS Transform Education and TRAP: Teen Risk Awareness Portland. FATE produced the  'zine LEO: Latex Everywhere Or Else focused on safer sex and safer drug use. The group’s mission was to provide young people with access to condoms and sexual health education that went beyond the rigid abstinence-only curriculum offered in many 1990s classrooms. FATE members were known for their protests where they handed out condoms, gloves and dental dams, and rallied for the free distribution of these items at area high schools to help prevent the spread of HIV/AIDS, STIs, and unplanned pregnancies. Affiliated student groups existed in other Southern Maine communities as well, such as SLAM: Scarborough for Latex and Maturity and KISS: Kennebunkport Individuals for Safer Sexuality. According to ACT UP Portland member Erica Rand, “The zines all had our ACT UP phone number in them and said ‘would you like to do organizing in your high school? Call this number.’ So we helped teenagers do their own organizing and activism.” <br/><br/>

        ACT UP also organized high visibility mass protests in various locations in Southern Maine. As Mike Blanchard reports, “ACT UP was a necessary by-product of the genocide that was happening during the AIDS crisis. ACT UP Portland was doing some things that I wanted to be a part of. They were doing die-ins in front of City Hall, they were doing street theater, and I started going to some ACT UP meetings. Folks were running out of patience. The AIDS Project would have someone with a caseload of 45 on Friday and come in on Monday and have a caseload of only 30; I mean people were dying so quickly, so ruthlessly, and being mistreated on the way out. It was just an awful, awful time.” <br/><br/>  </p>

          <h2 className="text-4xl font-bold text-center mb-10 mt-10 text-[#E2D6AF]">Sources </h2>
          <p className="text-lg  text-gray-800">
          Associated Press, “AIDS Protesters Block Traffic.” Portland Press Herald. January 24, 1991. Page 1D.

            Demary, Danella, "Rand, Erica" (2017). Querying the Past: LGBTQ Maine Oral History Project Collection. 25. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
            https://digitalcommons.usm.maine.edu/querying_ohproject/25<br/><br/>


            Karasopoulos, Peter, “ACT UP and the Politics of AIDS.” Casco Bay Weekly, February 14, 1991. Page 1.  <br/><br/>

            “Maine Act Out, Act Up, Act Now, Just Act” (August, 1988) Our Paper, p. 9. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
            https://digitalcommons.usm.maine.edu/our_paper_sac/40<br/><br/>
            
            Oliveri, Sofia, "Rand, Erica - 2022 Follow Up" (2022). Querying the Past: LGBTQ Maine Oral History Project Collection. 96. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
            https://digitalcommons.usm.maine.edu/querying_ohproject/96<br/><br/>


            Wert, Micaiah, "Blanchard, Mike" (2022). Querying the Past: LGBTQ Maine Oral History Project Collection. 86. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
            https://digitalcommons.usm.maine.edu/querying_ohproject/86<br/><br/>


            Cimmel, Eve. News on TAP, vol. 7 issue 4, June 1995. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/news_on_tap/1<br/><br/>


            Wert, Micaiah, "Shields, Deborah" (2023). Querying the Past: LGBTQ Maine Oral History Project Collection. 116. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
            https://digitalcommons.usm.maine.edu/querying_ohproject/116  <br/><br/>
          </p>
        </div>
        </div>
        
        
</main>
  );
};

export default FirstParishChurch;