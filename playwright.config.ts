import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/alerts.test.ts"],
    use: {
      headless: false,
      screenshot: "on",
      "video":"on"
    },
    retries: 1,
    reporter: [["dot"], ["json", {
      outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
      open: "always"
    }]]
};

export default config;
