/*
/ How and why we use this method
/
/ During my time using the initial version of KSS I noticed that the only way seemingly to use JS efficiently was to make a js folder in the kss assets and add them there, and then link it to the index.hbs. 
/
/ Extra note to the above - I found a way around this by the -js command in kss cli,  however this still required a full rebuild every time, so sticking to my method, but using kss cli to auto add the bundle
/
/ That didn't seem like a good method to me, as you may miss things that should be associated with each other, one of them being in the shell of kss and the others being in the src folder. It made sense to me that everything that we intend on using should be seeable in src
/
/ I decided to use webpack to bundle our js for the styleguide as it will work as normal in almost every case. This will also allow us to use the npm package js files a lot easier. Simply import your js here, and then refresh. The gulp is watching all js files in this directory. Using KSS commands for it increased the compile time significantly for me
/
/ Note - if we ever did do decide to use this in future production pages, we could use require.js to load our js files as modules. 
/
*/

// Library files
//import './lib/jcf'
//import './lib/jcf.select'
import './lib/oldjcf' 

// Our Files
import './jcfActivate'
import './instantGame'
import './activeGame_li'