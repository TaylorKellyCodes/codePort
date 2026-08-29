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
        mapLink: "https://www.google.com/maps/search/?api=1&query=3204+Livia+Cir,+Raleigh,+NC+27604",
    },
    socials: {
        facebook: "https://www.facebook.com/TriangleWebDesignRaleigh/",
        linkedin: "https://www.linkedin.com/in/taylor-kelly-codes/",
        // TODO(seo): confirm this resolves to the Google Business Profile. It is the
        // share link already used in the homepage schema `sameAs`. Prefer the full
        // https://www.google.com/maps/place/... profile URL if you have it.
        google: "https://share.google/tzpRW8fE9C0wvoCJM",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://trianglewebdesign.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
