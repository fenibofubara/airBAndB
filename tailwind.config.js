module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandGreen:'#486437',
        brandYellow:'#9B8536',
        
      },
      backgroundImage: {
        'banner': "url('/images/banner.png')",
        'footer-texture': "url('/img/footer-texture.png')",
       },
       fontSize: {
        bannerText: '250px',
       },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
