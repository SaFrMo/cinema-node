Node.js self-hosted cinema.

# Usage
```
npm i
npm run app
```

Then connect to localhost:3000 on your machine or the local IP (192.168.x.x:3000) on another machine to run!

# Adding New Media
To add new videos:
1. Download the mp4 file.
1. Place in `static/assets/YOUR-SHOW-NAME/YOUR-MP4-NAME`.
1. Restart the server and you'll be set.

# Development
```
npm i
npm run dev
```

Runs a hot-reloading dev server. Cinema-Node is built with a simple Node API and a full-featured Vue client.

Make sure to run `npm run build` before distributing - this will build the contents of `/dist` that are actually served when `npm run app` is run.
