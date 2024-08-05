import conversionMappings from '../jsonfiles/Conversion_Mapping.json';
import axios from 'axios';

const calculateEmissions = (inputs) => {
  console.log("Conversion mappings:", conversionMappings);
  console.log("Inputs:", inputs);

  if (!conversionMappings || !conversionMappings.conversionMappings) {
    console.error("Conversion mappings are not defined.");
    return { total: 0, mappedValues: {} };
  }

  if (!inputs || typeof inputs !== 'object') {
    console.error("Inputs are not defined or not an object.");
    return { total: 0, mappedValues: {} };
  }

  const mappings = conversionMappings.conversionMappings;
  let total = 0;
  const mappedValues = {};

  for (const [key, value] of Object.entries(inputs)) {
    const categoryMapping = mappings[key];
    if (categoryMapping) {
      mappedValues[key] = categoryMapping[value] || 0;
      total += mappedValues[key];
    } else {
      console.warn(`No mapping found for key: ${key}`);
      mappedValues[key] = 0; // Default to 0 if no mapping is found
    }
  }

  console.log("Total emissions calculated:", total);
  console.log("Mapped values:", mappedValues);
  return { total, mappedValues };
};

const addEmissionRecord = async (inputs, totalEmissions) => {
  try {
    const response = await axios.post('http://localhost:5000/api/emissions/add', { ...inputs, totalEmissions });
    console.log("Emission record added:", response.data);
  } catch (error) {
    console.error("Error adding emission record:", error);
  }
};

const handleCalculateAndAdd = async (inputs) => {
  const { total, mappedValues } = calculateEmissions(inputs); // Destructure total and mappedValues
  console.log("Mapped Values:", mappedValues); // Log the mapped values

  try {
    const response = await addEmissionRecord(mappedValues, total);
    console.log("Emission record added:", response);
  } catch (error) {
    console.error("Failed to add emission record:", error);
  }
};

export default handleCalculateAndAdd;
