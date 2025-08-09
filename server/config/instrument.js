// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://dbf8f9e1406f99e337cd476ceae11af7@o4509810389221376.ingest.us.sentry.io/4509810395381760",
  integrations:[
    Sentry.mongooseIntegration()
  ],

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});