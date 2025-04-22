
import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';

const CondoseCalculator = () => {
  const [binSize, setBinSize] = useState<number>(1000);
  const [molassesKg, setMolassesKg] = useState<number>(0);
  const [magnesiumOxideKg, setMagnesiumOxideKg] = useState<number>(0);
  const [limeFlourKg, setLimeFlourKg] = useState<number>(0);
  const [healthyCowKg, setHealthyCowKg] = useState<number>(0);
  const [waterKg, setWaterKg] = useState<number>(0);
  const [mixPerCow, setMixPerCow] = useState<number>(0);
  
  // Calculated values
  const [recommendedWater, setRecommendedWater] = useState<number>(0);
  const [totalInsoluble, setTotalInsoluble] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [ratioWarning, setRatioWarning] = useState<boolean>(false);
  const [maxWeightWarning, setMaxWeightWarning] = useState<boolean>(false);
  
  // Calculate values for the results table
  const [totalInsolubleGrCowDay, setTotalInsolubleGrCowDay] = useState<number>(0);
  const [totalInsolublePerc, setTotalInsolublePerc] = useState<number>(0);
  const [magnesiumOxideGrCowDay, setMagnesiumOxideGrCowDay] = useState<number>(0);
  const [magnesiumOxidePerc, setMagnesiumOxidePerc] = useState<number>(0);
  const [limeFlourGrCowDay, setLimeFlourGrCowDay] = useState<number>(0);
  const [limeFlourPerc, setLimeFlourPerc] = useState<number>(0);
  const [healthyCowGrCowDay, setHealthyCowGrCowDay] = useState<number>(0);
  const [healthyCowPerc, setHealthyCowPerc] = useState<number>(0);
  const [waterGrCowDay, setWaterGrCowDay] = useState<number>(0);
  const [waterPerc, setWaterPerc] = useState<number>(0);
  const [molassesGrCowDay, setMolassesGrCowDay] = useState<number>(0);
  const [molassesPerc, setMolassesPerc] = useState<number>(0);
  const [molassesRatio, setMolassesRatio] = useState<number>(0);

  // Helper function to round to 2 decimal places
  const round2dec = (num: number): number => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  };

  // Update calculations when inputs change
  useEffect(() => {
    // Calculate total insoluble
    const insolubleTotal = magnesiumOxideKg + limeFlourKg + healthyCowKg;
    setTotalInsoluble(insolubleTotal);
    
    // Calculate recommended water amount (10% of molasses)
    const recWater = molassesKg * 0.1;
    setRecommendedWater(recWater);
    
    // Calculate total weight
    const totalWeight = molassesKg + insolubleTotal + waterKg;
    setTotal(totalWeight);
    
    // Check if total exceeds bin size
    setMaxWeightWarning(totalWeight > binSize);
    
    // Calculate ratio and check warning
    const ratio = insolubleTotal > 0 ? molassesKg / insolubleTotal : 0;
    setMolassesRatio(ratio);
    setRatioWarning(ratio < 6 && insolubleTotal > 0);
    
    // Calculate percentages and g/cow/day values if mixPerCow is set
    if (mixPerCow > 0 && totalWeight > 0) {
      const totalInsPerc = insolubleTotal / totalWeight;
      setTotalInsolublePerc(totalInsPerc);
      setTotalInsolubleGrCowDay(round2dec(totalInsPerc * mixPerCow));
      
      const magOxPerc = magnesiumOxideKg / totalWeight;
      setMagnesiumOxidePerc(magOxPerc);
      setMagnesiumOxideGrCowDay(round2dec(magOxPerc * mixPerCow));
      
      const limePerc = limeFlourKg / totalWeight;
      setLimeFlourPerc(limePerc);
      setLimeFlourGrCowDay(round2dec(limePerc * mixPerCow));
      
      const healthyCowPerc = healthyCowKg / totalWeight;
      setHealthyCowPerc(healthyCowPerc);
      setHealthyCowGrCowDay(round2dec(healthyCowPerc * mixPerCow));
      
      const waterPercValue = waterKg / totalWeight;
      setWaterPerc(waterPercValue);
      setWaterGrCowDay(round2dec(waterPercValue * mixPerCow));
      
      const molassesPercValue = molassesKg / totalWeight;
      setMolassesPerc(molassesPercValue);
      setMolassesGrCowDay(round2dec(molassesPercValue * mixPerCow));
    }
  }, [molassesKg, magnesiumOxideKg, limeFlourKg, healthyCowKg, waterKg, mixPerCow, binSize]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="p-6">
        <div className="appHeader mb-6">
          <h3 className="text-2xl font-bold text-center text-wsf-blue-dark mb-4">Conedose Recipe Calculator</h3>
          <div className="flex justify-center items-center">
            <p className="text-center">Choose your cone size</p>
            <select 
              className="ml-2 border rounded px-3 py-1"
              value={binSize} 
              onChange={(e) => setBinSize(Number(e.target.value))}
            >
              <option value={1000}>1 ton</option>
              <option value={2000}>2 tonnes</option>
            </select>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="inputs">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left"></th>
                  <th className="text-center">Kg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Molasses</td>
                  <td className="py-2">
                    <input 
                      type="number" 
                      className="w-full border rounded px-2 py-1"
                      value={molassesKg || ''}
                      onChange={(e) => setMolassesKg(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="py-2">Magnesium Oxide</td>
                  <td className="py-2">
                    <input 
                      type="number" 
                      className="w-full border rounded px-2 py-1"
                      value={magnesiumOxideKg || ''}
                      onChange={(e) => setMagnesiumOxideKg(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="py-2">Lime Flour</td>
                  <td className="py-2">
                    <input 
                      type="number" 
                      className="w-full border rounded px-2 py-1"
                      value={limeFlourKg || ''}
                      onChange={(e) => setLimeFlourKg(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="py-2">HealthyCow 80/20</td>
                  <td className="py-2">
                    <input 
                      type="number" 
                      className="w-full border rounded px-2 py-1"
                      value={healthyCowKg || ''}
                      onChange={(e) => setHealthyCowKg(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="py-2">Water</td>
                  <td className="py-2">
                    <input 
                      type="number" 
                      className="w-full border rounded px-2 py-1"
                      value={waterKg || ''}
                      onChange={(e) => setWaterKg(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600" colSpan={2}>
                    Your water inclusion should be around {recommendedWater.toFixed(0)}kgs
                  </td>
                </tr>
                <tr>
                  <td className="py-2">g of mix per day to feed cow</td>
                  <td className="py-2">
                    <input 
                      type="number" 
                      className="w-full border rounded px-2 py-1"
                      value={mixPerCow || ''}
                      onChange={(e) => setMixPerCow(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td 
                    className={`py-2 ${ratioWarning ? 'text-red-500 font-bold' : ''}`}
                    colSpan={2}
                  >
                    Non solubles/Molasses ratio 1/{totalInsoluble > 0 ? round2dec(molassesKg/totalInsoluble) : 0}kgs
                  </td>
                </tr>
                <tr>
                  <td className="py-2" colSpan={2}>
                    Total Mix Weight {total}kgs
                  </td>
                </tr>
                <tr>
                  <td 
                    className={`py-2 text-gray-600 ${ratioWarning ? 'text-red-500' : ''}`}
                    colSpan={2}
                  >
                    <br />
                    <br /> 
                    Mineral Ratio - the total mix can not exceed 1 part non soluable minerals to 6 parts Molasses. 
                    Ratios lower than this can not be carried by the molasses and blockages and settling of minerals are likely.
                    <br />
                    <br /> 
                    i.e. for every 25KG bag of Mag Oxide or Lime Flour the mix must contain 150KGs of Molasses.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Outputs */}
          <div className="outputs">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-wsf-blue text-white">
                  <th colSpan={3} className="py-2 text-center">Your Recipe Mix</th>
                </tr>
                <tr className="bg-gray-100">
                  <th className="py-2 px-2 text-left border-b border-gray-300"></th>
                  <th className="py-2 px-2 text-center border-b border-gray-300">g/cow</th>
                  <th className="py-2 px-2 text-center border-b border-gray-300">%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-2 px-2 border-b border-gray-300 font-medium">Insolubles</td>
                  <td className="py-2 px-2 text-center border-b border-gray-300">{round2dec(totalInsolubleGrCowDay)}</td>
                  <td className="py-2 px-2 text-center border-b border-gray-300">{round2dec(totalInsolublePerc * 100)}%</td>
                </tr>
                <tr>
                  <td className="py-2 px-2 border-b border-gray-300">Magnesium Oxide</td>
                  <td className="py-2 px-2 text-center border-b border-gray-300">{round2dec(magnesiumOxideGrCowDay)}</td>
                  <td className="py-2 px-2 text-center border-b border-gray-300">{round2dec(magnesiumOxidePerc * 100)}%</td>
                </tr>
                <tr>
                  <td className="py-2 px-2 border-b border-gray-300">Lime Flour</td>
                  <td className="py-2 px-2 text-center border-b border-gray-300">{round2dec(limeFlourGrCowDay)}</td>
                  <td className="py-2 px-2 text-center border-b border-gray-300">{round2dec(limeFlourPerc * 100)}%</td>
                </tr>
                <tr>
                  <td className="py-2 px-2 border-b border-gray-300">Healthy Cow 80/20</td>
                  <td className="py-2 px-2 text-center border-b border-gray-300">{round2dec(healthyCowGrCowDay)}</td>
                  <td className="py-2 px-2 text-center border-b border-gray-300">{round2dec(healthyCowPerc * 100)}%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-2 border-b border-gray-300 font-medium">Water</td>
                  <td className="py-2 px-2 text-center border-b border-gray-300">{round2dec(waterGrCowDay)}</td>
                  <td className="py-2 px-2 text-center border-b border-gray-300">{round2dec(waterPerc * 100)}%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-2 border-b border-gray-300 font-medium">Molasses</td>
                  <td className="py-2 px-2 text-center border-b border-gray-300">{round2dec(molassesGrCowDay)}</td>
                  <td className="py-2 px-2 text-center border-b border-gray-300">{round2dec(molassesPerc * 100)}%</td>
                </tr>
                <tr className="bg-wsf-blue-dark text-white">
                  <td className="py-2 px-2">Total</td>
                  <td className="py-2 px-2 text-center">{mixPerCow}</td>
                  <td className="py-2 px-2 text-center">100%</td>
                </tr>
                {maxWeightWarning && (
                  <tr>
                    <td colSpan={3} className="py-2 px-2 text-red-500">
                      *The maximum weight of mix that can be mixed in the Conedose system is {binSize}kg
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CondoseCalculator;
