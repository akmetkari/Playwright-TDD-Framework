# Playwright TDD Automation Framework Documentation

This document provides a comprehensive overview of the **Playwright-TDD-Framework**, a robust and modular test automation solution built using TypeScript and Playwright.

## 🚀 Project Overview
The framework follows a **Test-Driven Development (TDD)** approach with a clean separation of concerns. It implements a hybrid architecture combining the **Page Object Model (POM)** pattern with a step-based orchestration layer and externalized element locators.

### 🛠️ Technology Stack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Test Runner**: [Playwright Test](https://playwright.dev/)
- **Configuration**: JSON based
- **Logging/Utilities**: Built-in Playwright Tracing & Screenshots

---

## 📂 Directory Structure

```text
Playwright-TDD-Framework/
├── Commons/                # Common utility functions
│   ├── ui/                 # UI interaction wrappers (WebCommons)
│   ├── api/                # API request wrappers
│   └── db/                 # Database connection utilities
├── Page-Objects/           # POM implementation
│   ├── page-elements/      # UI element locators stored in JSON files
│   └── Page-steps/         # Page-specific action methods (Classes)
├── Tests/                  # Test suites
│   ├── ui/                 # Frontend/Web tests (.spec.ts)
│   ├── api/                # API tests
│   └── db/                 # Database validation tests
├── TestData/               # Static and dynamic test data
├── Utils/                  # General helper functions (date, string, etc.)
├── config/                 # Environment and application configurations
├── playwright.config.ts    # Main Playwright configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🏗️ Architecture & Component Details

### 1. WebCommons (Commons/ui/web-commons.ts)
A wrapper class around Playwright's native commands. It provides standard methods for common actions like:
- `launchApplication(url)`
- `clickOnElement(selector)`
- `typeText(selector, text)`
- `verifyElementIsVisible(selector)`
- `scrollToElement(selector)`
- `uploadFile(selector, filePath)`

**Why use this?** It centralizes logic for scrolling-into-view, clearing text boxes before typing, and other synchronization logic, making tests more stable.

### 2. Page Objects (Hybrid POM)
The framework separates **Locators** from **Actions**:

- **Locators (`page-elements/`)**: Stored in JSON files for easy maintenance without touching code.
  - Example: `login-page-elements.json` stores XPaths/CSS selectors.
- **Steps (`Page-steps/`)**: TypeScript classes that utilize `WebCommons` to perform high-level business actions.
  - Example: `loginPageSteps` contains `enterUsernameAndPassword(user, pass)`.

### 3. Configuration System
`config/config.json` stores application URLs, credentials, and connectivity details for UI, API, and DB layers.

---

## 🔍 Key Features

### 🛡️ Resilience & Debugging
Configured in `playwright.config.ts`:
- **Fully Parallel**: Optimizes execution speed.
- **Retries**: Configured for CI environments.
- **Trace Viewer**: `retain-on-failure` for deep-dive debugging.
- **Artifacts**: Screenshots and videos are saved automatically on failure.

---

## 📋 How to Run Tests

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- Repository cloned.

### Setup
```bash
npm install
npx playwright install
```

### Execution Commands
| Command | Description |
| --- | --- |
| `npm test` | Run all tests (headless) |
| `npm run test:headed` | Run tests in headed mode |
| `npm run test:ui` | Open Playwright UI for interactive testing |
| `npm run show-report` | View the HTML test report |

---

## 📝 Coding Standards
1. **Locators**: Always externalize locators to `.json` files in `page-elements`.
2. **Naming**: Use camelCase for methods and PascalCase for classes.
3. **Assertions**: Use Playwright's web-first assertions (`expect(locator).toBeVisible()`).
4. **Common methods**: If an action is repeated across pages, move it to `WebCommons`.

---
