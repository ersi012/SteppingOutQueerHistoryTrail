import Image from 'next/image';

const FirstParishChurch = () => {
    return (
      <div>
        <img
          src="/images/sites/FirstParish1.jpg"
          alt="Description of your image"
          width={800} // Set your preferred width
          height={600} // Set your preferred height
        />
        
        <h1>First Parish Church</h1>
        <p>This is your homepage content...</p>
      </div>
    );
  };
  
  export default  FirstParishChurch;