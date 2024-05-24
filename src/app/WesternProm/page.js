import Image from 'next/image';
import Navbar from '../components/Navbar'

const FirstParishChurch = () => {
  return (
    <main >
    <Navbar />
    <div className="relative bg-white">
       <div className="relative h-screen overflow-hidden">
        <Image
          src="/images/sites/Western/1 ICON PIC No cruising.jpg"
          alt="First Parish Church"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="z-0"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center text-white p-6">
        <div className="bg-white bg-opacity-75 p-4 rounded">
          <h2 className="text-6xl font-bold mb-8 text-[#1C5C2D]">Western Prom</h2>
          <p className="text-lg text-[#1C5C2D] font-bold">242 Western Prom.</p>
        </div>
        </div>
      </div>

      {/* Additional website information */}
      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <p className="text-lg text-gray-800">
        Welcome to the Western Promenade in Portland. If you look beyond the stately old homes and the views of South Portland, by the statue of Thomas Brackett Reed, you may still see signs notifying you of fines associated with &quot;cruising.”  For almost 30 years, these signs have greeted motorists and pedestrians, a policy the Portland City Council has suggested it may finally revisit in 2024.
        <br/><br/>
        Cruising, the act of driving or walking through an area looking for anonymous sexual encounters, negotiated with mostly non-verbal cues, has been a long tradition in gay male culture, though the practice is not exclusive to that community. Its practice in the United States arose in part out of the need for anonymity before homosexuality became legal. Cruising allowed people to meet each other without exposing their names or where they lived, thus protecting themselves from blackmail. 
        <br/><br/>
        Cruising still carried an element of danger. Participants were often attacked or robbed by assailants who correctly assumed they would not report the incident to the police. In 1976, the first queer news publication in Maine, the Maine Gay Task Force Newsletter, warned readers about an uptick in homophobic gangs in one of the cruising parks, including a man who carried a machete.
        <br/><br/>
        For women, public sex was challenging. Because of a lack of cruising areas for lesbians in Maine, those interested in anonymous sex instead traveled to larger cities for sex parties organized by groups like the New York Lesbian Sex Mafia. 
        </p>
      </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <h2 className="text-4xl font-bold text-center mb-10  text-[#E2D6AF]">Photos</h2>

        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/Western/1 ICON PIC No cruising.jpg"
              width={200}
              height={200}
              objectFit='cover'
            />
            <div style={{ width: '200px', fontSize: '10px' }}>
              <p>No Cruising sign from the Western Prom, private collection.</p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/Western/2 Lesbian Sex Mafia Membership Card, Private Collection.jpeg"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Lesbian Sex Mafia membership card - private collection.</p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/Western/3 Public Sex is Good Sex Portland Pride June 1998.jpeg"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>"Public Sex is Good Sex: stop police harassment of gays" Portland Pride March 1998, private collection.</p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/Western/4 Fine Arts Cinema 1988 PPH negatives.png"
              width={250}
              height={250}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>"Fine Arts Cinema, 1988" (1988). Businesses & Buildings - Portland Press Herald Still Film Negatives. 445. Portland Public Library Special Collections & Archives.  <a href="https://digitalcommons.portlandlibrary.com/pphnegs_images_business/445"> https://digitalcommons.portlandlibrary.com/pphnegs_images_business/445 </a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/Western/5 MaverickAshley L on Jun 21 2022Treasure Chest yelp.jpg"
              width={250}
              height={250}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>Sign on the outside of the Treasure Chest, by MaverickAshley L. Jun 21, 2022 
              <a href="https://www.yelp.com/biz_photos/treasure-chest-portland?select=1rZyqdsqQ5bmql0er-Ks0w"> https://www.yelp.com/biz_photos/treasure-chest-portland?select=1rZyqdsqQ5bmql0er-Ks0w</a></p>
            </div>
          </div>
        </div>
    </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#E2D6AF]">Cruising in Portland</h2>
        <p className="text-lg text-gray-800">
        The oldest known cruising ground for men in Portland was Deering Oaks Park, about a 15 minute walk from here.  Since at least the 1960&quot;s, men, both those identified as straight and as gay, would cruise the park in cars and on foot looking for a hookup with another man. By the 1980s, the location was affectionately given the nickname “Pickle Park” by locals. Cruising in Deering Oaks was mostly ignored by the working class residents of the Parkside neighborhood in which it was located.  But this began to change as Parkside began to gentrify. The cruising scene, which had taken place at night and out of view of the general public, had also expanded into daytime hours. The new residents of Parkside complained to the City Council, and the police began to sweep the park. In the 1990s, the police upped the pressure by arresting people for indecent exposure, public sex and criminal trespass relating to a curfew ordinance. The queer community protested the fact that the sweeps and arrests targeted gay men. 
        </p>
       
        <h2 className="text-4xl font-bold text-center mb-10 text-[#E2D6AF]">Moving to the Western Prom</h2>
        <p className="text-lg text-gray-800">
        In 1993, the Portland City Council approved a ban on cars in most of Deering Oaks Park. This helped shift cruising to the Western Prom. By the end of 1993, affluent residents in the Western Prom neighborhood began to complain about constantly circling cars, of being solicited while in the park, and of men having sex in cars parked along the Prom and the abutting Western Cemetery. According to one West End resident: "It got totally out of proportion. We went to the police and said, `It's your job to give us peace and quiet.'"    <br/><br/>
        According to the Police Chief at the time, Michael Chitwood, "Once again, these guys are cruising and destroying the quality of life out there. For a while you think everything is quiet, and then all of a sudden the neighborhood is up in arms."  In response,  Chitwood urged people living in the West End to record the license plates of cars cruising in the area. He also sent out undercover police officers to do the same. 50 cease and desist letters were sent to car owners based on neighbor&quot;s reports in 1993 alone. The Maine Civil Liberties Union objected to the practice, arguing that letters might be sent to people who weren't even involved in cruising, and who were not breaking the law.  According to the organization, "The police are contacting residents who are guilty of nothing other than driving around in their cars.”   <br/><br/>
        The queer community, which was directly targeted by the law, organized to “police the policing” of the Prom. As Mike Blanchard explains in his oral history, “The Western Prom was notorious for cruising at the time, and there was a lot of negative press about those homosexuals up on the Western Prom having sex in the woods. But that's not the whole story. Because the other thing that was happening was the police were rolling through there and literally beating guys. Not even asking for ID. And young men would roll through and assault gay men. And those guys couldn't say anything about it because to say anything was an act of coming out. So there was a collective of us, about ten people, who just started walking up and down on the Western Prom on random nights. And when the cops pulled us over asking &quot;What are you doing?&quot; We say, &quot;We're walking.&quot; &quot;Well, you can&quot;t be here. You are obstructing justice.&quot; &quot;You can arrest us; we&quot;d love to make the papers right now. We saw you roust those two guys who were sitting on a bench just holding hands. What about that car over there with the straight couple? Are you going to go after them, too?&quot; What we were doing was protecting our brothers. That's the way that we looked at it. There was no one fucking protecting us. And so we put ourselves out on the front line, at risk of arrest and violence, to keep people safe.”
        <br/><br/>
        Cruising grounds were also important locations for HIV/AIDS outreach and information. In 1983, one outreach worker described his approach: “With a wide stride, I&quot;d walk over to the car and make eye contact with the driver. Usually, I&quot;d lean on the car and ask &quot;How you doin&quot;?&quot; Then I&quot;d say &quot;Can I give you a pamphlet?&quot; and on I&quot;d go with a little AIDS rap about risk reduction.”
        <br/><br/>
        The police crackdown on the Western Prom shifted the cruising scene again, this time indoors to the Fine Arts Cinema on Congress Street which showed both gay and straight porn films, and to Video Expo which sold adult videos, magazines, and sex toys, and had viewing booths. This indoor activity lasted until the winter of 1995 when police raided both the porn theater and the Expo, arresting men engaged in masturbation and consensual anonymous sex.  As one gay man observed, “I thought it was about protecting the neighborhood; I guess not. Look, It&quot;s just sex, man. It&quot;s always going to find an outlet. If they raid one place, it&quot;ll crop up some place else.”
        <br/><br/>
        Indeed, the crackdown indoors once again encouraged a return to outdoor cruising on the Western Prom in increased numbers. The Maine Civil Liberties Union argued that, instead of police enforcement, what was needed was public discussion and more understanding of the reality of public sex.
        <br/><br/>
        But in March of 1996, the Portland City Council, at the urging of the police and some West End residents, approved an anti-cruising ordinance. The signs you may still see on lamp posts were posted here, and in the Parkside neighborhood adjacent to Deering Oaks Park. The ordinance made it illegal to drive past the same location more than three times in two hours. Offenders received a $100 fine for the first offense and a $500 fine for the third. The new ordinance and fines helped push cruising back out of the Western Prom and Parkside neighborhoods, but not out of Portland.  Cruising simply shifted to the other side of the peninsula to the Eastern Prom and to Outer Congress Street. 
        <br/><br/>
        One man who marched in Portland Pride in 1998 carrying a sign that read “Public sex is good sex. Stop police harassment of gays” explained, “The plain fact is that anonymous sex is exciting to some people. So is observing other people engaging in sexual activity. In that sense, it&quot;s an act of community. It offers an opportunity to share in the joy of others released from shame and repression."  He noted that policing might not be the only or the best response to the practice: “Some people suggest park design that could accommodate publicly-recognized cruising areas, areas people could choose to visit or not. What a humane response that would be. I met with a very informed female police officer in New York about how they were dealing with the cruising in Central Park Rambles and she told me that her major complaint was men trampling the undergrowth when they went off the beaten-path areas to participate in consensual activity. That's a problem that wouldn&quot;t be hard to fix.”
        </p>
       
        <h2 className="text-4xl font-bold text-center mb-10 mt-20 text-[#E2D6AF]">Sources </h2>
          <p className="text-lg  text-gray-800">
          AP. (1993, December 17).  Libertarians decry effort to end gay &quot;cruising.&quot;  Bangor Daily News, p. B1.  Retrieved from  LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://library.umaine.edu/auth/EZproxy/test/authej.asp?url=https://search.proquest.com/newspapers/libertarians-decry-effort-end-gay-cruising/docview/413818541/se-2 <br/><br/>
            Bits: Warning: a homophobe with a gun is on the loose. (1975, October). Maine Gay Task Force Newsletter, p. 4. Retrieved from LGBTQ+ Collection, Jean Byer Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/megtf/9/ <br/><br/>
            Brushaber, S. (1984, July).  Meeting people.  Our Paper: Serving the Alternative Community, p. 4.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/our_paper_sac/112/ <br/><br/>
            Busby, C. (2024, July). Cruise control: in Portland, flirting while gay is still a crime. The Bollard,  p. 20-28. Retrieved from: https://thebollard.com/2024/03/05/cruise-control/ <br/><br/>
            Chapkis, W.  Interviews on public sex. March 28, 2024 and April 3, 2024. <br/><br/>
            Cook, D. (1996, February-March).  Section 17-5: If you cruise it, you could lose it.  Community Pride Reporter, pp. 1-2.LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections,  https://digitalcommons.usm.maine.edu/cpr/36/
            <br/><br/>
            Diamon, A. (1996, May 23). Cruising. Casco Bay Weekly, pp. 8-10.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections,  https://digitalcommons.portlandlibrary.com/cbw_1996/21/ <br/><br/>
            Elze. (1984, May).  Commitment to ourselves and our community.  Our Paper: Serving the Alternative Community, pp. 6-7, 9.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections,  https://digitalcommons.usm.maine.edu/our_paper_sac_86/ <br/><br/>
            Elze. (1988, February).  Fagbashing: one man&quot;s nightmare.  Our Paper: Serving the Alternative Community, p 14.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/our_paper_sac/46/
            <br/><br/>
            Elze. (1988, February).  Police seek clues to gay man&quot;s murder: officials appeal to gay community for help.  Our Paper: Serving the Alternative Community, pp. 1, 14.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity in Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/our_paper_sac/46/
            <br/><br/>
            Gautreau, P. (1985, March).  Crackdown in the Oaks.  Our Paper: Serving the Alternative Community, p. 1.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/our_paper_sac/79/ <br/><br/>
            Hurley, T, Ashley, W., Leo, S., Fortuna, S. & Johnsen, D. (1976, July).  Attack at Deering Oaks.  Maine Gay Task Force Newsletter, p. 45. Retrieved from  LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/megtf/16/ <br/><br/>
            Nickerson, A. [Letter to the editor]. (1990, December).  Our Paper: Serving the Alternative Community, p. 2.  LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/our_paper_sac/12/
            <br/><br/>
            Police arrest two men in crackdown on cruising. (1996, August 8).  Portland Press Herald, p. B1.   Retrieved from  LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://library.umaine.edu/auth/EZproxy/test/authej.asp?url=https://search.proquest.com/newspapers/police-arrest-two-men-crackdown-on-cruising/docview/276758802/se-2 <br/><br/>
            Portland Press Herald Staff.  (1996, August 8). Police arrest two men in crackdown on cruising. Portland Press Herald, p. B1.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://library.umaine.edu/auth/EZproxy/test/authej.asp?url=https://search.proquest.com/newspapers/police-arrest-two-men-crackdown-on-cruising/docview/27658802/se-2 <br/><br/>
            Rossetti, M. (1997, April).  West End or dead end?  Community Pride Reporter, p. 1.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/cpr/23/ <br/><br/>
            Shanahan, M. & Clendenning, A. (1995, November 28).  Western Prom “cruisers” get police letter.  Portland Press Herald, pp. 1B, 4B.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://library.umaine.edu/auth/EZproxy/test/authej.asp?url=https://search.proquest.com/newspapers/western-prom-cruisers-get-police-letter-civil/docview/276724332/se-2?accountid=8120
            <br/><br/>
            Shanahan, M., & Clendenning, A. (1997, March 16).  A moral crusade despite mixed results. Portland Press Herald, p. B1.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://library.umaine.edu/auth/EZproxy/test/authej.asp?url=https://search.proquest.com/newspapers/moral-crusade-despite-mixed-results-chief-michael/docview/276788191/se-2
            <br/><br/>
            Tewksbury, R. (1996). Cruising for sex in public places: The structure and language of men&quot;s hidden, erotic worlds.  Deviant Behavior, 17(1), pp. 1-19. Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://doi-org.wv-o-ursus-proxy01.ursus.maine.edu/10.1080/01639625.1996.9968012
            <br/><br/>
            Tewksbury, R. (2008, October 11).  Finding erotic oases: Locating the sites of men&quot;s same-sex anonymous sexual encounters.  Journal of Homosexuality, 55(1), 1-19.  Retrieved from https://doi-org.wv-o-ursus-proxy01.ursus.maine.edu/10.1080/00918360802129253 <br/><br/>

            Vegh, S. (1996, January 11).  City panel seeks ban on &quot;cruising&quot; for sex partners.  Portland Press Herald, p. A1.  Retrieved from   LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://library.umaine.edu/auth/EZproxy/test/authej.asp?url=https://search.proquest.com/newspapers/city-panel-seeks-ban-on-cruising-sex-partners/docview/276693733/se-2 <br/><br/>
            Vegh, S. (1999, July 15).  Police target E. Prom cruising.  Portland Press Herald, p. 1B.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://library.umaine.edu/auth/EZproxy/test/authej.asp?url=https://search.proquest.com/newspapers/police-target-e-prom-cruising-they-hope-no-signs/docview/276929290/se-2 <br/><br/>
            Wert, M. (2022, November 23).  Blanchard, Mike.  Querying the Past: LGBTQ Oral History Project Collection.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/querying_ohproject/86/
          </p>
        </div>
        </div>  
</main>
  );
};

export default FirstParishChurch;