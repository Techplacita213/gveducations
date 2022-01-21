
const LIVE_URL=process.env.NODE_ENV==="development"?
    "http://localhost:5050/"
:
"/"

export {LIVE_URL}