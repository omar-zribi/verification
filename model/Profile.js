const mongoose=Require('mongoose');
const Schema=mongoose.Schema;
const Profile=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phoneNumber:Number,
    address:String,
    city:String,
    zipCode:String,
    country:String,
    dateOfBirth:String,
    permis:Boolean,
    drivingLicenseTypes:String,
    drivingLicenseDate:String,
    Education:String,
    degree:String,
    yearDegree:String,
    workExperience:Boolean,
    yearsWorkExperience:Number,
    holdPositionNow:Boolean,
    holdPosition:String,
    KeySkills:String,
    languages:String,
    languageLevel:Number,
    freeExpression:String
    });
    // await Profile.save()
    module.exports = mongoose.model('profile', Profile)