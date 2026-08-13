module.exports = {
    name: "Triangle Web Design",
    email: "taylor@trianglewebdesign.com",
    phoneForTel: "+19195616223",
    phoneFormatted: "(919) 561-6223",
    address: {
        lineOne: "3204 Livia Cir",
        city: "Raleigh",
        state: "NC",
        zip: "27604",
        country: "US",
        mapLink: "https://share.google/0l32PH81aqyNcIYwd",
    },
    socials: {
        facebook: "https://www.facebook.com/TriangleWebDesignRaleigh/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://trianglewebdesign.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
