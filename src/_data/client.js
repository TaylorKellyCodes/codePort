module.exports = {
    name: "Triangle Web Designs",
    email: "taylor@trianglewebdesign.com",
    phoneForTel: "919-561-6223",
    phoneFormatted: "(919) 561-6223",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Raleigh",
        state: "NC",
        zip: "27604",
        country: "US",
        mapLink: "https://maps.app.goo.gl/keBafLeB1AefRRf56",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
