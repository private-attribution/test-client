// global.d.ts
// Declare IPAExperiment if it's a global object
declare global {
  interface Window {
    createAndSubmitConversionReport: (conversionValue: number) => void;
  }
  var IPAExperiment: {
    createAndSubmitConversionReport: (conversionValue: number) => void;
  };
}
export {};
