#Init
    npm init
    
#Install npm package
    development dependency
        npm install typescript --save-dev
    global dependency (not recommended -> multiple version dependencies)
        npm install -g typescript

#local installed item trigger
    with node
        ./node_modules/typescript/bin/tsc --init
    with npm
        npm run tsc app.js (create scripts item in package.json ex:   "tsc": "tsc")
    with npm (parameter trigger)
        npm run tscinit (create scripts item in package.json ex:      "tscinit": "tsc --init")

#multiple scripts
    "devmac": "npm run tsc && open http://127.0.0.1:8125/ && node NanoServe/serve.js"