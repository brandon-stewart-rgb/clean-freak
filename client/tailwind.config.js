module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            backgroundImage: () => ({
                // 'login-background':
                //     "linear-gradient(rgba(0,0,0, 0.50), rgba(0,0,0, 0.75)), url('/src/assets/img/110img.jpeg')",
                // 'landing-background':
                //     'linear-gradient(rgba(0,0,0, 0.50), rgba(0,0,0, 0.75)), url(https://github.com/SamanthaPeterson/for-react-portfolio/blob/main/Images%20for%20project%203/130img.jpeg?raw=true)',
                // 'profile-background':
                //     "linear-gradient(rgba(0,0,0, 0.50), rgba(0,0,0, 0.75)), url('/src/assets/img/131img.jpeg')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
      ],
};
