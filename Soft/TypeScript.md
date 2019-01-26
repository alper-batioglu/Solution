#tsc init
    ./node_modules/typescript/bin/tsc --init

#tsc compile
    with node
        ./node_modules/typescript/bin/tsc app.ts
    with npm direct
        npm run tsc app.ts
    with npm with tsconfig
        npm run tsc