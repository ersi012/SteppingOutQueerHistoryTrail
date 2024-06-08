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
          src="/images/sites/EE/13 Exterior of the Equality Community Center at 15 Casco St. Portland, Maine by Megan MacGregor,  CC BY 4.0 http___creativecommons.org_licenses_by_4.0_11zon.webp"
          alt="First Parish Church"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="z-0"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center text-white p-6">
        <div className="bg-white bg-opacity-75 p-4 rounded">
          <h2 className="text-6xl font-bold mb-8 text-[#1C5C2D]">Equality Community Center </h2>
          <p className="text-lg text-[#1C5C2D] font-bold">415 Casco St.</p>
        </div>
        </div>
      </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <audio controls>
          <source src="./audio/EqualityCommunityCenterV2_mixdown.mp3" type="audio/mpeg" />
        </audio>
        <p className="text-lg text-gray-800">
          Portland has long had queer social spaces including bars, a bookstore, and a card shop, that all served as gathering places for LGBTQ+ people. But it wasn't until recently that the city had a designated community center. As local philanthropist and realtor Ed Gardner explains in his oral history, “Right after we won marriage equality, Betsy Smith sat down in my house and I told her that one thing I'd like to do for this community is to have a place where people can go and feel connected and be able to be in each other's company with love and support. She said, 'well, that's so funny. Rich Waitzkin and I have thought the same thing. Why don't we all sit down and have coffee together.' So we did. I had just bought a building with some vacant space at 511 Congress St. and I said, 'I'll create a 3000 square foot office space for six LGBT tenants and we'll see if it works.' We brought in Equality Maine, Maine Transnet, SAGE, GLSEN, PFLAG, and Pride Portland and it worked beautifully."  <br/><br/>
          In 2021, what would become known as the Equality Community Center moved into a building of their own around the corner at 15 Casco St.  As Ed Gardner reports: “There was an old bank building next door coming up for sale. So we quickly raised quite a bit of money to buy that building. And I owned a parking lot right next to that that I've now donated. That's where we are going to build a 54-unit affordable housing building supporting people 55 and older who are HIV positive, people with disabilities, the LGBT community."   <br/><br/>
          The Center celebrated its opening in October 2022 with a block party featuring music, performances, speeches, and food. Because a larger space was now available, many more organizations were able to join the initial groups housed in, or supported by, the Center including the Maine Gay Men's Chorus, Dyke March Maine, Rainbow Arts Collective, and Sober Sundays AA Support Group. The tenants of the Center now include not only queer organizations but other social justice groups such as Cross-Cultural Community Services, Democracy Maine, Khmer Maine, Sexual Assault Response Services, and Through These Doors Domestic Violence Prevention.   <br/><br/>
          When asked why Gardner so strongly supported the creation of the Center, he explained, “What's so special about Portland is the community and the spirit that this city has. It welcomed me with open arms. It's time to pay it back with this Community Center."
        </p>
        <h2 className="text-4xl font-bold text-center mb-10 text-[#E2D6AF]"> EqualityMaine</h2>
        <audio controls>
          <source src="./audio/EqualityMaineV2_mixdown.mp3" type="audio/mpeg" />
        </audio>
        <p className="text-lg text-gray-800">
        Since at least the 1970s, queer people in Maine have been coming together to create community and social change through local groups like the Hancock County Gays, the Abenaki Experimental College Group, Wilde-Stein, Gay Support and Action, the Gay Rights Organization, and Northern Lambda Nord. But the movement took a big step forward in the state in 1984 with the creation of the first state-wide organization, the Maine Lesbian Gay Political Alliance or MLGPA - later renamed EqualityMaine.<br/><br/>
        The MLGPA was created in part as a response to the murder of Charlie Howard, a 23-year-old gay man killed in a hate crime in Bangor, Maine. While Howard's murder was a particularly brutal example of anti-gay hate, many members of Maine's queer community had experienced discrimination, harassment, or violence. After the murder, a group of two dozen individuals including Dale McCormick, Fred Berger, Betsy Sweet, Marty Sabol, Robin Lambert, Diane Elze, Harry Gordon, Barb Wood, John Preston, Barry Manson, and Frank Brooks, came together to form the statewide educational and political action group.  The MLGPA started with $147 dollars and a spiral notebook with a set of handwritten founding documents.<br/><br/>
        By the following year, with Dale McCormick serving as Chairperson, the MLGPA partnered with the Maine Lesbian/Gay Anti-Violence Project and the National Gay Task Force, to circulate a survey about violence and discrimination. The survey revealed that 67% of the respondents had concealed their sexual orientation in order to avoid discrimination on the job; almost 30% reported being fired or denied promotions because their employers had learned they were gay. Almost one-quarter had been denied service in a hotel or restaurant, and more than half had been victims of homophobic violence.<br/><br/>
        After a decade of work, the organization secured an amendment to the Maine Civil Rights Act of 1993 that included in the definition of hate crimes attacks on queer people. Because LGBTQ+ individuals still had no civil rights protections against discrimination, the group also led a renewed effort to secure civil rights for our community. It took 11 attempts over 28 years to finally pass protection in 2004 against discrimination based on sexuality and gender identity in employment, housing, education, credit, and public accommodations.<br/><br/>
        Under its new name of EqualityMaine, the group continued its fight for comprehensive queer rights. In 2012, together with their coalition partners, EqualityMaine helped achieve marriage equality with Maine becoming the first state to do so by popular vote. In 2016, together with MaineTransNet, the ACLU, and Consumers for Affordable Health Care, EqualityMaine helped to make Portland the first city in the state to remove exclusions for trans health care from the city's health plan. And, in 2019, the organization helped lead the successful effort to pass legislation banning conversion therapy by prohibiting therapists and other licensed professionals from attempting to change the sexual orientation or gender identity of minors. Maine was the last state in New England to do so.<br/><br/>
        Betsy Smith who served as the Executive Director of EqualityMaine for 11 years, observes, “From 1984 on, it was a constant struggle. We learned as a community how to organize to win the protections and create the laws we needed. We had to bring legislators and the public along on the journey. And we kept having to brush ourselves off and start again with massive public education campaigns. Our people, our community, put their lives out there. For marriage equality, we had 250,000 one-on-one conversations with Maine voters. And the truth is, it's not over. We're going to have to continue to have hard conversations to change policies in this country until we get to a point where we don't have oppression built into systems. We have to organize to change hearts and minds."
        </p>
      </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <h2 className="text-4xl font-bold text-center mb-10  text-[#E2D6AF]">Photos</h2>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/1 MLGPA Stein-Vine Nov 1984 pg 1.webp"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p> MLGPA in Stein-vine. (November 1984). Page 1. <a href=" https://digitalcommons.usm.maine.edu/stein_vine/1 "> https://digitalcommons.usm.maine.edu/stein_vine/1 </a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/2 MLGPA at first portand pride PPL Sp Coll and archives1987 TL 06_07 33_11zon.jpg"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p> MLGPA marching in the first Portland Pride Parade "Parade Through Portland Expresses Gay Pride," 1987" (1987). Events - Portland Press Herald Still Film Negatives. 3. Portland Public Library Special Collections & Archives. <a href="https://digitalcommons.portlandlibrary.com/pphnegs_images_events/3"> https://digitalcommons.portlandlibrary.com/pphnegs_images_events/3</a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/3 MLGPA at 1987 Nat march on Wash DC One potato two potato Oct 1987 p1.webp"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p> MLGPA at the 1987 National March for Lesbian and Gay Rights in Washington D.C. Photo by Diane Elze in One Potato, Two Potato. October 1987. Page 1 <a href="https://digitalcommons.usm.maine.edu/mlgpa/9
              ">https://digitalcommons.usm.maine.edu/mlgpa/9
              </a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/4 Baldacci LD 1196 Equality News Summer 2005 p1.webp"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Governor Baldacci signs LD 1196 into law on March 31, 2005, which adds “sexual orientation or gender identity and expression"to Maine's Civil Rights Act. Equality News, Summer 2005. Page 1. 
              <a href="  https://digitalcommons.usm.maine.edu/equality_news/5 ">  https://digitalcommons.usm.maine.edu/equality_news/5 </a></p>
            </div>
          </div>
          </div>
          <h2 className="text-4xl font-bold text-center mb-10 mt-20 text-[#E2D6AF]">Maine Gay Men's Chorus</h2>
          <audio controls>
            <source src="./audio/MaineGayMensChorusV2_mixdown.mp3" type="audio/mpeg" />
          </audio>
          <p className="text-lg  text-gray-800">
          In the Spring of 1992, an Assistant Professor of Music at the University of Southern Maine, Bruce Fithian, attended a concert given by the Boston Gay Men's Chorus at First Parish Church in Portland. Fithian, an accomplished tenor soloist and gay man, was profoundly moved by the experience of watching “proud men singing beautiful music."He committed himself to creating a similar chorus in Maine, enlisting the help of Glenn Anderson and Jeff Caron. The group chose the name the Maine Gay Men's Chorus, but, in order to allow community members to discreetly donate, the legal entity was called Pine Tree Performing Arts.<br/><br/>
          Having no money but needing a place to audition, rehearse, and perform, they approached the First Parish Church on Congress Street which agreed to give them free space. The chorus accepted any man, whether gay or a straight ally, who could sing. Following the example of the Boston Chorus, Fithian required all members to memorize the music in order to better engage with the audience.<br/><br/>
          Their first concert took place in December of 1992 to a packed house. The chorus processed from the church recreation hall to the sanctuary, singing in Latin. Robert Diamante, who had been taking lessons from Bruce Fithian at University of Southern Maine and who joined the chorus that fall, recalls “After our first concert, I remember we all just cried. We just sang our little hearts out, our little gay hearts out. It was really powerful."<br/><br/>
          Accompanied by pianist Delmar Small, the group performed a wide range of music from opera to choral and pop hits such as “It's Raining Men."Over time, the chorus would also ask composers to create original works for them to premiere. The Maine Gay Men's Chorus developed dance moves -“chorus-ography"-  and introduced camp elements into some of their pieces. The Chorus traveled across Maine and across the country performing with Holly Near, The Flirtations, Judy Collins, and the Boston Gay Men's Chorus.<br/><br/>
          While music was their primary interest, it was impossible to avoid the political battles taking place in the state of Maine during the 1980s and 1990s including civil rights battles and the AIDS epidemic. Anti-gay organizations like Carolyn Cosby's Concerned Maine Families spread negative messages about queer people, in particular gay men. The Maine Gay Men's Chorus challenged that depiction. As one member said “We gave face to the gay community. As much as we were a beautiful singing group, we also made a political difference."<br/><br/>
          The Chorus played a transformative role in a time in which it was still legal to fire somebody from their job or evict them from their home if it became known that they were queer. The risks the performers took were real as one of the founding members makes clear: “Back in the early 1990s, a picture of our group appeared in the paper. I was a computer programmer for an insurance company at the time and they were in the process of firing me after they saw the picture. I left before that could happen."<br/><br/>
          Despite the personal risks, making music together - as gay men - was a powerful experience for those involved. It built community and, for some of them, it also played an important role in the coming out process, as one member recounted: “I really wasn't out at that point but joining the chorus was a great impetus. I really wanted my parents to come see one of our concerts but I knew that if I invited them they would ask questions about why I was singing with those people. But it was actually a great thing where I could say 'mom and dad, I'm gay and come to this concert and meet great gay people who are wonderful and talented.' They came to every concert after that and they loved it and they loved everyone."<br/><br/>
          The chorus also provided an important safe space for gay men who shared a love of music to meet each other. Members with strong musical experience would help mentor those who didn't know how to read music. There was a lot of camaraderie. Close friendships, long term relationships, and marriages formed. During the summers, when the chorus wasn't performing, some members formed a weekly canasta group that met during their regular rehearsal time and allowed them to continue to see one another.<br/><br/>
          The Maine Gay Men's Chorus held its final performance under the direction of Bruce Fithian in July 2012 at the Ellie Caulkins Opera House in Denver Colorado during the GALA Choruses International Festival. But, three years later, in January 2015, the Chorus was relaunched with Larry Jackson, a former member, serving as the artistic director. To this day, the Chorus continues to play an important role in the local community and in the lives of its members.
          </p>
          <h2 className="text-4xl font-bold text-center mb-10 mt-10 text-[#E2D6AF]">Photos</h2>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/5 Concert ad Apex Dec 1992 p6.webp"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Sunday 12/13 advertisement for the newly formed Maine Gay Men's Chorus premiere performance. Apex : a point of departure, December 1992. Page 6 <a href=" https://digitalcommons.usm.maine.edu/apex/11  "> https://digitalcommons.usm.maine.edu/apex/11  </a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/6 Freedom Train ad Community Pride Reporter June 1994 p2.webp"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p> Gay men's Chorus presents Freedom Train advertisement in Community Pride Reporter, June 1994. Page 2  <a href="https://digitalcommons.usm.maine.edu/cpr/56 "> https://digitalcommons.usm.maine.edu/cpr/56 </a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/7 concert ad LA AIDS coalition of LA update nov 1997 p2.webp"
              width={250}
              height={250}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p> Maine Gay Men's chorus advertisement in AIDS Coalition of Lewiston-Auburn Update. November 1997. Page 1 <a href="https://digitalcommons.usm.maine.edu/acla_update/11"> https://digitalcommons.usm.maine.edu/acla_update/11
              </a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/8. Maine Gay Men's Chorus backstage by Robert Diamante_11zon.webp"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Photo of Maine Gay Men's Chorus backstage by Robert Diamante, 1990s https://digitalcommons.usm.maine.edu/lgbtq_diamante/11/
              <a href="  https://digitalcommons.usm.maine.edu/lgbtq_diamante/11/">  https://digitalcommons.usm.maine.edu/lgbtq_diamante/11/ </a></p>
            </div>
          </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-10 mt-10 text-[#E2D6AF]">MaineTransNet</h2>
          <audio controls>
            <source src="./audio/TransNetV2_mixdown.mp3" type="audio/mpeg" />
          </audio>
          <p className="text-lg text-gray-800">
          Maine is now home to the largest transgender-led statewide organization in the country, MaineTransNet. But it has been a long road to get there. Prior to the 1980s, there were no public organizations for trans people in Maine. The earliest group for “transsexual-identified people"in the state, according to activist Jean Vermette, was located in the Kingfield area, far to the north of Portland.  The small group of about half dozen people met in private homes, never publicizing their existence. <br/><br/>
          Finally, in the late 1980's, a new organization, TransSupport, began to meet once a month at the Unitarian-Universalist Church in Brunswick, Maine. People in Maine would travel as far as 3 hours to attend the meetings in Brunswick. <br/><br/>
          TransSupport described itself as an “educational, non-sexual, social and peer support group."According to Vermette, “People would arrive as whatever sex they were born as and then change in the basement if they wanted to. We would sit around for an hour or two, cross-dressed, and then change back and go home. But at least you knew that there were other people like you and, for a little while, you could express who you were."<br/><br/>
          At that time in Maine, there were no more than a handful of therapists and perhaps only one physician in the entire state willing to work with the trans community. Vermette was committed to changing that. “It was clear,"she said, “that we had to get more people trained up, so I had the idea to start a Speakers' Bureau. But none of the people in the Brunswick group wanted to participate. They said, 'I'm not going out dressed like this and expose myself to all kinds of ridicule, lose my job or have my wife leave me. No.'  So I did it on my own. Finally, I met another person, PJ Mears, and we created a Trans 101 training for mental health professionals, college students, churches, really anyone who wanted to chat with us. We called it MEGRESS: Maine Gender Resource and Support Services."<br/><br/>
          MEGRESS conducted day-long continuing education seminars for mental health professionals in every county in Maine. They organized trans workshops at social work conferences. They spoke to students and educators in the state. And they pushed the Maine Lesbian Gay Political Alliance and Maine Outright (for GLB youth) to become trans inclusive. Vermette estimates that MEGRESS educated over 8,000 people in the state, many of them active or future medical or mental health professionals. And she paid for it all out of pocket.  After 15 years, around 2001, Vermette stepped back and disbanded MEGRESS.<br/><br/>
          Four years later, a graduate student at the University of Southern Maine, Alex Roan, stepped into the gap. “When I was first transitioning,"he said, “I really thought I was the only trans person in this area. I thought all trans people lived in San Francisco or Provincetown, but surely I was the only one in Maine."Roan's desire to connect with other trans people, led him to teach himself HTML and to create a website, Maine Transgender Network, with information about trans identities.  “All of a sudden, I had this website and was getting asked to speak. But, really, I'm a big introvert. So, I decided to make a video where I'd interview trans people in different parts of the state about their experiences in Maine for use in trainings. I drove around and filmed ten people of different ages sharing their experience. It was very zero budget. But I ended up showing that film at a couple of dozen places from the Department of Health and Human Services to local colleges. I also wanted to have an in-person support group in Portland, so together with Brandon Parker, I started one. Within a few years, we had groups in other parts of the state too. We also organized Transgender Day of Remembrance ceremonies and had a big conference. All of this was with no budget. We had no money."<br/><br/>
          In 2007, Alex Roan participated on a panel at USM for Transgender Day of Remembrance. A handful of conservative Christians protested the event and, afterward, wrote an article denouncing it for a popular Christian website. This resulted in so much traffic to the Maine Transgender Network website that it bumped the organization up in the Google search, making it one of the top hits for anyone searching for “Maine"and “Transgender."As a result, trans people all over the state began to discover MaineTransNet.<br/><br/>
          MaineTransNet continues to operate on the peer support model. As Quinn Gormley, who served as Executive Director after Alex Roan stepped back, explains, “Alex started with the idea that trans people are probably better equipped than cisgender clinicians are to support each other. I am alive because of them, multiple times over. They gave me community, they gave me family. They were a lifeline when I needed it most. I showed up at a board meeting when I was 23 years old and I said 'I just quit my job today. Let me have this Executive Director position and I'll do it for free for 3 months. If I can figure out at the end of the 3 months how to pay for myself, then you'll let me keep it."'She continued to run the organization for the next 6 years.<br/><br/>
          Gormley observes that “There is a lot of talk in our work about breathing, about keeping trans people breathing in Maine. We mean that literally. The median age for suicide attempts among trans Mainers is 13 years old. With all that grief, there's a lot of gasping that goes on. But there's also joyful breath. We have this huge collection of chest binders in our office and people sometimes just come in to get them. Getting to watch a 16-year-old look in the mirror and see themselves for the first time the way they want to be seen is breathtakingly beautiful."<br/><br/>
          In the MaineTransNet office in the Equality Community Center, they've created a space for trans joy: Safe Combinations, a gender-affirming thrift store in the former bank vault. Undergarments like bars and binders are available free of charge. And while the store is open to everyone, it especially caters to trans people looking to safely and inexpensively create a fabulous new look
          </p>

          <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/9 Tiffany club membership listings.webp"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Lynn, Merissa Sherrill.  "Tiffany Club Membership Listings #1 (June 5, 1979)."  Directorie. 1979.  Digital Transgender Archive,  <a href="https://www.digitaltransgenderarchive.net/files/zp38wc642 "> https://www.digitaltransgenderarchive.net/files/zp38wc642 </a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/10 Je Me Soouviens Vermette biography.webp"
              width={200}
              height={200}
              objectFit='cover'
            />
            <div style={{ width: '200px', fontSize: '10px' }}>
              <p> Je Me Souviens, Jean Vermette's autobiography. LG MS 041 Jean Vermette Papers. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.  <a href="https://digitalcommons.usm.maine.edu/spclgms_vermette_documents/1/"> https://digitalcommons.usm.maine.edu/spclgms_vermette_documents/1/</a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/11 Sex-Sexual Orientation-Gender Identity blocks .webp"
              width={250}
              height={250}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p> Sex-Sexual Orientation-Gender Identity blocks Vermette developed for workshops given by Maine Gender Resource and Support services (MEGRESS). LG MS 041 Jean Vermette Papers. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections <a href="https://digitalcommons.usm.maine.edu/spclgms_vermette_image/1/"> https://digitalcommons.usm.maine.edu/spclgms_vermette_image/1/
              </a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/12 MaineTransNet Family Affainrs jan 2013.PNG"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>MaineTransNet advertisement in Family Affairs Newsletter, January 1, 2013. Page 2. 
              <a href="  https://digitalcommons.usm.maine.edu/fan/72">  https://digitalcommons.usm.maine.edu/fan/72 </a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/EE/13 Exterior of the Equality Community Center at 15 Casco St. Portland, Maine by Megan MacGregor,  CC BY 4.0 http___creativecommons.org_licenses_by_4.0_11zon.webp"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>13 Exterior of the Equality Community Center at 15 Casco St. Portland, Maine by Megan MacGregor,  CC BY 4.0
              <a href=" http://creativecommons.org/licenses/by/4.0"> http://creativecommons.org/licenses/by/4.0 https://digitalcommons.usm.maine.edu/fan/72 </a></p>
            </div>
          </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-10 mt-20 text-[#E2D6AF]">Sources </h2>
          <p className="text-lg  text-gray-800">
          About. (2024).  Maine Gay Men's Chorus.  Retrieved from https://mainegaymenschorus.com/about/<br/><br/>

          About.  (2024).  MaineTransNet.  Retrieved from https://www.mainetransnet/about<br/><br/>

          About the ECC.  (2024). Equality Community Center.  Retrieved from https://eccmaine.org/about<br/><br/>

          Advertisement: Maine Gay Men's Chorus: Peace on Earth.  (1995, December).  Community Pride Reporter, p. 3.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/cpr/38/<br/><br/>
          
          Bent, E. (2023, November 27). Gardner, Ed.  Querying the Past: LGBTQ Maine Oral History Project Collection. Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/querying_ohproject/114<br/><br/>

          Brogan, B.  (2022, June 16).  MaineTransNet opens Safe Combinations, a safe and affirming thrift store.  News Center Maine.  Retrieved from https://www.newscentermaine.com/article/news/community/maine-transnet-opens-safe-affirming-thrift-store-safe-combinations-transgender-lgbtq/97-d3736c69-d975-44c5-bf9f-042b88c5f3fd<br/><br/>

          Bunker, L., Cook, M., Kane, J-L.,  Roan, A., & Mears, P. J.  (2012, March 21).  Maine's transgender revolution, part one.  Events, LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections  Retrieved from https://digitalcommons.usm.maine.edu/spcoevents/10/<br/><br/>

          Calendar: Sunday, Dec. 9, MLGPA meeting.  (1984, December). Our Paper: Serving the Alternative Community, p. 12. Retrieved from LGBTQ+ Collection,Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/our_paper_sac/82/<br/><br/>

          Calendar: Tuesday, 9/7, Auditions for the Maine Gay Men's Chorus, 1993-1994 choral season.  (1993, September).  Apex: A Point of Departure, p. 10.  Retrieved from LGBTQ+ Collections, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/apex/20/<br/><br/>


          Chapkis, W.  (2018, June 14).  Diamante, Robert.  Querying the Past: LGBTQ Maine Oral History Project Collection.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/querying_ohproject/61/<br/><br/>


          Cousins, S., & Dyer, K.  (2019, November 23).  Maxwell, Daralyn.  Querying the Past; LGBTQ Oral History Project Collection.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/querying_ohproject/68/<br/><br/>


          Dunn, L., & Sucy, K.  (2021, November 29).  Gormley, Quinn.  Querying the Past: LGBTQ Oral History Project Collection.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/querying_ohproject/2/<br/><br/>


          Elze. (1986, January).  MLGPA, state collaborate on AIDS forums.  Our Paper: Serving the Alternative Community, pp. 1, 3.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/our_paper_sac/69/<br/><br/>


          E-mail correspondence between Jean Vermette and Wendy Chapkis.  (2023, August 5).<br/><br/>

          
          EqualityMaine.  (2005, Summer).  Legislature votes to end discrimination.  Equality News, pp. 1, 6, 8.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/equality_news/5
          <br/><br/>

          EqualityMaine: Our accomplishments. (2024).  EqualityMaine.  Retrieved 2024, April 9 from https://www.equalitymaine.org/our-accomplishments<br/><br/>


          Flanagan, J.  (1985, February).  Political alliance's first annual meeting a success.  Our Paper: Serving the Alternative Community, p. 8.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, htpps://digitalcommons.usm.maine.edu/our_paper_sac/80/<br/><br/>


          Friend, Avery.  (2023, June 16).  A conversation with our founder.  MaineTransNet.  Retrieved from https://www.mainetransnet/blog/a-conversation-with-our-founder<br/><br/>


          From the vaults: the founding of the Maine Gay Men's Chorus.  (2021, February 21).  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/spcoevents/29/<br/><br/>


          Gautreau, P.  (1984, October). Maine Lesbian/Gay Political Alliance.  Our Paper: Serving the Alternative Community, p. 4.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections,  https://digitalcommons.usm.maine.edu/our_paper_sac/84/<br/><br/>
          
          Graffam, K. (2023, ).  Smith, Betsy  (2023, November 17). Querying the Past: LGBTQ Maine Oral History Project Collection.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/querying_ohproject/117/<br/><br/>
          

          Grand opening block party & campaign kick-off.  (2022, October 16).  Equality Community Center.  Retrieved from https://eccmaine.org/calendar/2022/9/17/grand-opening-block-party-amp-campaign-kick-off<br/><br/>
          
          GSA Newsletter.  LG MS Sturgis Haskings papers 007, Box 8. Folder 137, LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <br/><br/>

          Holland, A., & Tryon-Nadeau, O.  (2016, November 19).  Vermette, Jean.  Querying the Past: LGBTQ Oral History Project Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/querying_ohproject/2/<br/><br/>
          
          Howard, C.  (2023, July 14).  Safe Combinations celebrates one year!  MaineTransNet.  Retrieved from https://www.mainetrans.net/blog/thrift-one-year-anniversary<br/><br/>

          Laws of the State of Maine as passed by the one hundred and fifteenth legislature. Third Special Session. (October 1992). J.S. McCarthy Company, Augusta, Maine.  Retrieved from  https://lldc.mainelegislature.org/Open/Laws/1993/1993_PL_c378.pdf<br/><br/>

          LG MS 026, Michael Martin Papers Finding Aid.  (2013, November).  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/lgbt_finding_aids/26/<br/><br/>

          Lynn, M. S.  (1979, June 5).  Tiffany Club membership listings #1.  Digital Transgender Archive.  Retrieved August 18, 2023, https://www.digitaltransgenderarchive.net/files/zp38wc642<br/><br/>
          
          Maine Lesbian/Gay Political Alliance. (1987, October).  One Potato, Two Potato: A Special Newsletter of the Maine Lesbian/Gay Political Alliance.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Digital Commons, https://digitalcommons.usm.maine.edu/mlgpa/9/<br/><br/>
          
          MLGPA. (1984, November). Stein-vine, p. 1.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Digital Commons, https://digitalcommons.usm.maine.edu/stein_vine/1/<br/><br/>
          

          Nemitz, B.  (2021, March 31).  After a long struggle, a place for LGBTQ+ to call home.  Portland Press Herald, pp. B1, B3.  Retrieved from htps://library.umaine.edu/auth/EZproxy/test/authej.asp?url=https://search.proquest.com/newspapers/after-long-struggle-place-lgbtq-call-home/docview/2507004479/se-2<br/><br/>


          News: Portland Gay Men's Chorus forming.  (1992, July).  Our Paper: Serving the Alternative Community, p. 5.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/our_paper_sac/102/
          <br/><br/>

          Our history. (2024).  Equality Community Center.  Retrieved from  https://eccmaine.org/history<br/><br/>


          Press Conference-July 11, 1984. (1984, August).  Our Paper: Serving the Alternative Community, p. 4.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections,  https://digitalcommons.usm.maine.edu/our_paper_sac/111/<br/><br/>

          Ravenscraft, P.  (2023, November 26).  Roan, Alex.  Querying the Past: LGBTQ Oral History Project Collection.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/querying_ohproject/118/<br/><br/>

          Safe Combinations celebrates one year!  (2023, July 14).  MaineTransNet.  Retrieved from https://www.mainetrans.net/blog/thrift-one-year-anniversary<br/><br/>

          Schreiber, L. (2022, May 26).  LGBTQ+ equality center to open new collaborative workplace. Mainebiz.  Retrieved from https://www.mainebiz.biz/article/lgbtq-equality-center-to-open-new-collaborative-workplace<br/><br/>
          
          State of Maine: Office of Janet T. Mills (2019, May 29).  Governor Mills signs legislation banning conversion therapy into law.  Retrieved from https://www.maine.gov/governor/mills/news/governor-mills-signs-legislation-banning-conversion-therapy-law-2019-05-29<br/><br/>


          Transsupport by-laws.  LG MS Transsupport Archives 016.  LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <br/><br/>


          Violence and Discrimination Survey.  (1985, January).  Our Paper: Serving the Alternative Community, p. 3.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/our_paper_sac/81/
          <br/><br/>
          Woodward, K., & Koch, N.  (2016, November 29).  Barteaux, Kennedy.  Querying the Past: LGBTQ Oral History Project Collection.  Retrieved from LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections, https://digitalcommons.usm.maine.edu/querying_ohproject/14/
          </p>
        </div>
        </div>
        
        
</main>
  );
};

export default FirstParishChurch;