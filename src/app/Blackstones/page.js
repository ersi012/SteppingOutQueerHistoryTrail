import Image from 'next/image';
import Navbar from '../components/Navbar'

const FirstParishChurch = () => {
  return (
    <main >
    <Navbar />
    <div className="relative bg-white">
      <div className="relative h-screen overflow-hidden">
        <Image
          src="./images/sites/Black/1. ICON PIC blackstones advert Pride Reporter July 2000 pg 12.PNG"
          alt="First Parish Church"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="z-0"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center text-white p-6">
        <div className="bg-white bg-opacity-75 p-4 rounded">
          <h2 className="text-6xl font-bold mb-8 text-[#1C5C2D]"> Blackstones </h2>
          <p className="text-lg text-[#1C5C2D] font-bold">6 Pine St.</p>
        </div>
        </div>
      </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <audio controls>
            <source src="./audio/Blackstones redo.mp3" type="audio/mpeg" />
        </audio>
        <p className="text-lg text-gray-800">
        Blackstones is the only remaining explicitly queer bar left in Portland. This small neighborhood space first opened in 1987 during a golden age of gay bars in the city which included dance clubs like The Underground; a lesbian bar, Entre Nous; and Cycles. In its first year, Blackstones served as a gay piano bar and restaurant, complete with tablecloths, napkins, and full dinners. By the following year, it had turned into what we see today, a classic neighborhood bar with a pool table. In 1992, Ralph Cusack and his then-partner, Butch Fenton-Snell, purchased the bar and ran it for 27 years before handing it over to new management.
        </p>
      </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <h2 className="text-4xl font-bold text-center mb-10  text-[#E2D6AF]">Photos</h2>

        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/Black/1. ICON PIC blackstones advert Pride Reporter July 2000 pg 12.PNG"
              width={200}
              height={200}
              objectFit='cover'
            />
            <div style={{ width: '200px', fontSize: '10px' }}>
              <p>Blackstones advertisement. The Pride Reporter, Special Issue, July 2000. Page 12. <a href="https://digitalcommons.usm.maine.edu/pride_reporter/2"> https://digitalcommons.usm.maine.edu/pride_reporter/2</a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/Black/2. Blackstones hosts 1994 fundraister article  Annette Dragon Apex nov 1994 p8.PNG"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Blackstones hosts a 1994 fundraiser for Anne Rand&quot;s State Senate campaign. From L to R: Jaeson Alston, The Chartroom&quot;s co-owner; Ralph Cusack, Blackstone&quot;s co-owner; Marc Quirion, Blackstones&quot; bartender; Tim Pickham, Kaos&quot; co-owner. "Apex : A Point of Departure, Vol.3, No.09. November 1994. Page 8 https://digitalcommons.usm.maine.edu/apex/33 <a href="https://digitalcommons.usm.maine.edu/apex/33"> https://digitalcommons.usm.maine.edu/apex/33</a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/Black/3. Blackstones ad Our Paper Aug 1988 p3.PNG"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>Portland Clubs are hot in August advertisement in Our Paper, August 1988. Page 3 https://digitalcommons.usm.maine.edu/our_paper_sac/40 <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/40
              ">https://digitalcommons.usm.maine.edu/our_paper_sac/40
              </a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/Black/4. Blackstones Portlands Newest Piano Bar ad Our Paper December 1987 p20.PNG"
              width={250}
              height={250}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>Blackstones, Portland&apos;s Newest Piano Bar and Restaurant advertisement in Our Paper, December 1987. Page 20. 
              <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/47"> https://digitalcommons.usm.maine.edu/our_paper_sac/47 </a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/Black/5. Blackstones ad Our Paper May 1988 p11.PNG"
              width={250}
              height={250}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>Blackstones advertisement in Our Paper, May 1988. Page 11. 
              <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/43/">https://digitalcommons.usm.maine.edu/our_paper_sac/43/</a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/Black/6. Which witch is which Blackstones ad Community Pride Reporter Nov 1995 p 3.PNG"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>&quot;&quot;Which Witch is Which? Blackstone&apos;s Halloween Party advertisement in the Community Pride Reporter, November 1995. Page 3.
              <a href="https://digitalcommons.usm.maine.edu/cpr/39"> https://digitalcommons.usm.maine.edu/cpr/39/</a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/Black/7. Celebrity bar tending Blackstones media calander Maine Lesbian Gay Political alliance newsletter March 1996 p4.PNG"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>&apos;&apos;Celebrity Bartending with Candace Gingrich&apos;&apos; MLGPA Calendar in the Maine Lesbian/Gay Political Alliance News, March 1996. Page 4.
              <a href="https://digitalcommons.usm.maine.edu/mlgpa_news/1"> https://digitalcommons.usm.maine.edu/mlgpa_news/1</a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/Black/8.PNG"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p> Where can I get my copy of 10%? In 10%: Maine&apos;s monthly newspaper for lesbians & gay men, March 1994. Page 9. 
              <a href="https://digitalcommons.usm.maine.edu/ten_p/12"> https://digitalcommons.usm.maine.edu/ten_p/12</a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/Black/9. Carl Currie photo of Blackstones broken window.jpg"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p> Blackstone&apos;s broken window, photo taken by Carl Currie, bar manager.</p>
            </div>
          </div>
          </div>
         
          <p className="text-lg  text-gray-800 mt-12">
          While many of Portland&apos;s LGBTQ+ bars were designed for a mix of genders, Blackstones was created primarily to serve the gay male community. In recent years, it has made efforts to welcome a much broader public, as indicated by the range of identity-specific Pride flags displayed out front. But trans masculine men have sometimes reported hostility from some older patrons, and women are still a minority. However, as the only remaining explicitly gay bar in Portland, Blackstones continues to be a popular and much beloved institution. <br/><br/>
            Blackstones, like many of the other now-closed queer bars, served as an important community gathering and information space in Portland where you could pick up tickets to community events, check their bulletin board, or grab a gay newspaper to learn what was happening in the local community. Blackstones also provided financial support for Pride activities and AIDS benefits. And the bar has long been an important venue for drag performances.  <br/><br/>
            In its early years, Blackstones held lavish events around Halloween, Thanksgiving, Christmas, and New Years. As former co-owner Butch Fenton-Snell noted, &quot;&quot;Initially we planned to close for the holidays but patrons came to us to say &apos;Why are you closing on Thanksgiving?&apos; &apos;Well, because we thought people would want to spend time with their families.&apos; But they said &apos;These people are our family.&apos; So we didn&apos;t close.&apos;&apos; <br/><br/>
            In his oral history, the other past co-owner Ralph Cusack, a member of the local leather group The Harbor Masters, calls queer bars like Blackstones &quot;&quot;a safe haven&quot;&quot; where &quot;&quot;you could go and be yourself and not worry about ridicule.&apos;&apos; This didn&apos;t mean, however, that the bars themselves weren&apos;t targets for homophobic violence as he reported: &apos;&apos;in the 1990s, our front door had a glass panel in it that got smashed twice in two days. And I had to repaint the front of the bar because somebody spray painted &apos;leave the straights alone&apos; across it.&quot;&quot; It wasn&apos;t until 2019, that the bar finally removed the plywood and plexiglass that had covered the front for 28 years. As bar manager Carl Currie reported, &apos;We put the glass in because we&apos;re at a point now where the bar is safe. It&apos;s time to open it up and acknowledge that.&quot;&quot; <br/><br/>
            Because one of the only explicitly gay spaces in Portland for decades was bar culture, alcohol and drug use was a common feature. As Penny Rich observed in her oral history, &quot;&quot;You could act out if you needed to act out, if you needed to drink, if you needed to do drugs, if your life was difficult because you were in the closet, if you had a job that you hated and you couldn&apos;t come out; if you had broken up with a partner you couldn&apos;t really talk to your co-workers about, but you could in a bar.&&apos;apos; Butch Fenton-Snell remembers the downside of that: &apos;&apos;Being in the bar business,&quot;&quot; he said, &quot;&quot;I was very thankful that I never got to be a drug person and being around so many drunk people really made me stop drinking at a certain point. I&apos;m very conscious now of the amount that I drink.&apos;&apos; <br/><br/>
            While Portland currently has an alternative to bar culture for community-building with the creation of the downtown Equality Community Center in 2016, gay bars have served, and still serve, an important role for many queer people.  As Mike McKenzie observes, &quot;&quot;This is where we fomented revolution. This is where we banded together. This is where we built our community and our chosen family.&apos;&apos; Kevin Ennes, a Blackstones&apos;t regular, adds &apos;&apos;When I come to Blackstones, as soon as I go in that door, I feel safe. It will really  be a sad day in my life when I see that there&apos;s not a gay bar in Portland.&quot;&quot;
          </p>


          <h2 className="text-4xl font-bold text-center mb-10 mt-20 text-[#E2D6AF]">Sources </h2>
          <p className="text-lg  text-gray-800">                    
            Bennett, Troy. 2019. &quot;&quot;28 Years After Vandals Smashed Its Glass, Portland&apos;s Last Gay Bar Has Windows Once Again.&quot;&quot; Bangor Daily News, July 18. 
            <br/><br/>
            Blackstones advertisement, Our Paper, December 1987, page 20. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/our_paper_sac/47/<br/><br/>
            
            &quot;&quot;Blackstones; A class Act&quot;&quot; in  Apex : A Point of Departure, Vol.3, No.09 (November 1994). Page 3 LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.  https://digitalcommons.usm.maine.edu/apex/33<br/><br/>
            
            Backstones advertisement, Our Paper, December 1988, page 16. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/our_paper_sac/35/<br/><br/>
            
            Chapkis, Wendy and Betsy Carson. &quot;&quot;Bar Stories from Queer Maine,&quot;&quot; 2022. https://video.maine.edu/media/Bar+Stories/1_58hxq96h<br/><br/>
            
            Fraser, Danielle and Wescot, Jarod, "Fenton-Snell, Butch" (2018). Querying the Past: LGBTQ Maine Oral History Project Collection. 35. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/querying_ohproject/35<br/><br/>
            
            Cain, Hannah, "Cusack, Ralph" (2018). Querying the Past: LGBTQ Maine Oral History Project Collection. 43. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/querying_ohproject/ <br/><br/>
            
            Wolf, Gwendolyn and Ossie, Johnna, "Grindle, Charles" (2017). Querying the Past: LGBTQ Maine Oral History Project Collection. 20. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/querying_ohproject/20<br/><br/>
            
            Blackstones Advertisement  in Apex : A Point of Departure, Winter 1994/95. Page 20. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/apex/34<br/><br/>
            
            Miskoon, Maisarah and Winter, Devyn, "Smallwood, Thomas" (2017). Querying the Past: LGBTQ Maine Oral History Project Collection. 27. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/querying_ohproject/27<br/><br/>
            
            Sturchio, Bianca and Ossie, Johnna, "Rich, Penny" (2017). Querying the Past: LGBTQ Maine Oral History Project Collection. 26. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/querying_ohproject/26<br/><br/>
            
            &quot;&quot;Letters&quot;&quot; in Apex : A Point of Departure, Vol.4, No.07 (August 1995). Page 2. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/apex/40<br/><br/>
            
            &quot;&quot;Miss Maine endorses gay rights at Pride Weekend&quot;&quot; in Community Pride Reporter, 07/1994" Pages 1 &  2. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/cpr/53
            <br/><br/>
            Blackstones halloween advertisement in Community Pride Reporter, 11/1995. Page 3. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/cpr/39<br/><br/>
          </p>
        </div>
        </div>
        
        
</main>
  );
};

export default FirstParishChurch;