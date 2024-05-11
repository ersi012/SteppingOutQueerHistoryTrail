const SitePage = ({ site }) => {
    return (
      <div className={styles.sitePageContainer}>
        <h1 className={styles.sitePageTitle}>{site} Page</h1>
        {/* Add your page content here */}
      </div>
    );
  };
  
  export default SitePage;
  