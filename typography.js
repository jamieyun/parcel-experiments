import Typography from "typography";
//https://kyleamathews.github.io/typography.js/
const typography = new Typography({
    baseFontSize:"18px",
    baseLineHeight: 1.666,
    googleFonts:[
        {
            name:"Montserrat",
            styles:["700"]
        },{
            name: "Open Sans",
            styles:["400"]
        }
    ],
    headerFontFamily:[
        "Montserrat","Helvetica Neue","sans-serif"
    ],
    bodyFontFamily:["Open Sans","sans-serif"]
});

//typography 를 css 로 변경
typography.injectStyles()

export default typography;
