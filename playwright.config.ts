import { type PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "pages/__test__",
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000/",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [{ name: "chrome", use: { ...devices["Desktop Chrome"] } }],
  retries: process.env.CI ? 2 : 0,
};

export default config;
