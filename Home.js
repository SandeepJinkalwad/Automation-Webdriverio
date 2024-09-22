import HomePage from '../pages/home-page';

describe('Home', () => {

    it('Open URL & Assert Title', async() => {
       await HomePage.open();

        //AssertTitle
       await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns'); 
    });

    it('Open About & Assert URL', async() => {

        await browser.url('https://practice.sdetunicorns.com/about')

        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/')
        
    });

    it(' Click on the get Started button & assert url contains get-started text', async() => {

     await HomePage.open();
        //Click on get Started Button
        await HomePage.getstartbtn.click();
        //Check for the get-started text in Url
        await expect(browser).toHaveUrl(expect.stringContaining('#get-started'));
        
    });
    it(' Click Logo button & assert url does not contains get-started text', async() => {

     await HomePage.open();
        //Click on get Started Button
        await HomePage.logobtn.click();
        //Check for the get-started text in Url
        await expect(browser).not.toHaveUrl(expect.stringContaining('#get-started'));
        
    });
    it(' Find heading Text & assert the text', async() => {

        await HomePage.open();
        //Click on get Started Button
        const headingel=await HomePage.headingel.getText();
        //Check for the get-started text in Url
        //const headingtext=await headingel.getText();
        //await expect(browser).not.toHaveUrl(expect.stringContaining('#get-started'));
      //  await expect(headingel).toHaveText('Think different. Make different.');
        await expect(headingel).toEqual('Think different. Make different.')
        
    });
});