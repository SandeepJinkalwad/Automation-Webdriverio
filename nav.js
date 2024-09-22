import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';
describe('Navigate Menu', () => {
    it('Get the text of all the menu item & assert them', async() => {
allureReporter.addFeature("Navigation");
allureReporter.addSeverity("Critical");
        await HomePage.open();

        const validationlink=[
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        const actuallink=[];

        const navlink= await HomePage.NavComponent.linksNavMenu;

        for(const link of navlink){
            actuallink.push(await link.getText());
        }

        await expect(validationlink).toEqual(actuallink);
        
    });
});