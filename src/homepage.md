# ![PA Lottery logo](https://dev.v8.palottery.state.pa.us/App_Themes/PALotteryAll/images/logo.png) Style Guide

Front end guidelines for palottery.com

## Notes
- Live CSS changes should not require a refresh, however component and JS changes will
- Changing the comments in the CSS for the KSS handler will not update until a component change, there are ways around this, however for the sake of quicker development of CSS I chose not to implement them as KSS needs to recompile for component changes.
- If you need to update the KSS comments within the component, update the CSS, then the component, if you do not do it in this order you will need to make a component change (ie -add a space) to let gulp know it needs to recompile.
- Webpack is budling the JS for this project to reduce the amount of changes necessary for the kss-assets, go to the bundle.js in src/js for instructions
- img watching in gulp seems to be a bit buggy, but usually will recognize when a new image is there and create appropriate folder, does not usually recognize it being deleted tho. 
    - Images should be small and potential for global if placed in here
    - Use the same paths they would be in the media library starting with the folder name after page-images, see scratch-off folder under image, and activeGame_li component for example.

## Todos
- Make the styleguide styled / scale more realistic to the live site
- Clear up all p tags / h tags / list tags that should not be over specified
- Consider global fix for clearing text styles in components
- Improve 'BuildImg' gulp command

CHANGE LATER****