// pages/sites/[site].js

const SitePage = ({ site }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ color: 'blue', fontSize: '24px', marginBottom: '20px' }}>{site} Page</h1>
      <Text> hello </Text>
    </div>
  );
};

export default SitePage;

export async function getStaticPaths() {
  // Fetch dynamic paths from your data source
  const paths = [
    { params: { site: 'FirstParishChurch' } },
    // Add other dynamic paths as needed
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch data based on params.site
  return {
    props: {
      site: params.site,
    },
  };
}
