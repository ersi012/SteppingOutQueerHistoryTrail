// pages/site/[site].jsx
import { useRouter } from 'next/router';

const SitePage = () => {
  const router = useRouter();
  const { site } = router.query;

  // Ensure site is available before rendering
  if (!site) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <div>
      <h1>Site {site}</h1>
      <div className='bg-[#1C5C2D] w-screen min-h-screen px-20 py-20 flex justify-center items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
          {/* Render content based on the fetched data */}
        </div>
      </div>
    </div>
  );
};

export default SitePage;
