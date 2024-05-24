import Image from 'next/image';
import Navbar from '../components/Navbar'

const FirstParishChurch = () => {
  return (
    <main >
    <Navbar />
    <div className="relative bg-white">
      <div className="relative h-screen overflow-hidden">
        <Image
          src="./images/sites/MonumentSquare/12 ICON PICRiver of Pride Flag Steven Bridges 2016.JPG"
          alt="First Parish Church"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="z-0"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center text-white p-6">
        <div className="bg-white bg-opacity-75 p-4 rounded">
          <h2 className="text-6xl font-bold mb-8 text-[#1C5C2D]">Monument Square</h2>
          <p className="text-lg text-[#1C5C2D] font-bold">456 Congress St.</p>
        </div>
        </div>
      </div>
    
      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#E2D6AF]">Introduction</h2>
        <p className="text-lg text-gray-800">
        Monument Square has long been an important community gathering spot in Portland. Surrounded by tall buildings, eateries, and the Portland Public Library, it has been an ideal location since the 19th century, for people looking to speak their minds, celebrate, or have a cool drink on a humid Maine summer day.
                <br/><br/>
        In 1825, Portland's Market House was erected here, giving this location its original name of "Market Square.” The building went on to serve many functions over the next 63 years, even acting as City Hall after the Great Fire of 1866. The Market House was eventually leveled in 1887 to make way for the monument that currently stands on this site. This is why the location is now called "Monument Square". 

        </p>
        <h2 className="text-4xl font-bold text-center mb-10  mt-10 text-[#E2D6AF]">Protests and Demonstrations</h2>
        <p className="text-lg text-gray-800 mb-10 ">Due to its central location and its size, the square has been a frequent gathering point for political activists. Over the years the Square has seen major historical marches, such as the “first” pride march after the death of Charlie Howard, and protests over HIV/AIDS from groups like FATE (Fight AIDS Take Action).  
        </p>

      <h2 className="text-4xl font-bold text-center mb-10 mt-10 text-[#E2D6AF]">Photos</h2>
      <div style={{ display: 'flex', overflowX: 'auto', padding: '10px'}}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/1 members of FATE ADragon.png"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Members of FATE (Fight AIDS Transform Education) who staged a game, Just Say Know! (A Game You Play With Yourself) at Monument Square, Valentines Day 1995.
              <a href="https://digitalcommons.usm.maine.edu/annette_dragon/82/">https://digitalcommons.usm.maine.edu/annette_dragon/82/</a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/2 people playing ADragon.png"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>People playing Just Say Know!, tossing a large die in the air. at Monument Square, Valentines Day 1995.
              <a href="https://digitalcommons.usm.maine.edu/annette_dragon/83/">https://digitalcommons.usm.maine.edu/annette_dragon/83/</a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/3 WChapkis ADragon.png"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Wendy Chapkis (far right, foreground) and others gather at Monument Square in Portland for Pride, June 1998.
             <a href="https://digitalcommons.usm.maine.edu/annette_dragon/94/">https://digitalcommons.usm.maine.edu/annette_dragon/94/
              </a></p>
            </div>
          </div>
          <div style={{marginRight: '40px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/4 Students from Biddeford.png"
              width={300}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Students from Biddeford, Portland and South Portland High Schools staging an access-to-latex protest in Monument Square, March 1994
              <a href="https://digitalcommons.usm.maine.edu/annette_dragon/74/ ">https://digitalcommons.usm.maine.edu/annette_dragon/74/ </a></p>
            </div>
          </div>
          </div>
        </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <p className="text-lg text-gray-800">
          A somber vigil and march took place after the murder of a young gay Mainer, Charlie Howard, in 1984 in Bangor. They initially marched from the vigil at First Parish Church to Monument Square. The mourners-turned-demonstrators then marched seven minutes down Congress Street to Congress Square Park, across from the Portland Art Museum. There, when it became clear that the small park could not contain the growing crowd, the demonstrators marched back up Congress Street to Monument Square where they joined together in song and solidarity in what some see as Portland's first Pride March. 
          <br/><br/>
         Monument Square has also been the location for more joyful events. For example, in the early 1990s, the Hysterical Angry Girls Sorority (or HAGS) demonstrated in Monument Square using tongue-in-cheek pop cultural references to raise awareness about feminist issues.  On August 30th 1991, HAGS held an event in Monument Square called the "Thelma and Louise Day" featuring gun registrations for women, a "chocolate rest station,” and a "Bloody and Silver Tampon Awards” ceremony. 
         <br/><br/>
         Also in the 1990s, a group of Southern Maine teens affiliated with ACT UP Portland, organized events as Fight AIDS Take Action (or FATE). The group assembled in Monument Square for some of their rallies demanding school boards move beyond abstinence-only sex education and allow the distribution of condoms and other safer sex supplies at local high schools.
        </p>

        <h2 className="text-4xl font-bold text-center mb-10  mt-10 text-[#E2D6AF]">Celebrations </h2>
        <p className="text-lg text-gray-800 mb-10 ">Monument Square would continue to play an important role in LGBTQ+ activism over the coming decades. While many who attended the 1984 memorial and march for Charlie Howard consider that to be Maine's first Pride march, the first official Pride event took place three years later, in 1987, when a group led by Michael Rossetti and Gary Anderson organized the first Southern Maine Pride Parade and Festival on June 5 through 7.   
        </p>

        <h2 className="text-4xl font-bold text-center mb-10 mt-10 text-[#E2D6AF]">Photos</h2>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/5 Outright marches ADragon.png"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Outright! marches in the Pride Parade in Portland, cica 1996-1999
              <a href="https://digitalcommons.usm.maine.edu/annette_dragon/102/"> https://digitalcommons.usm.maine.edu/annette_dragon/102/</a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/6 Maine Rural Network ADragon.png"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Maine Rural Network members speak in Monument Square at Pride, circ 1996-1999
              <a href="https://digitalcommons.usm.maine.edu/annette_dragon/103/"> https://digitalcommons.usm.maine.edu/annette_dragon/103/</a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/7 South Portland citz A Dragon.png"
              width={350}
              height={400}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>South Portland Citizens for Justice march in the 1998 Portland Pride parade.
              <a href="https://digitalcommons.usm.maine.edu/annette_dragon/106/
              "> https://digitalcommons.usm.maine.edu/annette_dragon/106/
              </a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/8 Dyke March group photo Steven Bridges 2014.JPG"
              width={300}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Dyke March group photos, 2014, Photo by Steven Bridges </p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/9 Dykes on Bikes Portland Steven Bridges 2015.JPG"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Portland Dykes on Bikes 2015, Photo by Steven Bridges </p>
            </div>
          </div>
          <div style={{marginRight: '40px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/10 Marchers in the Portland Dyke March Steven Bridges 2023.jpg"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Marchers in the Portland Dykes March 2023, Photo by Steven Bridges</p>
            </div>
          </div>
          <div style={{marginRight: '40px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/11 WJo Moser Pride.jpg"
              width={400}
              height={400}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Pride in Monument Square, LG-MS0140 W. Jo Moser Photographs, 1989-2019, LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.</p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/12 ICON PICRiver of Pride Flag Steven Bridges 2016.JPG"
              width={250}
              height={250}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>River of Pride flag, 2016, Photo by Steven Bridges </p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/MonumentSquare/13 Marchers carrying the flags PPL Sp Coll & archives1987 TL 06_07 11(1).JPG"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Marchers carrying the flags in the first Portland Pride Parade "Parade Through Portland Expresses Gay Pride," 1987" (1987). Events - Portland Press Herald Still Film Negatives. 1. Portland Public Library Special Collections & Archives. <a href="https://digitalcommons.portlandlibrary.com/pphnegs_images_events/1"> https://digitalcommons.portlandlibrary.com/pphnegs_images_events/1
              </a></p>
            </div>
          </div>
          </div>
         
          <p className="text-lg  text-gray-800 mt-10">
                    
            The organizers were concerned about attendance, as Michael Rossetti later recalled in a letter to a local gay newspaper in March of 1989. According to Rossetti: “The real risk that the media would present the area's lesbian and gay population as a tiny group of sillies, was breathing down our necks with just 20 minutes till step off time. But then, just as in a movie, seemingly from nowhere, people started arriving from somewhere off-stage, till we had about 200 people to carry balloons, banners, and good cheer to Monument Square. The day ended in a splash of lavender floating out over Casco Bay and a successful media blitz the next day.” 
            <br/><br/>
            According to press accounts of that first parade, participants were escorted by police in patrol cars and on horseback to protect them from hostile spectators. When one heckler yelled, “Faggots go home!” marchers reportedly replied “We are home. [...] We are your sons and daughters.” 
            <br/><br/>
            By the early 1990s, a small contingent of Dykes on Bikes began riding at the front of the parade. In 1993, Anne Peron met up with Lisa Guay and Mel Boetsch at the Portland lesbian bar, Sisters. According to Anne, “Mel had gone to the Boston parade and saw the Dykes on Bikes and said we should do it here too. She talked Lisa into riding and they talked me into it too. So the three of us rolled that year. It was dangerous back then to be in the parade and to be out. A couple of years after that first ride, a bunch of people joined and it started to be more popular and a little more safe.” 
            <br/><br/>
            In 1994, Southern Maine Pride commemorated the 25th anniversary of the Stonewall Uprising and the tenth anniversary of the Charlie Howard murder. Each of those Pride marches commenced in Monument Square. While the size of the marches had grown significantly, the organizers of Southern Maine Pride began to complain about problems of funding and low participation by community volunteers in the planning stage. Michael Rossetti wrote letters to various LGBTQ publications (like Apex and Our Paper) pleading for more assistance. 	
            <br/><br/>
            Until 2013 when it dissolved, Southern Maine Pride continued to be the driving force behind Portland's Pride festivities. The following year, in 2014, in order to rescue Pride and to return it to the community, a group of activists spearheaded by Kirsten Griffith, Jill Barkley Roy, and Chris O'Connor, formed Pride Portland, the organization now responsible for Portland's official Pride events.	
            <br/><br/>
            Monument Square continues to serve as the primary starting location for the Pride Parade; though, as people who have participated in the march in recent years can tell you, there are far too many people, floats, and hula hoops to all fit into the Square at once. In 1987, Michael Rossetti was worried that no one would show up. But 25 years later, thousands line the streets and march in the parade. 
            <br/><br/>
            Portland also celebrates Pride each year with an annual Dyke March, first organized in 2005 by Jill Barkley Roy, Sarah Holmes, Audrey Luce, Jem Hodsdon, and Melissa Heckman. As one of the original organizers, Jill Barkley Roy, explained: “In 2005, we talked to the organizers of Southern Maine Pride about including a Dyke March. But they said no. So that year we just had a Dyke March contingent within the Pride Parade and quite a few people marched with us. Then we went back to Southern Maine Pride again and said, “We think there's interest, we think that we need a Dyke March.” And again they said no. So we went to EqualityMaine and asked them to be our nonprofit sponsor. And the next year in 2006 we organized the first Dyke March on the Friday before the Saturday Pride Parade and a ton of people came. It was amazing. The next year we planned a rally in Monument Square the night before the march and an after party at One Longfellow. It just grew into its own thing.” Every year since, the Dyke March has attracted hundreds of participants. Most often, it kicks off from Monument Square and it is always led by a contingent of Dykes on Bikes. 
          </p>
          <h2 className="text-4xl font-bold text-center mb-10  mt-10 text-[#E2D6AF]">Organizations</h2>
            <p className="text-lg text-gray-800 mb-10 ">
            In addition to the demonstrations, marches, and parades that have taken place in Monument Square, some of the buildings in the Square also have significant queer history associated with them.  During the early years of the AIDS crisis in Maine, The AIDS Project was located on the fifth floor of 22 Monument Square. Prior to the founding of that organization, help was much more informal. As one of the founders of The AIDS Project, Skip Brushaber, observes in his oral history, “Around 1984, people started getting sick in Maine. At Fred Berger's gay bookstore Our Books, he had a list of people's needs - you know, like 'this person needs a ride to their doctor, this person needs somebody to bring them dinner.' It was very informal. Finally, we got together and formed the AIDS Project and ended up in Monument Square. It was an amazing organization. I couldn't believe how people just stepped up. It was so hard and yet people gave themselves to it.”   
            <br/><br/>
            In their location at Monument Square, The AIDS Project hosted support groups for people with AIDS and their loved ones, staffed a hotline, and even offered wellness activities like yoga. The Project also published a newsletter that kept subscribers in the loop about local and national AIDS news, initiatives, and events. 
            <br/><br/>
            Moving toward the third decade of the 21st century, Monument Square continues to serve as a prime spot for Portland residents to mobilize in times of struggle and joy. Locals know to go to the Square whenever something goes down.  
            </p>


          <h2 className="text-4xl font-bold text-center mb-10 mt-20 text-[#E2D6AF]">Sources </h2>
          <p className="text-lg  text-gray-800">
          ACT UP Portland Collection, Box 1, Folders 1&2. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.  <br/><br/>

            Associated Press, “Gay Rights March Gets Taunts, Curses,” June 8, 1987. Portland Evening Express: pg. 3
            <br/><br/>
            Balboni, Luke, “STONEWALL 25 / PORTLAND PRIDE”, "Community Pride Reporter, 03/1994" (1994). Community Pride Reporter (1993-1999). page 7.  LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.  https://digitalcommons.usm.maine.edu/cpr/57 
            <br/><br/>
            Butler, Ian, "O'Connor, Christopher" W(2021). Querying the Past: LGBTQ Maine Oral History Project Collection. 75. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.  https://digitalcommons.usm.maine.edu/querying_ohproject/75
            <br/><br/>
            Elze, Diane. “Planning begins for Symposium, Pride Day” January 1987, Our Paper 01/1987 (1987). Our Paper: Serving the Alternative Community. 56. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/our_paper_sac/56,
            <br/><br/>
            Gibson, Beth, "Griffith, Kirsten" (2019). Querying the Past: LGBTQ Maine Oral History Project Collection. 60. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.  https://digitalcommons.usm.maine.edu/querying_ohproject/60
            <br/><br/>
            Gilbert, Rachel, "Barkley Roy, Jill" (2023). Querying the Past: LGBTQ Maine Oral History Project Collection. 109. https://digitalcommons.usm.maine.edu/querying_ohproject/109
            <br/><br/>
            Kesich, Greg, “He heard it from those who heard it from those who were there,” April 13, 2011. Portland Press Herald. https://www.pressherald.com/2011/04/13/he-heard-it-from-those-who-heard-it-from-those-who-were-there_2011-04-13/
            <br/><br/>
            Northern Lambda Nord, "Northern Lambda Nord Communique, Vol.5, No.7 (August/September 1984)" (1984). Northern Lambda Nord Communique. 116. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/nln_communique/116
            <br/><br/>
            Oral History with Skip Brushaber: Barrett, Jack and Pratt, Branden, "Brushaber, Skip" (2018). Querying the Past: LGBTQ Maine Oral History Project Collection. 33. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
            https://digitalcommons.usm.maine.edu/querying_ohproject/33

            <br/><br/>
            Our Paper 08/1984. Our Paper: Serving the Alternative Community. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
            https://digitalcommons.usm.maine.edu/our_paper_sac/111
            <br/><br/>
            Perron, Anne, information on Dykes on Bikes: personal correspondence with Wendy Chapkis, October 4, 2023.
            <br/><br/>
            “Portland Pride '87, June 5-6, 1987” Our Paper 06/1987 (1987). Our Paper: Serving the Alternative Community. 51. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
            https://digitalcommons.usm.maine.edu/our_paper_sac/51,
            <br/><br/>
            Rossetti,  Michael, “Portland Pride #3” Our Paper 03/1989 (1989). Our Paper: Serving the Alternative Community. 32., page 3. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
            https://digitalcommons.usm.maine.edu/our_paper_sac/32
            <br/><br/>
            Rossetti, Michael, Letters, "Our Paper 09/1990" (1990). Our Paper: Serving the Alternative Community. 15. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/our_paper_sac/15, page 2
            <br/><br/>
            Rossetti, Michael, “Letters to Our Paper & An Open Letter to the Community,” "Our Paper 03/1992" (1992). Our Paper: Serving the Alternative Community. 106., page 3. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
            https://digitalcommons.usm.maine.edu/our_paper_sac/106
            <br/><br/>
            Rossetti, Michael, “Letters: Dear Apex Readers.” "Apex : A Point of Departure, Vol.1, No.04 (May 1992)" (1992). APEX. 4. https://digitalcommons.usm.maine.edu/apex/4 page 2. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
            <br/><br/>
            Smith, T.  “Portland Pride Day, June 6, 1987” by T. Smith, Our Paper, "Our Paper 07/1987" (1987). Our Paper: Serving the Alternative Community. 50. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
            https://digitalcommons.usm.maine.edu/our_paper_sac/50, page 5


          </p>
        </div>
        </div>        
</main>
  );
};

export default FirstParishChurch;