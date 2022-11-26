import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {postPage} from "../../../page-objects/post-page";
import {faker} from '@faker-js/faker';

let title;
let description;
const postPageObj = new postPage();

And(/^user types a title for random post step$/, function() {
    const title = faker.word.noun({min: 2, max: 2});
    postPageObj.typeTextAreaPostTitle(title);
});

And(/^user clicks on google metadata content$/, function() {
    postPageObj.clickToGoogleMetadataOption();
})

And(/^user types a title less than 60 characters$/, function() {
    title = faker.word.adjective(40);
    postPageObj.typeGoogleMetadataTitle(title);
})

And(/^user types a title greater than 60 characters$/, function() {
    title = faker.word.adjective(61);
    postPageObj.typeGoogleMetadataTitle(title);
})

And(/^user types a description less than 145 characters$/, function() {
    description = faker.word.noun(100);
    postPageObj.typeGoogleMetadataDescription(description);
})

And(/^user types a description greater than 145 characters$/, function() {
    description = faker.word.noun(146);
    postPageObj.typeGoogleMetadataDescription(description);
})

And(/^user types a text into url field$/, function() {
    const domain = faker.word.noun(1);
    postPageObj.typeGoogleMetadataUrl(domain);
})

And(/^user clicks on text area description field$/, function() {
    postPageObj.clickTextAreaMetadataGoogleDescription();
})

And(/^user types an url into url field$/, function() {
    const url =  faker.internet.url();
    postPageObj.typeGoogleMetadataUrl(url);
})

And(/^user types an email into url field$/, function() {
    const email = faker.internet.email();
    postPageObj.typeGoogleMetadataUrl(email);
})

And(/^user types an ip 4 version into url field$/, function() {
    const ip = faker.internet.ipv4();
    postPageObj.typeGoogleMetadataUrl(ip);
})

And(/^user types a domain path into url field$/, function() {
    const domainPath = faker.internet.domainWord()
    postPageObj.typeUrlInput(domainPath);
})

And(/^user types an url into url field out of google metadata$/, function() {
    const url = faker.internet.url()
    postPageObj.typeUrlInput(url);
})

Then(/^metadata google title is registered properly$/, function() {
    postPageObj.verifyHelperTextForMetadataGoogleTitle().should(($p) => {
        const text = $p.text();
        expect(text).to.include('Recommended: 60 characters. You’ve used ' + title.length);
    })
})

And(/^metadata google title is green$/, function(){
    postPageObj.verifyDivInputGoogleMetadata(1).should(($div) => {
        expect($div.hasClass('form-group')).to.be.true
    })
})

And(/^metadata google title is red$/, function(){
    postPageObj.verifyDivInputGoogleMetadata(1).should(($div) => {
        expect($div.hasClass('form-group')).to.be.true
    })
})

Then(/^metadata google description is registered properly$/, function() {
    postPageObj.verifyHelperTextForMetadataGoogleDescription().should(($p) => {
        const text = $p.text();
        expect(text).to.include('Recommended: 145 characters. You’ve used ' + description.length)
    })
})

And(/^metadata google description is green$/, function(){
    postPageObj.verifyDivInputGoogleMetadata(2).should(($div) => {
        expect($div.hasClass('form-group')).to.be.true
    })
})

And(/^metadata google description is red$/, function(){
    postPageObj.verifyDivInputGoogleMetadata(2).should(($div) => {
        expect($div.hasClass('form-group')).to.be.true
    })
})

Then(/^metadata google url is registered properly$/, function() {
    postPageObj.verifyHelperTextForMetadataGoogleUrl().should(($p) => {
        const text = $p.text();
        expect(text).to.include('');
    })
})

Then(/^metadata google url is registered wrong$/, function() {
    postPageObj.verifyHelperTextForMetadataGoogleUrl().should($p => {
        const text = $p.text();
        expect(text).to.include('Please enter a valid URL');
    })
})

Then(/^comes publishing page title up right now$/, function() {
    postPageObj.verifyTitlePublishingPage().should(($div) => {
        const text = $div.text();
        expect(text).to.be.eq('Ready, set, publish.');
    })
})

Then(/^verify alert banner$/, function() {
    expect(postPageObj.verifyAlertBanner()).to.be.undefined
})