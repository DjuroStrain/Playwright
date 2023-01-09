import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/interactions.test.ts"],
    use: {
      headless: false,
      screenshot: "only-on-failure",
      "video":"retain-on-failure"
    },
    retries: 1,
    reporter: [["dot"], ["json", {
      outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
      open: "always"
    }]]
};

export default config;
