import Image from 'next/image';
import Navbar from '../components/Navbar'

const FirstParishChurch = () => {
  return (
    <main >
    <Navbar />
    <div className="relative bg-white">
      <div className="relative h-screen overflow-hidden">
        <Image
          src="/images/sites/OurBook/2. ICON PIC Our Books ad Our Paper Jan 1983p3.PNG"
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

      {/* Additional website information */}
      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <p className="text-lg text-gray-800">
        Our Books:
        Fred Berger opened a small gay bookstore, Our Books, in the Old Port section of Portland, ME in December of 1982; less than a year later, in September of 1983, he moved the bookstore to 4 Pine Street in the West End. As Berger observed (in his oral history interview), “It wasn’t much of a store, but it became a sort of gay community center.” Skip Brushaber explained (in his 2018 oral history interview), “Fred’s book store had these comfortable chairs and people would stop in. It was definitely a community space where people met to talk about political things, civil rights.”
        </p>
      </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
        <h2 className="text-4xl font-bold text-center mb-10  text-[#E2D6AF]">Photos</h2>

        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/OurBook/1. John Preston book signing Our Books Our Paper Nov 1983 p8.PNG"
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
              src="/images/sites/OurBook/thumbnail.jpg"
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
              src="/images/sites/OurBook/3. Our Books ad Our Paper Aug 1984 p 4.PNG"
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
            The bookstore also served as a meeting space for early queer organizing. According to Fred Berger, “We had a lot of meetings there. The real impetus for me was when Charlie Howard, a gay man, was thrown off a bridge. The MLGPA  - Maine Lesbian Gay Political Alliance – was founded sort of as a result of that. We used the bookstore for early formative meetings.”
            
            Our Paper:
            The bookstore also served as the production site for an early queer newspaper, Our Paper which began publication in September of 1983, produced by a 7-member collective. The mission of Our Paper was “to serve as a voice for lesbian and gay men in Maine” and as “a source for information, support and affirmation, and a vehicle for celebration.” 
          </p>


          <h2 className="text-4xl font-bold text-center mb-10 mt-20 text-[#E2D6AF]">Sources </h2>
          <p className="text-lg  text-gray-800">                    
            Bennett, Troy. 2019. “28 Years After Vandals Smashed Its Glass, Portland’s Last Gay Bar Has Windows Once Again.” Bangor Daily News, July 18. 
            <br/><br/>
            Blackstones advertisement, Our Paper, December 1987, page 20. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/our_paper_sac/47/<br/><br/>
            
            “Blackstones; A class Act” in  Apex : A Point of Departure, Vol.3, No.09 (November 1994). Page 3 LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.  https://digitalcommons.usm.maine.edu/apex/33<br/><br/>
            
            Backstones advertisement, Our Paper, December 1988, page 16. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/our_paper_sac/35/<br/><br/>
            
            Chapkis, Wendy and Betsy Carson. “Bar Stories from Queer Maine,” 2022. https://video.maine.edu/media/Bar+Stories/1_58hxq96h<br/><br/>
            
            Fraser, Danielle and Wescot, Jarod, "Fenton-Snell, Butch" (2018). Querying the Past: LGBTQ Maine Oral History Project Collection. 35. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/querying_ohproject/35<br/><br/>
            
            Cain, Hannah, "Cusack, Ralph" (2018). Querying the Past: LGBTQ Maine Oral History Project Collection. 43. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/querying_ohproject/ <br/><br/>
            
            Wolf, Gwendolyn and Ossie, Johnna, "Grindle, Charles" (2017). Querying the Past: LGBTQ Maine Oral History Project Collection. 20. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/querying_ohproject/20<br/><br/>
            
            Blackstones Advertisement  in Apex : A Point of Departure, Winter 1994/95. Page 20. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/apex/34<br/><br/>
            
            Miskoon, Maisarah and Winter, Devyn, "Smallwood, Thomas" (2017). Querying the Past: LGBTQ Maine Oral History Project Collection. 27. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/querying_ohproject/27<br/><br/>
            
            Sturchio, Bianca and Ossie, Johnna, "Rich, Penny" (2017). Querying the Past: LGBTQ Maine Oral History Project Collection. 26. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/querying_ohproject/26<br/><br/>
            
            “Letters” in Apex : A Point of Departure, Vol.4, No.07 (August 1995). Page 2. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/apex/40<br/><br/>
            
            “Miss Maine endorses gay rights at Pride Weekend” in Community Pride Reporter, 07/1994" Pages 1 &  2. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/cpr/53
            <br/><br/>
            Blackstones halloween advertisement in Community Pride Reporter, 11/1995. Page 3. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. https://digitalcommons.usm.maine.edu/cpr/39<br/><br/>
          </p>
        </div>
        </div>
        
        
</main>
  );
};

export default FirstParishChurch;