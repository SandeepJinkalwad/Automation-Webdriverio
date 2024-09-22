import blogpage from "../pages/Blog-Page";
describe('Blog', () => {
    it('Get the list og blog and assert the list', async() => {

        await blogpage.open();
        //Get all the list of Recent Post Element
       const recentPostList= await blogpage.bloglist;;
        //loop the list and length to be greater than 10
       for(const item of recentPostList){
        const text = await item.getText();
        await expect(text.length).toBeGreaterThan(10);
       }
       //Lenth of List Should be 5
       await expect(recentPostList).toHaveLength(5)
        
    });
});
