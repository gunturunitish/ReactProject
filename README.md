# ReactProject

    - While creating the React application, order of the script tags are mandatory

    - There are 2 types of dependencies:
        - Dev dependencies
        - Normal dependencies

    - To install the dev dependencies, we use the following one:
        - npm install -D package_name
        - without the -D, it would be the normal dependency.

    - After installing the packages, we have the symbols near the package name,
        - "^version" - After using "^", the version will be upgraded to the latest one automatically.
        - "~version" - After using "'~'" the version will not be upgraded to the latest one.

    - After intializing the project, we will have the package.json and also package-lock.json will be created.
        - package-lock.json will lock the version of the modules installed, for each and every version.

    - After installing the packages using npm install, it will create the folder called node_modules.
        Node Modules will fetch all the packages and the relevent dependency packages and save in the directory.
        The dependency packages are called transit dependencies.
        We should not push the node modules to the github, which will bloat the repository, but we need to push the package.json and package-lock.json to github.

    - After installing the packages for the project, each one will have their own package.json file in the folder.

    - Using the CDN links in the production ready app, because that will create the network call which is a bit expensive thing rather we can download the react from the npm and maintain it in local.

    # Parcel (https://parceljs.org/)
        - It will create a dev build for us.
        - It will also create the local server for us.
        - HMR : Hot Module Replacement
        - Parcel uses file watching algorithm, written in C++
        - Caching - faster builds
        - Image Optimization
        - Minification
        - Bundling
            - npx parcel build entry_file and the build will be saved in the folder dist
        - Compress
        - Consistent hashing
        - Code Splitting
        - Differential Bundling (Responsible to run the application in older browsers.)
        - Diagnosotics
        - Error Handling
        - Support HTTPS
        - Tree Shaking - Remove unused code while building
        - Different dev and production bundles
