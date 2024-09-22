import contactpage from '../pages/Contact-Page'
describe('Contact page', () => {
    it('Fill the Contact Info and assert success Message', async() => {

        await contactpage.open();
        //click on contact button
        await contactpage.contactbtn.click();
        //Add the Contact information
        await contactpage.nametxt.addValue("Sandeep Jinkalwad");
        //email
        await contactpage.emailtxt.addValue("sandeepjinkalwad181@gmail.com");
        //Phone
       await contactpage.phoneno.addValue("8208538843");
        //message
       await contactpage.messagetxt.addValue("Hi myself sandeep jinkalwad");
        //submit
       await contactpage.submitbtn.click();
        //Text
        const text=await contactpage.text;
        //const msg=text.getText();
        await expect(text).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
        
    });
});