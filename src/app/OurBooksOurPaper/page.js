import Image from 'next/image';
import Navbar from '../components/Navbar'

const FirstParishChurch = () => {
  return (
    <main >
    <Navbar />
    <div className="relative bg-white">
      <div className="relative h-screen overflow-hidden">
        <Image
          src="./images/sites/OurBook/2. ICON PIC Our Books ad Our Paper Jan 1983p3_11zon.webp"
          alt="First Parish Church"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="z-0"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center text-white p-6">
        <div className="bg-white bg-opacity-75 p-4 rounded">
          <h2 className="text-6xl font-bold mb-8 text-[#1C5C2D]">Our Books/Our Paper  </h2>
          <p className="text-lg text-[#1C5C2D] font-bold">4 Pine Street</p>
        </div>
        </div>
      </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <audio controls>
            <source src="./audio/OurBooksAndPaperV2_mixdown.mp3" type="audio/mpeg" />
        </audio>
        <p className="text-lg text-gray-800">
        Our Books:
        Fred Berger opened a small gay bookstore, Our Books, in the Old Port section of Portland, ME in December of 1982; less than a year later, in September of 1983, he moved the bookstore to 4 Pine Street in the West End. As Berger observed (in his oral history interview),"It wasn&apos;t much of a store, but it became a sort of gay community center." Skip Brushaber explained (in his 2018 oral history interview),"Fred&apos;s book store had these comfortable chairs and people would stop in. It was definitely a community space where people met to talk about political things, civil rights."
        </p>
      </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <h2 className="text-4xl font-bold text-center mb-10  text-[#E2D6AF]">Photos</h2>

        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/OurBook/1. John Preston book signing Our Books Our Paper Nov 1983 p8_11zon.webp"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Ad for John Preston books signing, Our Paper Nov 1983, pg 8. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/92/"> https://digitalcommons.usm.maine.edu/our_paper_sac/92/</a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/OurBook/thumbnail.webp"
              width={200}
              height={200}
              objectFit='cover'
            />
            <div style={{ width: '200px', fontSize: '10px' }}>
              <p>Our Books ad, Our Paper January 1983, pg 3. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.  <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/90/"> https://digitalcommons.usm.maine.edu/our_paper_sac/90/</a></p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/OurBook/3. Our Books ad Our Paper Aug 1984 p 4_11zon.webp"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>
                Our Books ad, Our Paper August 1984, pg 4. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
                <a href="https://digitalcommons.usm.maine.edu/our_paper_sac/111/ ">https://digitalcommons.usm.maine.edu/our_paper_sac/111/
              </a></p>
            </div>
          </div>
          </div>
          <p className="text-lg  text-gray-800 mt-12">       
            The bookstore also served as a meeting space for early queer organizing. According to Fred Berger,"We had a lot of meetings there. The real impetus for me was when Charlie Howard, a gay man, was thrown off a bridge. The MLGPA  - Maine Lesbian Gay Political Alliance - was founded sort of as a result of that. We used the bookstore for early formative meetings."
            
            Our Paper:
            The bookstore also served as the production site for an early queer newspaper, Our Paper which began publication in September of 1983, produced by a 7-member collective. The mission of Our Paper was"to serve as a voice for lesbian and gay men in Maine" and as"a source for information, support and affirmation, and a vehicle for celebration." 
          </p>

       
        <h2 className="text-4xl font-bold text-center mb-10 mt-11  text-[#E2D6AF]">Photos</h2>

        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/OurBook/4. Our paper staff meeting ad Our paper Oct 1983 pg 12.webp"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Meetings; Our Paper staff meeting, Our Paper Oct. 1983, pg 12. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.https://digitalcommons.usm.maine.edu/our_paper_sac/93/ </p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/OurBook/5. Our Paper banner Our Paper April 1983_11zon.webp"
              width={200}
              height={200}
              objectFit='cover'
            />
            <div style={{ width: '200px', fontSize: '10px' }}>
              <p>Our Paper header, Our Paper April 1983, pg 1. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
https://digitalcommons.usm.maine.edu/our_paper_sac/87/
</p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/OurBook/6. Our paper annual meeting Our Paper January 1986 p2_11zon.webp"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>
              Ad for Our Paper meeting at Our Books, Our Paper, January 1986, pg 2. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
https://digitalcommons.usm.maine.edu/our_paper_sac/69/
</p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/OurBook/7. Our Paper marching in Boston Pride Our Paper July 1985 p1_11zon.webp"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>
              Our Paper staff marching in the Boston Pride Parade, Our Paper, July 1985, pg 1. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
https://digitalcommons.usm.maine.edu/our_paper_sac/75/
</p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/OurBook/8. hate crimes Our Paper July 1992_11zon.webp"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>
              Our Paper cover, Our Paper, July 1992, pg 1. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
https://digitalcommons.usm.maine.edu/our_paper_sac/98/
</p>
            </div>
          </div>
          {/* <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/OurBook/3. Our Books ad Our Paper Aug 1984 p 4.PNG"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>
              Our Paper cover, Our Paper, October 1992, pg 1. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
https://digitalcommons.usm.maine.edu/our_paper_sac/100/
</p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="./images/sites/OurBook/3. Our Books ad Our Paper Aug 1984 p 4.PNG"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>
              Our Paper cover, Our Paper, December 1992, pg 1. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. 
https://digitalcommons.usm.maine.edu/our_paper_sac/102/

</p>
            </div>
          </div> */}
          </div>

          <p className="text-lg  text-gray-800 mt-12">       
          As Skip Brushaber, who was one of the original collective members, reported,"Fred had the idea of Our Paper and had a poster or something saying we were having a meeting for doing a monthly periodical and it got a great turnout. It was a good size collective. We made decisions as a collective which, at times, was difficult. There were times where what we all wanted was to go but people would roll their eyes and say &apos;this will be a long night.&apos;But we did it. We jumped in and we started Our Paper. It came out monthly and it was free. Some businesses would allow us to put them on their free rack of newspapers; some of them wouldn&apos;t. It was amazing how it just kind of snowballed. People in Boston were asking us to bring papers down there to give out. Then we were hearing from people across the country that they were getting their hands on the paper. There were challenges too. We lost our first publisher because we did an ad about practicing safe sex. This was during AIDS, of course. There wasn&apos;t anything pornographic about it; it was just about safe sex. But they said &apos;we won&apos;t publish your paper anymore.&apos;So, we had to get another publisher. But if I think back on being active in the community, working on Our Paper was probably my proudest moment. It was all volunteer labor even though we were all working full time jobs. It was Tuesday nights when we did pasting up of the stories on the floor and any surface we could find at Fred&apos;s bookstore. We would stay up sometimes until 2 in the morning to get it published the next day. But it was important.  In the early reporting about the gay movement, there was always that minimizing. The mainstream press, with a few exceptions, really treated us like freaks and always in a negative light. In the 1980s, most people still thought we were all child molesters who shouldn&apos;t have rights. I think that&apos;s why we started Our Paper with the idea of presenting the positive."
          <br/><br/>
In the first issue of the paper, the editors described the process of producing the paper at"lively Tuesday night meetings  [at Our Books], [with] many cups of coffee to get through our obsessive prattlings, cheers and jeers, groans and moans, and when it looked like we were all set and everything was proceeding on schedule, our typesetter&apos;s composer broke down, more groans and moans followed, as we pulled an all-nighter at the typewriters."  The collective wanted the newspaper to represent the diversity of the community and to"reflect the needs, interests, and concerns of gay men and lesbians of color, of different ages, backgrounds and geographical areas in Maine, of disabled gay men and lesbians." In an effort to make that a reality, the paper invited readers to submit material for publication. 
<br/><br/>
While Our Books closed in 1987, Our Paper continued to be published through 1992. As Berger explained to the press,"The bookstore served a purpose for a while, but it was the end of an era." As Skip Brushaber expressed, it was a significant loss:"I kind of bemoan the loss of Fred&apos;s bookstore.  It was a safe space. I remember people who didn&apos;t live in Portland would just come and hang out there because it was a safe, comfortable space."

          </p>

          <h2 className="text-4xl font-bold text-center mb-10 mt-20 text-[#E2D6AF]">Sources </h2>
          <p className="text-lg  text-gray-800">                    
          Chapkis, Wendy, "Berger, Fred" (2017). Querying the Past: LGBTQ Maine Oral History Project Collection. 9. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href=" https://digitalcommons.usm.maine.edu/querying_ohproject/9 "  style={{ textDecoration: 'underline' }}>https://digitalcommons.usm.maine.edu/querying_ohproject/9</a>
          <br/><br/>
          Sumner, Tom,"Happy Birthday &apos;Our Paper&apos;" Our Paper September 1984. Pg 2. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href="  https://digitalcommons.usm.maine.edu/our_paper_sac/85 "  style={{ textDecoration: 'underline' }}> https://digitalcommons.usm.maine.edu/our_paper_sac/85</a><br/><br/>
          
          Steve Saunders (1983, August 31), "Maine&apos;s gays to publish own newspaper," Portland Evening Express, p. 4. 
          <br/><br/>
          (1987, February 3), "Homosexual bookstore, Our Books, closes," Portland Press Herald, p. 10. 
          
          <br/><br/>
          Barrett, Jack and Pratt, Branden, "Brushaber, Skip" (2018). Querying the Past: LGBTQ Maine Oral History Project Collection. 33. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href=" https://digitalcommons.usm.maine.edu/querying_ohproject/33"  style={{ textDecoration: 'underline' }}>https://digitalcommons.usm.maine.edu/querying_ohproject/33</a>  
          </p>
        </div>
        </div>
        
        
</main>
  );
};

export default FirstParishChurch;