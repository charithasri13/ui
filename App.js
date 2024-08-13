import React from 'react';
import { Button, Text, FlexBox, ThemeProvider } from '@ui5/webcomponents-react';

const LiveVideoFeed = () => {
  return (
    <div style={{ width: '80%', height: '95%', backgroundColor: 'black', position: 'relative' }}>
      <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '24px', color: 'white' }}>
        LiveVideoFeed
      </span>
      {/* Implement video feed here */}
    </div>
  );
};

const LicensePlateComponent = ({ vehicleType, detectedImage, plateNumber, updatedNumber }) => {
  const [number, setNumber] = React.useState(plateNumber);
  const [inputValue, setInputValue] = React.useState(updatedNumber);

  const handleUpdateClick = () => {
    setNumber(inputValue);
    console.log('Updated Number:', inputValue);
  };

  const handleApproveClick = () => {
    console.log('Approved Number:', number);
  };

  return (
    <FlexBox direction="Column" style={{ width: '40%', padding: '10px', height: '92%' }}>
      <FlexBox alignItems="Center" style={{ marginBottom: '20px', overflow: 'hidden' }}>
        <Text style={{ fontSize: '25px', fontWeight: 'bold' }}>
          {vehicleType || 'Vehicle type: <type>'}
        </Text>
      </FlexBox>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '4px', height: 'calc(100% - 60px)', overflow: 'auto' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '200px', // Keep the height of the rectangular box the same
          
          borderRadius: '8px',
          marginBottom: '10px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src={detectedImage} alt="Detected License Plate" style={{
            width: '100%', // Adjust this percentage to make the image smaller
            height: '80%', // Maintain aspect ratio
            objectFit: 'contain', // Ensure the image does not stretch
            margin: 'auto'
          }} />
        </div>
        <Text style={{ display: 'block', marginTop: '10px', fontSize: '30px', fontWeight: 'bold' }}>
          License Plate: {number}
        </Text>
        <FlexBox direction="Column" style={{ marginTop: '10px', width: '100%' }}>
          <FlexBox direction="Row" justifyContent="Center" style={{ marginBottom: '10px', width: '100%' }}>
            <Button
              onClick={handleApproveClick}
              style={{
                backgroundColor: 'green', // Green background
                color: 'white', // White text
                padding: '8px 16px', // Smaller rectangular size
                borderRadius: '4px', // Optional: Rounded corners
                border: 'none', // Remove default border
                fontSize: '14px', // Optional: Smaller font size
                fontWeight: 'bold', // Optional: Bold text
                cursor: 'pointer' // Change cursor to pointer on hover
                
              }}
            >
              Approve
            </Button>
          </FlexBox>
          <FlexBox direction="Column" style={{ width: '100%' }}>
            <FlexBox direction="Row" alignItems="Center" style={{ marginBottom: '10px', width: '100%' }}>
              <Text style={{ flex: 1, marginRight: '10px', lineHeight: '36px', fontSize: '18px', fontWeight: 'bold' }}>Update number:</Text>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{
                  flex: 1,
                  marginLeft: '10px',
                  padding: '10px',
                  fontSize: '16px',
                  outline: 'none',
                }}
              />
            </FlexBox>
            <Button
              onClick={handleUpdateClick}
              style={{
                backgroundColor: 'green', // Green background
                color: 'white', // White text
                padding: '8px 16px', // Shorter rectangular size, same as Approve button
                borderRadius: '4px', // Rounded corners
                border: 'none', // Remove default border
                fontSize: '14px', // Same font size as Approve button
                fontWeight: 'bold', // Bold text
                cursor: 'pointer', // Change cursor to pointer on hover
                marginTop: '10px', // Margin to separate from other elements
              }}
            >
              Update
            </Button>
          </FlexBox>
        </FlexBox>
      </div>
    </FlexBox>
  );
};

const App = () => {
  const [plateNumber, setPlateNumber] = React.useState('<<number>>'); // Initial placeholder
  const vehicleType = ''; // Initially empty, will be updated after uploading the live feed
  const detectedImage = '/license_plate_gray_2.jpg'; // Path relative to the public folder
  const updatedNumber = 'XYZ789'; // Example updated number after detection

  // Simulate detection process (for demonstration purposes)
  React.useEffect(() => {
    // This would be triggered by the actual detection process
    setPlateNumber(updatedNumber);
  }, [updatedNumber]);

  return (
    <ThemeProvider>
      <FlexBox direction="Row" style={{ height: '100vh', width: '100vw', alignItems: 'stretch' }}>
        <LiveVideoFeed />
        <LicensePlateComponent
          vehicleType={vehicleType}
          detectedImage={detectedImage}
          plateNumber={plateNumber}
          updatedNumber={updatedNumber}
        />
      </FlexBox>
    </ThemeProvider>
  );
};

export default App;
