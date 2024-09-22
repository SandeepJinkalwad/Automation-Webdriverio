import { $, expect, browser } from "@wdio/globals";
describe(' IframeT', () => {
    it('Verify the iframe', async() => {

        await browser.url('http://practice.sdetunicorns.com/iframe-sample/');

        const iframe=await $('#advanced_iframe');

        await browser.switchToFrame(iframe);
        const logo = await $('.hfe-site-logo-container');
        await logo.isExisting();

        await browser.switchToParentFrame();
        await expect($('h1.zak-page-title')).toHaveText('IFrame Sample');
      // await expect(logo).isExisting();
    


        
    });
});