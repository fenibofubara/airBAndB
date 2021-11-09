module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandGreen:'#486437',
        brandYellow:'#9B8536',
        brandBoxBlue:'#E7FFF5'
        
      },
      backgroundImage: {
        'banner': "url('/images/banner.png')",
        'howVector': "url('/images/how-vector.png')",
        'authBanner': "url('/images/bannerRegister.png')",
        'otherBackGround': "url('/images/propertyInvest/bg.png')",
       },
       fontSize: {
        bannerText: '5rem',
       },
       margin: {
        pfx: '75px',
       
       }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
