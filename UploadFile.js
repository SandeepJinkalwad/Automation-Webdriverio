//const path=require('node:path')
import path from 'node:path'

describe('Upload Test', () => {
    it('Simple Upload Test', async() => {
        //open URL
        await browser.url('https://the-internet.herokuapp.com/upload');
        //Store the test file path
        const filepath=path.join(__dirname,'../data/Photo.png');
        //upload test file
        const remoteFilePath=await browser.uploadfile(filepath);
        //Set the file path value in the input field 
        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();

        //assert the 
        await expect($('h3')).toHaveText('File Uploaded!');
    });
    it('should upload a file', async () => {
        await browser.url('https://the-internet.herokuapp.com/upload')

       // const filepath=//path.join(__dirname,'../data/Photo.png');
         const filepath = 'C:\\Users\\sande\\wdio-course\\Test\\data\\Photo.png'
        const remoteFilePath = await browser.uploadFile(filepath)
    
        await $('#file-upload').setValue(remoteFilePath)
        await $('#file-submit').click()
        await expect($('h3')).toHaveText('File Uploaded!');
    });
    it.only('should upload a file', async () => {
        await browser.url('/cart/');

       // const filepath=//path.join(__dirname,'../data/Photo.png');
         const filepath = 'C:\\Users\\sande\\wdio-course\\Test\\data\\Photo.png';
        const remoteFilePath = await browser.uploadFile(filepath);
    await browser.execute("document.querySelector('#upfile_1').className=''");
        await $('#upfile_1').setValue(remoteFilePath);
        await $('#upload_1').click();
        await expect($('//label[@class="file_messageblock_fileheader_label"]')).toHaveText('File Photo.png uploaded successfully');
    });
});