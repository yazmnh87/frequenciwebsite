const path = require('path');
const withCSS = require('@zeit/next-css')
const withImages = require('next-images');

module.exports = withCSS(withImages({
    webpack: (config, {dev}) =>{
        return config;
    }
}));