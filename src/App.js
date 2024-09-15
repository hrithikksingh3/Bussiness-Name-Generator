import React, { useState } from 'react';

function App() {
  // State to store the input words and the generated business names
  const [adjectives, setAdjectives] = useState("");
  const [shopTypes, setShopTypes] = useState("");
  const [descriptors, setDescriptors] = useState("");
  const [generatedName, setGeneratedName] = useState("");

  // Function to generate a random business name
  const generateName = () => {
    // Split input words into arrays
    const adjArray = adjectives.split(',').map(word => word.trim());
    const shopArray = shopTypes.split(',').map(word => word.trim());
    const descArray = descriptors.split(',').map(word => word.trim());

    // Generate random numbers to select words
    const ran1 = Math.floor(Math.random() * adjArray.length);
    const ran2 = Math.floor(Math.random() * shopArray.length);
    const ran3 = Math.floor(Math.random() * descArray.length);

    // Set the generated business name
    setGeneratedName(`${adjArray[ran1]} ${shopArray[ran2]} ${descArray[ran3]}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Business Name Generator</h1>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Enter adjectives (e.g., Crazy, Amazing, Fire):</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Adjectives"
          value={adjectives}
          onChange={(e) => setAdjectives(e.target.value)}
        />

        <label style={styles.label}>Enter shop types (e.g., Engine, Foods, Garments):</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Shop types"
          value={shopTypes}
          onChange={(e) => setShopTypes(e.target.value)}
        />

        <label style={styles.label}>Enter other descriptors (e.g., Bros, Limited, Hub):</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Descriptors"
          value={descriptors}
          onChange={(e) => setDescriptors(e.target.value)}
        />

        <button style={styles.button} onClick={generateName}>
          Generate Business Name
        </button>

        {generatedName && (
          <div style={styles.result}>
            <h4>Generated Business Name:</h4>
            <h1><p>{generatedName}</p></h1>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
  inputContainer: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '2px',
    // fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default App;
