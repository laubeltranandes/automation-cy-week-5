import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {postPage} from "../../../page-objects/post-page";
import {faker} from '@faker-js/faker';

const postPageObj = new postPage();
