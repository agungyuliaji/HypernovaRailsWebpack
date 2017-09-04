# Run and Setup

## Run Rails Server
- go to rails-server folder
- `bundle install`
- `rails s`

## Run Hypernova Server
- go to react-assets folder
- `yarn install`
- `yarn run-dev`

Go to http://localhost:3000 to see react + with example react router rendered

# Folder Structure Information

- `rails-server` : rails app
- `react-assets` : react assets hosted on hypernova
- `react-assets/build` : bundle path, bundle.js for client, ssr-bundle.js for SSR
- `react-assets/src` : react codes
- `react-assets/ssr` : hypernova configuration and SSR related code