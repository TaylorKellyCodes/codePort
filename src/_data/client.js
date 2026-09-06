module.exports = {
    name: "Triangle Web Design",
    email: "taylor@trianglewebdesign.com",
    phoneForTel: "+19195616223",
    phoneFormatted: "(919) 561-6223",
    // Service-area business, no public street address. Templates render city/region
    // only; the GBP link (socials.google) is the canonical "find us" reference.
    address: {
        city: "Raleigh",
        state: "NC",
        country: "US",
    },
    socials: {
        facebook: "https://www.facebook.com/TriangleWebDesignRaleigh/",
        linkedin: "https://www.linkedin.com/in/taylor-kelly-codes/",
        google: "https://maps.app.goo.gl/oy3sDSv89Kwxt28T7",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://trianglewebdesign.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
