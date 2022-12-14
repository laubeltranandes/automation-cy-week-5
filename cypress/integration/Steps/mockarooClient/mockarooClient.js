const aPrioriData = require("../../../../config/a-priori-data.json");
var Mockaroo = require('mockaroo');

export class MockarooClient {

    amount = 1;
    client = new Mockaroo.Client({ apiKey: '7b77dd30' });

    MockarooClient(){}

    async getDataPoolFromAPI() {
        return this.client.generate({
            count: this.amount,
            schema: 'pseudo-aleatorio'
        })
    }

    async getDataPoolRandom() {
        let random = this.getRandom(0, aPrioriData.length);
        return aPrioriData[random];
    }

    getRandom(min, max) {
        let random = Math.floor(Math.random() * (max - min)) + min;
        return random;
    }
}