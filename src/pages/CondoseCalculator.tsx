
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CondoseCalculator = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 md:pt-28">
        <div className="container-custom py-12 md:py-20">
          {/* The following container renders the provided content as raw HTML. */}
          <div className="bg-white rounded-lg shadow p-6">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <div class="element-wrap" data-label="Text Block" id="e-1564877088503" data-icon="gpicon-textblock" data-ver="1" data-id="1564877088503"><div class="elm text-edit"></div></div><div data-label="Row" class="gf_row" id="r-1564877106964" data-icon="gpicon-row" data-id="1564877106964"><div class="gf_column gf_col-lg-12" id="c-1564877106931" data-id="1564877106931"><div data-label="Liquid" id="m-1564877112276" class="module-wrap" data-icon="gpicon-liquid" data-ver="1" data-id="1564877112276" data-name="condose calculator old" style="background-image: none; min-height: 50px;"><div class="module gf_module- gf_module--lg gf_module--md gf_module--sm gf_module--xs ">
<div id="conedoseRecipeApp" style="display:none">
<div class="appHeader">
<h3>Conedose Recipe Calculator</h3>
<p style="text-align:center;">Choose your cone size <select v-model="binSize"><option value="1000">1 ton</option>
<option value="2000">2 tonnes</option></select><span class="selectArrow">▼</span></p>
</div>
<br style="clear:both;"><div class="inputs"><table class="inputTable">
<thead><tr>
<th class=""></th>
<th class="" style="text-align: center; padding:0px">Kg</th>
</tr></thead>
<tbody>
<tr>
<td class="label">Molasses</td>
<td class="inputCell"><input type="number" size="3" v-model.number="MolassesKgMix"></td>
</tr>
<tr>
<td class="label">Magnesium Oxide</td>
<td class="inputCell"><input type="number" size="3" v-model.number="MagnesiumOxideKgMix"></td>
</tr>
<tr>
<td class="label">Lime Flour</td>
<td class="inputCell"><input size="3" type="number" v-model.number="LimeFlourKgMix"></td>
</tr>
<tr>
<td class="label">HealthyCow 80/20</td>
<td class="inputCell"><input size="3" type="number" v-model.number="HealthyCowKgMix"></td>
</tr>
<tr>
<td class="label">Water</td>
<td class="inputCell"><input size="3" type="number" v-model.number="WaterKg"></td>
</tr>
<tr><td class="info" colspan="2">Your water inclusion should be around&lt;%recWater.toFixed(0)%&gt;kgs</td></tr>
<tr>
<td class="label">g of mix per day to feed cow</td>
<td class="inputCell"><input size="3" type="number" v-model="mixPerCow"></td>
</tr>
<tr><td v-bind:class="{ ratioWarning: ratioWarning }" colspan="2">Non solubles/Molasses ratio 1/&lt;%round2dec(parseFloat(MolassesKgMix)/parseFloat(totalInsoluble))%&gt;kgs</td></tr>
<tr><td class="" colspan="2">Total Mix Weight&lt;%total%&gt;kgs</td></tr>
<tr><td class="info" v-bind:class="{ ratioWarning: ratioWarning }" colspan="2">
<br><br> Mineral Ratio - the total mix can not exceed 1 part non soluable minerals to 6 parts Molasses. Ratios lower than this can not be carried by the molasses and blockages and settling of minerals are likely.<br><br> i.e. for every 25KG bag of Mag Oxide or Lime Flour the mix must contain 150KGs of Molasses.</td></tr>
</tbody>
</table></div>
<div class="outputs">
<table class="recipe ">
<thead>
<tr class="title"><th colspan="3">Your Recipe Mix</th></tr>
<tr>
<th></th>
<th>g/cow</th>
<th>%</th>
</tr>
</thead>
<tbody>
<tr class="subtotal">
<td>Insolubles</td>
<td>&lt;%round2dec(totalInsolublegrCowDay)%&gt;</td>
<td>&lt;%round2dec(totalInsolublePerc*100)%&gt;%</td>
</tr>
<tr>
<td>Magnesium Oxide</td>
<td>&lt;%round2dec(MagnesiumOxidegrCowDay)%&gt;</td>
<td>&lt;%round2dec(MagnesiumOxidePerc*100)%&gt;%</td>
</tr>
<tr>
<td>Lime Flour</td>
<td>&lt;%round2dec(LimeFlourgrCowDay)%&gt;</td>
<td>&lt;%round2dec(LimeFlourPerc*100)%&gt;%</td>
</tr>
<tr>
<td>Healthy Cow 80/20</td>
<td>&lt;%round2dec(HealthyCowgrCowDay)%&gt;</td>
<td>&lt;%round2dec(HealthyCowPerc*100)%&gt;%</td>
</tr>
<tr class="subtotal">
<td>Water</td>
<td>&lt;%round2dec(WatergrCowDay)%&gt;</td>
<td>&lt;%round2dec(WaterPerc*100)%&gt;%</td>
</tr>
<tr class="subtotal">
<td>Molasses</td>
<td>&lt;%round2dec(MolassesgrCowDay)%&gt;</td>
<td>&lt;%round2dec(MolassesPerc*100)%&gt;%</td>
</tr>
<tr class="total">
<td>Total</td>
<td>&lt;%mixPerCow%&gt;</td>
<td>100%</td>
</tr>
<tr><td colspan="3" style="color:red; border:none;"><span class="maxWeightWarning warningMessage">*The maximum weight of mix that can be mixed in the Conedose system is &lt;%binSize%&gt;kg</span></td></tr>
</tbody>
</table>
<br style="clear:both;">
</div>
</div>
<br style="clear:both;"><script src="//cdn.shopify.com/s/files/1/0248/2982/1010/t/1/assets/vue.js?68734" type="text/javascript"></script><script src="//cdn.shopify.com/s/files/1/0248/2982/1010/t/1/assets/conedoseOld.js" type="text/javascript"></script>
</div></div></div></div>
                `,
              }}
            />
            <div className="text-gray-500 text-xs mt-6">
              Note: This calculator is powered by external scripts and may require permissions for full functionality.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CondoseCalculator;
