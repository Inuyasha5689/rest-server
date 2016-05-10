var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promotionSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: false,
        default: ""
    },
    price: {
        type: Currency,
        required: true
    },
    description: {
        type: String,
        requited:true
    }
},
{
        timestamps: true
});


//the schema is useless so for
//we need to create a model using it
var Promotions = mongoose.model('Promotion', promotionSchema);

//
module.exports = Promotions;
